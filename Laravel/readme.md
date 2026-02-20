# Laravel Cheatsheet

## Creating a Laravel Project

You can create a Laravel project using:

```bash
composer create-project --prefer-dist laravel/laravel <project-name>
```

If you use Laravel often, you may also install the Laravel installer:

```bash
composer global require laravel/installer
```

After installation:

```bash
laravel new <project-name>
```

## Setting Up Your Project

Make sure you have a running MySQL instance.

Open your `.env` file and configure your database connection:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

Run migrations after configurating the .env file and also creating the database in MySQL:
```bash
php artisan migrate
```

## Creating Controllers

Controllers define how your application behaves. They are stored in:

```
./<Project>/app/Http/Controllers/
```

You can create a controller manually or use Laravel’s Artisan command:

```bash
php artisan make:controller <ControllerName>
```

Example controller:

```php
namespace App\Http\Controllers;

class OfferController extends Controller
{
    // Functions will go here.
}
```

A controller function might look like this:

```php
namespace App\Http\Controllers;

class ExampleController extends Controller
{
    public function getOffers() {
        // Your logic will go here.
    }
}
```

Controllers may return different types of responses:

```php
namespace App\Http\Controllers;

class ExampleController extends Controller
{
    public function getOffers() {
        return "ok"; 
        return view("path.to.page.file");
        return redirect("https://example.com");
        return response()->json(["success" => true, "message" => "successful request"]);
    }
}
```

## Creating View Files

Laravel uses Blade as its templating engine.

View files live inside:

```
./<Project>/resources/views
```

You may use plain PHP or Blade’s templating features.

### Blade Syntax

Blade directives begin with `@`. Some commonly used ones:

- `@extends`
- `@section` / `@endsection`
- `@yield`
- `@if` / `@endif`
- `@foreach` / `@endforeach`

Example view file:

```php
<!-- home.blade.php -->
<div class="container">
    <h1>Everything we have to offer:</h1>
    @if($offers)
    <ul>
        @foreach($offers as $offer)
            <li>{{ $offer }}</li>
        @endforeach
    </ul>
    @endif
</div>
```

To pass variables to a view, return them through the controller:

```php
namespace App\Http\Controllers;

class ExampleController extends Controller
{
    public function getOffers() {
        $offers = [
            "Offer 1",
            "Offer 2",
            "Offer 3",
            "Offer 4",
            "Offer 5",
            "Offer 6",
            "Offer 7",
        ];

        return view("home", compact("offers"));
    }
}
```

**Blade view paths**  
Paths start from `/views/`.  
Example:  

File:  
```
/views/pages/faq.blade.php
```  
View path:  
```
pages.faq
```

### Using Layouts: @section and @yield

Layouts are usually stored in:

```
/views/layouts
```

Example layout file:

```php
<!-- /views/layouts/app.blade.php -->
<nav>
    @include("navbar")
</nav>
<main class="content">
    @yield("content")
</main>
```

Child view:

```php
<!-- /views/home.blade.php -->
@extends("layouts.app")

@section("content")
<div class="section">
    <p>Section 1</p>
</div>
<div class="section">
    <p>Section 2</p>
</div>
@endsection
```

## Creating Endpoints (Routes)

Routes are defined in:

```
routes/web.php
```

Each route specifies an endpoint and the controller function that handles it.

Example GET route:

```php
use App\Http\Controllers\OfferController;

Route::get('/offers', [OfferController::class, "getOffers"]);
```

Make sure the controller is imported at the top of the file.

## Authentication (Laravel UI)

Laravel UI provides the classic login, registration, email verification, and password reset system.  
When installed, it creates controllers inside:

```
app/Http/Controllers/Auth/
```

These controllers use Laravel’s built-in authentication traits, which contain all the logic you need.

### Installing Laravel UI

```bash
composer require laravel/ui
```

Generate the default authentication scaffolding (Bootstrap example):

```bash
php artisan ui bootstrap --auth
npm install
npm run dev
```

This creates:

- Authentication controllers
- Login & registration views
- Password reset pages
- Email verification pages
- All required authentication routes

### Authentication Controllers

Laravel UI places several controllers in the `Auth` directory.  
Each controller uses a trait that provides the entire implementation.

#### LoginController

Handles user login and logout.

```php
use AuthenticatesUsers;

protected $redirectTo = '/home';
```

The trait provides:
- Login form handling  
- User validation  
- Redirect behavior  
- Logout functionality  

The controller only configures middleware and redirect paths.

#### ForgotPasswordController

Sends password reset emails.

```php
use SendsPasswordResetEmails;
```

The trait handles:
- Generating password reset tokens  
- Sending reset emails  
- Rate limiting  

#### ResetPasswordController

(Also generated, though not shown here.)

Handles completing the password reset process:

```php
use ResetsPasswords;
```

#### VerificationController

Handles email verification.

```php
use VerifiesEmails;

protected $redirectTo = '/home';
```

Includes:
- Email verification links  
- “Resend verification email”  
- Access control using `auth`, `signed`, and `throttle` middleware  

### Using Authentication

All authentication routes are added automatically:

```php
php artisan route:list
```

You will find routes such as:

```
/login
/register
/password/reset
/email/verify
/logout
```

To protect a route so only logged-in users can access it:

```php
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware('auth');
```

To restrict a controller:

```php
public function __construct()
{
    $this->middleware('auth');
}
```

Laravel UI handles the rest automatically:
- session management  
- redirects  
- failed login attempts  
- email notifications  
- rate limiting

**Note: If you are running into errors go to layouts/app.blade.php file and change the following line:**
```php
@vite(['resources/sass/app.scss', 'resources/js/app.js'])
```
**to this:**
```php
@vite(['resources/css/app.css', 'resources/js/app.js'])
```
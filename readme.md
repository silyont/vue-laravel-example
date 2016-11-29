# Start kit of vue with laravel
This is an example of vue with laravel 5.2 using browserify.

## Install

1. Clone the project to local

    ```
    git clone https://github.com/silyont/vue-laravel-example
    cd vue-laravel-example
    ```

1. Install the dependencies of php and node

    ```
    composer install
    npm install
    ```

1. Make new .env file

    ```
    mv .env.example .env
    php artisan key:generate
    ```

1. Complie assets

    ```
    gulp
    ```

1. Start artisan server to test

    ```
    php artisan serve
    ```

## Remark

2. Please upgrade npm and node to the latest stable version

## License

vue-laravel-example is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
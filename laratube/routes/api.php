<?php
use App\Http\Controllers\ApiController;
use App\Http\Controllers\StudentController;
use GuzzleHttp\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
 //   return $request->user();
//});

Route::post('register', [ApiController::class, 'register']);
Route::post('login', [ApiController::class, 'login']);
Route::group(['middleware' => ['jwt.verify']], function(){
    Route::post('student', [StudentController::class, 'getData']);
    Route::get('getOneStudent/{id}', [StudentController::class, 'getOneData']);
    Route::patch('updateStudent/{id}', [StudentController::class, 'updateData']);
    Route::delete('deletestudent/{id}', [StudentController::class, 'deleteData']);

    Route::get('logout/{token}', [ApiController::class, 'logout']);
});

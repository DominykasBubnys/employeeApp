<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use TheSeer\Tokenizer\Exception;
use App\Models\Employee;
use Illuminate\Support\Facades\Log;

class EmployeeController extends Controller
{
    //

    public function getEmployeeList(){
        
        try {
            $employees = Employee::all();

            return response()->json($employees);

        } catch (Exception $err) {
            Log::error($err);
        }
    }

    public function getEmployeeDetails(Request $request){
        
        try {
            $employeeDetails = Employee::findOrFail($request->get("employeeId"));
            return response()->json($employeeDetails);

        } catch (Exception $err) {
            Log::error($err);
        }


    }

    public function Kazkas(){
        echo "labas";
        return 5;
    }
}

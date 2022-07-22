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

    public function updateEmployeeData(Request $request){
        try {
            //code...
            $employeeId = $request->get("employeeId");
            $employeeName = $request->get("employeeName");
            $employeeSalary = $request->get("employeeSalary");

            Employee::where('id', $employeeId)->update([
                'employee_name' => $employeeName,
                'salary' => $employeeSalary
            ]);

            return response()->json([
                'employee_name' => $employeeName,
                'salary' => $employeeSalary,
            ]);

        } catch (Exception $err) {
            Log::error($err);
        }
    }

    public function destroy(Employee $employee){
        try {
            
            $employee->delete();


        } catch (Exception $err) {
            Log::error($err);
        }
    }
}

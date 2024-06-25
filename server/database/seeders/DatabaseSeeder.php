<?php

namespace Database\Seeders;

use App\Models\AssessmentTool;
use App\Models\Course;
use App\Models\Department;
use App\Models\PEO;
use App\Models\PerformanceIndicator;
use App\Models\Program;
use App\Models\ProgramOutcome;
use App\Models\Role;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\UserRole;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        Role::create([
            'role_name' => 'Dean'
        ]);

        Role::create([
            'role_name' => 'Assistant Dean'
        ]);

        Role::create([
            'role_name' => 'EIE Head'
        ]);

        Role::create([
            'role_name' => 'Program Head'
        ]);

        Role::create([
            'role_name' => 'Faculty'
        ]);

        User::create([
            'userID' => '1037',
            'password' => 'password123',
        ]);

        User::create([
            'userID' => '735',
            'password' => 'password123'
        ]);

        UserRole::create([
            'userID' => '1037',
            'role_id' => 2
        ]);

        UserRole::create([
            'userID' => '1037',
            'role_id' => 3
        ]);

        UserRole::create([
            'userID' => '1037',
            'role_id' => 4
        ]);

        UserRole::create([
            'userID' => '735',
            'role_id' => 1
        ]);


        Department::create([
            'department_code' => 'CCS',
            'department_name' => 'College of Computer Studies'
        ]);

        Program::create([
            'program_code' => 'BSIT',
            'program_description' => "Bachelor of Science in Information Technology",
            'department_id' => 1
        ]);
        Program::create([
            'program_code' => 'BSCS',
            'program_description' => "Bachelor of Science in Computer Science",
            'department_id' => 1
        ]);
        Program::create([
            'program_code' => 'BLIS',
            'program_description' => "Bachelor of Library in Information System",
            'department_id' => 1
        ]);
        Program::create([
            'program_code' => 'ACT',
            'program_description' => "Associate in Information Technology",
            'department_id' => 1
        ]);

        ProgramOutcome::create([
            'po_desc' => 'This is the first Program Outcomes',
            'program_id' => 1
        ]);

        ProgramOutcome::create([
            'po_desc' => 'This is the second Program Outcomes',
            'program_id' => 1
        ]);

        PEO::create([
            'peo_desc' => 'This is the first Program Educational Objectives',
            'program_id' => 1
        ]);

        PEO::create([
            'peo_desc' => 'This is the second Program Educational Objectives',
            'program_id' => 1
        ]);

        Course::create([
            'name' => 'Introduction to Software Engineering',
            'unit' => 3,
            'hours' => 3
        ]);

        Course::create([
            'name' => 'Application Development',
            'unit' => 3,
            'hours' => 3
        ]);

        Course::create([
            'name' => 'Presentation, Negotation, and Consultation',
            'unit' => 3,
            'hours' => 3
        ]);

        AssessmentTool::create([
            'tool' => 'CP Findings'
        ]);

        AssessmentTool::create([
            'tool' => 'CP Software'
        ]);

        PerformanceIndicator::create([
            'pi_desc' => 'This is the first Performance Indicator',
            'po_id' => 1,
            'course_id' => 1,
            'at_id' => 1
        ]);

        PerformanceIndicator::create([
            'pi_desc' => 'This is the second Performance Indicator',
            'po_id' => 1,
            'course_id' => 2,
            'at_id' => 2
        ]);

        PerformanceIndicator::create([
            'pi_desc' => 'This is the third Performance Indicator',
            'po_id' => 1,
            'course_id' => 3,
            'at_id' => 1
        ]);

    }
}

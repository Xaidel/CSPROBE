<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('program', function (Blueprint $table) {
            if (!Schema::hasColumn('program', 'department_id')) {
                $table->unsignedBigInteger('department_id');
            }
            $table->foreign('department_id')->references('id')->on('department')->onDelete('cascade')->onUpdate('cascade');
        });

        Schema::table('user_role', function (Blueprint $table) {
            if (!Schema::hasColumn('user_role', 'userID')) {
                $table->integer('userID');
            }
            $table->foreign('userID')->references('userID')->on('user')->onDelete('cascade')->onUpdate('cascade');

            if (!Schema::hasColumn('user_role', 'role_id')) {
                $table->unsignedBigInteger('role_id');
            }
            $table->foreign('role_id')->references('id')->on('role')->onDelete('cascade')->onUpdate('cascade');
        });

        Schema::table('program_outcome', function (Blueprint $table) {
            if (!Schema::hasColumn('program_outcome', 'program_id')) {
                $table->unsignedBigInteger('program_id');
            }
            $table->foreign('program_id')->references('id')->on('program')->onDelete('cascade')->onUpdate('cascade');
        });

        Schema::table('peo', function (Blueprint $table) {
            if (!Schema::hasColumn('peo', 'program_id')) {
                $table->unsignedBigInteger('program_id');
            }
            $table->foreign('program_id')->references('id')->on('program')->onDelete('cascade')->onUpdate('cascade');
        });

        Schema::table('performance_indicator', function (Blueprint $table) {
            if (!Schema::hasColumn('performance_indicator', 'po_id')) {
                $table->unsignedBigInteger('po_id');
            }
            $table->foreign('po_id')->references('id')->on('program_outcome')->onDelete('cascade')->onUpdate('cascade');

            if (!Schema::hasColumn('performance_indicator', 'course_id')) {
                $table->unsignedBigInteger('course_id');
            }

            $table->foreign('course_id')->references('id')->on('course')->onDelete('cascade')->onUpdate('cascade');

            if (!Schema::hasColumn('performance_indicator', 'at_id')) {
                $table->unsignedBigInteger('at_id');
            }

            $table->foreign('at_id')->references('id')->on('assessment_tool')->onDelete('cascade')->onUpdate('cascade');

        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('program', function (Blueprint $table) {
            $table->dropForeign('program_department_id_foreign');
            $table->dropColumn('department_id');
        });

        Schema::table('user_role', function (Blueprint $table) {
            $table->dropForeign('user_role_userid_foreign');
            $table->dropForeign('user_role_role_id_foreign');
            $table->dropColumn('userID');
            $table->dropColumn('role_id');
        });

        Schema::table('program_outcome', function (Blueprint $table) {
            $table->dropForeign('program_outcome_program_id_foreign');
            $table->dropColumn('program_id');
        });

        Schema::table('peo', function (Blueprint $table) {
            $table->dropForeign('peo_program_id_foreign');
            $table->dropColumn('program_id');
        });

        Schema::table('performance_indicator', function (Blueprint $table) {
            $table->dropForeign('performance_indicator_po_id_foreign');
            $table->dropColumn('po_id');
            $table->dropForeign('performance_indicator_course_id_foreign');
            $table->dropColumn('course_id');
            $table->dropForeign('performance_indicator_at_id_foreign');
            $table->dropColumn('at_id');
        });


    }
};

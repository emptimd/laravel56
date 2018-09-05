<?php

namespace App\DataTables;

use App\Models\LanguageSource;
use Form;
use Yajra\DataTables\Services\DataTable;
use Yajra\DataTables\EloquentDataTable;

class LanguageTDataTable extends DataTable
{

    /**
     * Build DataTable class.
     *
     * @param mixed $query Results from query() method.
     * @return \Yajra\DataTables\DataTableAbstract
     */
    public function dataTable($query)
    {
        $dataTable = new EloquentDataTable($query);

        return $dataTable->addColumn('action', 'admin.languages.datatables_actions')
            ->editColumn('translation', function($model) {
                return Form::textarea('translation', $model->translation, ['class'=> 'form-control translation', 'data-id' => $model->id]);
            })
            ->addColumn('action', function($model) {
                return "<button type=\"button\" class=\"btn btn-lg btn-success save-translation\" data-id='$model->id'>Save</button>";
            })->rawColumns(['action', 'translation']);
    }


    /**
     * @return \Illuminate\Http\JsonResponse
     */
//    public function ajax()
//    {
//        return $this->datatables
//            ->eloquent($this->query())
//            ->editColumn('translation', function($model) {
//                return Form::textarea('translation', $model->translation, ['class'=> 'form-control translation', 'data-id' => $model->id]);
//            })
//            ->addColumn('action', function($model) {
//                return "<button type=\"button\" class=\"btn btn-lg btn-success save-translation\" data-id='$model->id'>Save</button>";
//            })
//            ->make(true);
//    }

    /**
     * Get the query object to be processed by datatables.
     *
     * @return \Illuminate\Database\Query\Builder|\Illuminate\Database\Eloquent\Builder
     */
    public function query()
    {
        $a = explode('/', \Request::path());
//        $languages = LanguageSource::leftJoin('language_translate', 'language_translate.id', '=', 'language_source.id')
//            ->leftJoinWhere('language_source', 'language_source.language', '=', $a[2])
//            ->select(['category', 'message', 'language_translate.translation', 'language_source.id'])/*->where('language_source.language', '=', $a[2])*/;

        $languages = LanguageSource::leftJoin('language_translate', function($q) use($a)
            {
                $q->on('language_translate.id', '=', 'language_source.id')
                ->where('language_translate.language', '=', $a[2]);
            })
            ->select(['category', 'message', 'language_translate.translation', 'language_source.id'])/*->where('language_source.language', '=', $a[2])*/;


        return $this->applyScopes($languages);
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\Datatables\Html\Builder
     */
    public function html()
    {
        return $this->builder()
            ->columns($this->getColumns())
            ->addAction(['width' => 'auto'])
            ->ajax('')
            ->parameters([
//                'order' => [[2,'desc']],
//                'dom' => 'Bfrtip',
                'pageLength' => 25,
                'language' => [
                    'lengthMenu' => '_MENU_',
                    'searchPlaceholder' => 'Search',
                    'search' => "_INPUT_",
                ],
                'scrollX' => false,
                'buttons' => [
                    'print',
                    'reset',
                    'reload',
                    [
                         'extend'  => 'collection',
                         'text'    => '<i class="fa fa-download"></i> Export',
                         'buttons' => [
                             'csv',
                             'excel',
                             'pdf',
                         ],
                    ],
                    'colvis'
                ]
            ]);
    }

    /**
     * Get columns.
     *
     * @return array
     */
    private function getColumns()
    {
        return [
            'category' => ['name' => 'category', 'data' => 'category'],
            'source' => ['name' => 'message', 'data' => 'message'],
            'translation' => ['name' => 'translation', 'data' => 'translation']
        ];
    }

    /**
     * Get filename for export.
     *
     * @return string
     */
    protected function filename()
    {
        return 'languages';
    }
}

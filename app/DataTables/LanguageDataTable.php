<?php

namespace App\DataTables;

use App\Models\Language;
use App\Models\LanguageSource;
use App\Models\LanguageTranslate;
use Form;
use Yajra\DataTables\Services\DataTable;
use Yajra\DataTables\EloquentDataTable;


class LanguageDataTable extends DataTable
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
            ->addColumn('statistic', function($model) {
                return "<span class='statistic'><span style='width:{$model->getGridStatistic()}%'></span><i>{$model->getGridStatistic()}%</i></span>";
            })->rawColumns(['action', 'statistic']);
    }













    /**
     * @return \Illuminate\Http\JsonResponse
     */
//    public function ajax()
//    {
//
////        throw new \Exception(json_encode($this->query()));
//        return $this->datatables
//            ->eloquent($this->query())
//            ->addColumn('action', 'admin.languages.datatables_actions')
//            ->addColumn('statistic', function($model) {
//                return "<span class='statistic'><span style='width:{$model->getGridStatistic()}%'></span><i>{$model->getGridStatistic()}%</i></span>";
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

        $languages = Language::select(['language_id', 'name_ascii', 'status']);


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
            ->addColumn([
                'defaultContent' => '',
                'data'           => 'statistic',
                'name'           => 'statistic',
                'title'          => 'Statistic',
                'render'         => null,
                'orderable'      => false,
                'searchable'     => false,
                'exportable'     => false,
                'printable'      => true,
                'footer'         => '',
            ])
            ->addAction(['width' => 'auto'])
            ->ajax('')
            ->parameters([
                'order' => [[2,'desc']],
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
            'language_id' => ['name' => 'language_id', 'data' => 'language_id'],
//            'tt' => [' name' => 'tt', 'data' => 'tt'],
//            'country' => ['name' => 'country', 'data' => 'country'],
//            'name' => ['name' => 'name', 'data' => 'name'],
            'name_ascii' => ['name' => 'name_ascii', 'data' => 'name_ascii'],
            'status' => ['name' => 'status', 'data' => 'status']
        ];
    }

    public function statistic()
    {
        static $statistics;
        if (!$statistics) {
            $count = LanguageSource::all()->count();
            if ($count == 0) {
                return 0;
            }

            $languageTranslates = LanguageTranslate::
                select(['language', 'COUNT(*) AS cnt'])
                ->whereNotNull('translation')
                ->groupBy(['language'])
                ->get();

            foreach ($languageTranslates as $languageTranslate) {
                $statistics[$languageTranslate->language] = floor(($languageTranslate->cnt / $count) * 100);
            }
        }

        return isset($statistics[$this->language_id]) ? $statistics[$this->language_id] : 0;

//        return view('statistic', []);
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

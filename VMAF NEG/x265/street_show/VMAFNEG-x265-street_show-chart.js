
            $(function () {
                $(document).ready(function() {
                    var bar_options = {
                        title: {
                            text: ''
                        },
                        subtitle: {
                            text: ''
                        },
                        chart: {
                            type: 'bar',
                            zoomType: 'xy'
                        },
                        legend: {
                            enabled: false
                        },
                        xAxis: {
                            title: {
                                text: ''
                            }
                        },
                        yAxis: {min: 0, title: {text: ''}},
                        plotOptions: {bar: {dataLabels: {enabled: true}}},
                        series: [],
                        credits: {
                            text: 'videoprocessing.ai',
                            href: 'https://videoprocessing.ai/'
                            },
                    };
                    bar_options.series.push({name: '', data: [1.0, 1.214, 1.27, 1.275, 1.298, 1.311, 1.311, 1.319, 1.326, 1.476, 1.478, 1.479, 1.483, 1.959, 1.983]});
                    bar_options.xAxis.categories = ['only compressed (100%)', 'topaz-amqs-1 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'DynaVSR-R (50%, x2)', 'only compressed (50%)', 'topaz-amq-12 (50%, x2)', 'waifu2x_cunet (50%, x2)', 'waifu2x_anime (50%, x2)', 'iSeeBetter (50%, x2)', 'RealSR (50%, x4)', 'SOF-VSR-BI (50%, x4)', 'DBVSR (50%, x4)', 'LGFN (50%, x4)', 'EGVSR (50%, x2)', 'SOF-VSR-BD (50%, x4)'];
                    bar_options.yAxis.title.text = "BSQ-rate (VMAF NEG)";
                    Highcharts.chart('VMAFNEG-x265-street_show-chart', bar_options);
                });
            });
            
            
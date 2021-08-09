
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
                    bar_options.series.push({name: '', data: [1.0, 2.232, 2.572, 2.622, 4.266, 5.383, 6.536, 6.817, 6.902, 8.471, 10.095, 14.478, 15.872, 15.872, 15.872]});
                    bar_options.xAxis.categories = ['only compressed (100%)', 'topaz-ahq-11 (50%, x2)', 'topaz-amq-12 (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'only compressed (50%)', 'RealSR (50%, x4)', 'waifu2x_cunet (50%, x2)', 'DynaVSR-R (50%, x2)', 'waifu2x_anime (50%, x2)', 'iSeeBetter (50%, x2)', 'SOF-VSR-BI (50%, x4)', 'DBVSR (50%, x4)', 'LGFN (50%, x4)', 'EGVSR (50%, x2)', 'SOF-VSR-BD (50%, x4)'];
                    bar_options.yAxis.title.text = "BSQ-rate (ERQAv1.0)";
                    Highcharts.chart('ERQA-libaom-av1-skiing-chart', bar_options);
                });
            });
            
            

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
                    bar_options.series.push({name: '', data: [1.0, 2.316, 2.463, 2.706, 3.216, 3.262, 3.411, 3.778, 4.001, 4.324, 4.916, 4.956, 5.138, 5.141, 5.564]});
                    bar_options.xAxis.categories = ['only compressed (100%)', 'topaz-amqs-1 (50%, x2)', 'topaz-amq-12 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'only compressed (50%)', 'RealSR (50%, x4)', 'DynaVSR-R (50%, x2)', 'waifu2x_anime (50%, x2)', 'waifu2x_cunet (50%, x2)', 'iSeeBetter (50%, x2)', 'SOF-VSR-BI (50%, x4)', 'DBVSR (50%, x4)', 'SOF-VSR-BD (50%, x4)', 'LGFN (50%, x4)', 'EGVSR (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (ERQAv1.0)";
                    Highcharts.chart('ERQA-H.266-skiing-chart', bar_options);
                });
            });
            
            
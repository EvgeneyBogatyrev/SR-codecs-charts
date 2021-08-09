
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
                    bar_options.series.push({name: '', data: [0.065, 0.138, 0.295, 0.297, 0.298, 0.298, 0.407, 0.479, 0.526, 0.576, 0.618, 1.0, 1.288, 1.385, 1.486]});
                    bar_options.xAxis.categories = ['waifu2x_anime (50%, x2)', 'waifu2x_cunet (50%, x2)', 'iSeeBetter (50%, x2)', 'LGFN (50%, x4)', 'DBVSR (50%, x4)', 'SOF-VSR-BI (50%, x4)', 'DynaVSR-R (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'RealSR (50%, x4)', 'topaz-amq-12 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'only compressed (100%)', 'SOF-VSR-BD (50%, x4)', 'EGVSR (50%, x2)', 'only compressed (50%)'];
                    bar_options.yAxis.title.text = "BSQ-rate (Y-PSNR)";
                    Highcharts.chart('PSNR-H.266-street_show-chart', bar_options);
                });
            });
            
            
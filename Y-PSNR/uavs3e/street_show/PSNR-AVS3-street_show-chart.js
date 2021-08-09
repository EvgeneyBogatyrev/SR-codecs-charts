
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
                    bar_options.series.push({name: '', data: [0.206, 0.311, 0.642, 1.0, 1.015, 1.259, 1.269, 1.299, 1.31, 2.963, 3.511, 3.759, 4.322, 4.576, 5.376]});
                    bar_options.xAxis.categories = ['waifu2x_anime (50%, x2)', 'waifu2x_cunet (50%, x2)', 'only compressed (50%)', 'only compressed (100%)', 'iSeeBetter (50%, x2)', 'DynaVSR-R (50%, x2)', 'LGFN (50%, x4)', 'SOF-VSR-BI (50%, x4)', 'DBVSR (50%, x4)', 'RealSR (50%, x4)', 'SOF-VSR-BD (50%, x4)', 'EGVSR (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'topaz-amq-12 (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (Y-PSNR)";
                    Highcharts.chart('PSNR-AVS3-street_show-chart', bar_options);
                });
            });
            
            
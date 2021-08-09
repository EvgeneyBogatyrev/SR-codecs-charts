
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
                    bar_options.series.push({name: '', data: [0.83, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]});
                    bar_options.xAxis.categories = ['only compressed (50%)', 'DynaVSR-R (50%, x2)', 'EGVSR (50%, x2)', 'iSeeBetter (50%, x2)', 'LGFN (50%, x4)', 'only compressed (100%)', 'DBVSR (50%, x4)', 'RealSR (50%, x4)', 'SOF-VSR-BD (50%, x4)', 'SOF-VSR-BI (50%, x4)', 'topaz-ahq-11 (50%, x2)', 'topaz-amq-12 (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'waifu2x_anime (50%, x2)', 'waifu2x_cunet (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (YUV-MS-SSIM)";
                    Highcharts.chart('MSSSIM-H.266-skiing-chart', bar_options);
                });
            });
            
            
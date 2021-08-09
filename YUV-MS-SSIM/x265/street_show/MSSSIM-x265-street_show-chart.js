
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
                    bar_options.series.push({name: '', data: [0.837, 0.851, 0.952, 0.953, 0.96, 0.962, 0.964, 0.965, 1.0, 1.017, 1.182, 1.185, 1.215, 1.363, 1.363]});
                    bar_options.xAxis.categories = ['waifu2x_anime (50%, x2)', 'waifu2x_cunet (50%, x2)', 'iSeeBetter (50%, x2)', 'SOF-VSR-BI (50%, x4)', 'DynaVSR-R (50%, x2)', 'DBVSR (50%, x4)', 'RealSR (50%, x4)', 'LGFN (50%, x4)', 'only compressed (100%)', 'only compressed (50%)', 'topaz-amqs-1 (50%, x2)', 'topaz-amq-12 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'EGVSR (50%, x2)', 'SOF-VSR-BD (50%, x4)'];
                    bar_options.yAxis.title.text = "BSQ-rate (YUV-MS-SSIM)";
                    Highcharts.chart('MSSSIM-x265-street_show-chart', bar_options);
                });
            });
            
            

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
                    bar_options.series.push({name: '', data: [0.833, 0.844, 0.914, 0.927, 0.928, 0.932, 0.947, 0.948, 0.967, 0.995, 1.0, 1.031, 1.073, 1.285, 1.332]});
                    bar_options.xAxis.categories = ['waifu2x_anime (50%, x2)', 'waifu2x_cunet (50%, x2)', 'DynaVSR-R (50%, x2)', 'SOF-VSR-BI (50%, x4)', 'RealSR (50%, x4)', 'iSeeBetter (50%, x2)', 'DBVSR (50%, x4)', 'LGFN (50%, x4)', 'only compressed (50%)', 'topaz-amqs-1 (50%, x2)', 'only compressed (100%)', 'topaz-amq-12 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'SOF-VSR-BD (50%, x4)', 'EGVSR (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (YUV-MS-SSIM)";
                    Highcharts.chart('MSSSIM-x265-skiing-chart', bar_options);
                });
            });
            
            
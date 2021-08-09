
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
                    bar_options.series.push({name: '', data: [1.0, 1.083, 1.087, 1.198, 1.198, 1.205, 1.224, 1.238, 1.239, 1.331, 1.756, 1.85, 1.923, 2.05, 2.117]});
                    bar_options.xAxis.categories = ['only compressed (100%)', 'waifu2x_cunet (50%, x2)', 'waifu2x_anime (50%, x2)', 'iSeeBetter (50%, x2)', 'DynaVSR-R (50%, x2)', 'only compressed (50%)', 'SOF-VSR-BI (50%, x4)', 'DBVSR (50%, x4)', 'LGFN (50%, x4)', 'RealSR (50%, x4)', 'topaz-amqs-1 (50%, x2)', 'topaz-amq-12 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'SOF-VSR-BD (50%, x4)', 'EGVSR (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (YUV-MS-SSIM)";
                    Highcharts.chart('MSSSIM-AVS3-street_show-chart', bar_options);
                });
            });
            
            
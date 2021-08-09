
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
                    bar_options.series.push({name: '', data: [1.0, 1.67, 1.818, 2.295, 2.657, 2.874, 3.302, 5.35, 5.799, 6.509, 6.85, 6.871, 10.604, 10.604, 10.604]});
                    bar_options.xAxis.categories = ['only compressed (100%)', 'RealSR (50%, x4)', 'topaz-ahq-11 (50%, x2)', 'waifu2x_cunet (50%, x2)', 'waifu2x_anime (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'topaz-amq-12 (50%, x2)', 'SOF-VSR-BI (50%, x4)', 'only compressed (50%)', 'iSeeBetter (50%, x2)', 'LGFN (50%, x4)', 'DBVSR (50%, x4)', 'EGVSR (50%, x2)', 'DynaVSR-R (50%, x2)', 'SOF-VSR-BD (50%, x4)'];
                    bar_options.yAxis.title.text = "BSQ-rate (YUV-MS-SSIM)";
                    Highcharts.chart('MSSSIM-AVS3-animation_clip-chart', bar_options);
                });
            });
            
            
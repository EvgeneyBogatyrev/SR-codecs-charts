
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
                    bar_options.series.push({name: '', data: [0.084, 0.159, 0.547, 0.666, 0.729, 0.776, 0.882, 0.911, 0.917, 1.0, 1.042, 1.051, 1.081, 1.089, 1.093]});
                    bar_options.xAxis.categories = ['waifu2x_anime (50%, x2)', 'waifu2x_cunet (50%, x2)', 'RealSR (50%, x4)', 'topaz-amqs-1 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'iSeeBetter (50%, x2)', 'topaz-amq-12 (50%, x2)', 'EGVSR (50%, x2)', 'DBVSR (50%, x4)', 'only compressed (100%)', 'SOF-VSR-BI (50%, x4)', 'SOF-VSR-BD (50%, x4)', 'only compressed (50%)', 'DynaVSR-R (50%, x2)', 'LGFN (50%, x4)'];
                    bar_options.yAxis.title.text = "BSQ-rate (Y-PSNR)";
                    Highcharts.chart('PSNR-x265-animation_clip-chart', bar_options);
                });
            });
            
            

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
                    bar_options.series.push({name: '', data: [0.372, 0.55, 0.777, 1.0, 1.394, 1.493, 6.656, 15.118, 21.445, 21.445, 21.445, 21.445, 21.445, 21.445, 21.445]});
                    bar_options.xAxis.categories = ['RealSR (50%, x4)', 'topaz-amqs-1 (50%, x2)', 'iSeeBetter (50%, x2)', 'only compressed (100%)', 'DBVSR (50%, x4)', 'topaz-ahq-11 (50%, x2)', 'topaz-amq-12 (50%, x2)', 'SOF-VSR-BI (50%, x4)', 'SOF-VSR-BD (50%, x4)', 'LGFN (50%, x4)', 'EGVSR (50%, x2)', 'only compressed (50%)', 'DynaVSR-R (50%, x2)', 'waifu2x_anime (50%, x2)', 'waifu2x_cunet (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (Y-PSNR)";
                    Highcharts.chart('PSNR-libaom-av1-animation_clip-chart', bar_options);
                });
            });
            
            
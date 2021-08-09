
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
                    bar_options.series.push({name: '', data: [0.053, 0.2, 1.0, 1.167, 1.609, 1.685, 1.773, 1.788, 2.297, 5.591, 6.309, 8.534, 10.987, 10.987, 10.987]});
                    bar_options.xAxis.categories = ['waifu2x_anime (50%, x2)', 'waifu2x_cunet (50%, x2)', 'only compressed (100%)', 'iSeeBetter (50%, x2)', 'DynaVSR-R (50%, x2)', 'LGFN (50%, x4)', 'SOF-VSR-BI (50%, x4)', 'DBVSR (50%, x4)', 'only compressed (50%)', 'RealSR (50%, x4)', 'topaz-amqs-1 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'EGVSR (50%, x2)', 'SOF-VSR-BD (50%, x4)', 'topaz-amq-12 (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (Y-PSNR)";
                    Highcharts.chart('PSNR-libaom-av1-street_show-chart', bar_options);
                });
            });
            
            
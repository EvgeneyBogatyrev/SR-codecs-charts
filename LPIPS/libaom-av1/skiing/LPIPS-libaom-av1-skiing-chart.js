
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
                    bar_options.series.push({name: '', data: [1.0, 1.571, 1.914, 1.925, 1.969, 2.019, 2.021, 2.057, 2.101, 2.125, 2.343, 2.383, 2.389, 2.395, 2.499]});
                    bar_options.xAxis.categories = ['only compressed (100%)', 'topaz-ahq-11 (50%, x2)', 'topaz-amq-12 (50%, x2)', 'iSeeBetter (50%, x2)', 'DynaVSR-R (50%, x2)', 'EGVSR (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'SOF-VSR-BD (50%, x4)', 'only compressed (50%)', 'RealSR (50%, x4)', 'LGFN (50%, x4)', 'SOF-VSR-BI (50%, x4)', 'DBVSR (50%, x4)', 'waifu2x_cunet (50%, x2)', 'waifu2x_anime (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (LPIPS)";
                    Highcharts.chart('LPIPS-libaom-av1-skiing-chart', bar_options);
                });
            });
            
            
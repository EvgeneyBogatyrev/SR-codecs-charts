
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
                    bar_options.series.push({name: '', data: [0.9, 1.0, 1.075, 1.158, 1.71, 1.749, 1.824, 1.853, 1.888, 2.132, 2.139, 2.147, 2.157, 3.679, 3.812]});
                    bar_options.xAxis.categories = ['topaz-ahq-11 (50%, x2)', 'only compressed (100%)', 'topaz-amq-12 (50%, x2)', 'DynaVSR-R (50%, x2)', 'only compressed (50%)', 'iSeeBetter (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'waifu2x_cunet (50%, x2)', 'waifu2x_anime (50%, x2)', 'SOF-VSR-BI (50%, x4)', 'DBVSR (50%, x4)', 'RealSR (50%, x4)', 'LGFN (50%, x4)', 'SOF-VSR-BD (50%, x4)', 'EGVSR (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (VMAF)";
                    Highcharts.chart('VMAFCLIPPED-H.266-skiing-chart', bar_options);
                });
            });
            
            
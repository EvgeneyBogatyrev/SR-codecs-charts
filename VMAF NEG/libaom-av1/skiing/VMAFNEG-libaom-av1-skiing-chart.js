
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
                    bar_options.series.push({name: '', data: [1.0, 1.455, 1.571, 1.591, 1.701, 1.729, 1.736, 1.762, 1.831, 2.127, 2.132, 2.149, 2.248, 2.248, 2.248]});
                    bar_options.xAxis.categories = ['only compressed (100%)', 'DynaVSR-R (50%, x2)', 'iSeeBetter (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'waifu2x_cunet (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'waifu2x_anime (50%, x2)', 'topaz-amq-12 (50%, x2)', 'only compressed (50%)', 'DBVSR (50%, x4)', 'SOF-VSR-BI (50%, x4)', 'LGFN (50%, x4)', 'EGVSR (50%, x2)', 'RealSR (50%, x4)', 'SOF-VSR-BD (50%, x4)'];
                    bar_options.yAxis.title.text = "BSQ-rate (VMAF NEG)";
                    Highcharts.chart('VMAFNEG-libaom-av1-skiing-chart', bar_options);
                });
            });
            
            
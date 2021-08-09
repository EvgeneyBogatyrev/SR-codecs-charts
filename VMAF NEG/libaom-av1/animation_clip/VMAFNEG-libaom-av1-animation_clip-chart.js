
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
                    bar_options.series.push({name: '', data: [1.0, 3.83, 3.941, 7.002, 18.347, 18.588, 19.319, 19.319, 19.319, 19.319, 19.319, 19.319, 19.319, 19.319, 19.319]});
                    bar_options.xAxis.categories = ['only compressed (100%)', 'topaz-amqs-1 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'topaz-amq-12 (50%, x2)', 'waifu2x_cunet (50%, x2)', 'iSeeBetter (50%, x2)', 'only compressed (50%)', 'RealSR (50%, x4)', 'SOF-VSR-BD (50%, x4)', 'SOF-VSR-BI (50%, x4)', 'EGVSR (50%, x2)', 'DBVSR (50%, x4)', 'LGFN (50%, x4)', 'waifu2x_anime (50%, x2)', 'DynaVSR-R (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (VMAF NEG)";
                    Highcharts.chart('VMAFNEG-libaom-av1-animation_clip-chart', bar_options);
                });
            });
            
            
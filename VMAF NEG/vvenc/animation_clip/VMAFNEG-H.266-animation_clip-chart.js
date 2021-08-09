
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
                    bar_options.series.push({name: '', data: [0.233, 0.241, 0.255, 0.406, 0.414, 0.43, 0.443, 0.454, 0.911, 0.973, 1.0, 1.258, 3.927, 3.927, 3.927]});
                    bar_options.xAxis.categories = ['topaz-amqs-1 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'topaz-amq-12 (50%, x2)', 'waifu2x_anime (50%, x2)', 'waifu2x_cunet (50%, x2)', 'RealSR (50%, x4)', 'iSeeBetter (50%, x2)', 'DynaVSR-R (50%, x2)', 'LGFN (50%, x4)', 'DBVSR (50%, x4)', 'only compressed (100%)', 'SOF-VSR-BI (50%, x4)', 'only compressed (50%)', 'EGVSR (50%, x2)', 'SOF-VSR-BD (50%, x4)'];
                    bar_options.yAxis.title.text = "BSQ-rate (VMAF NEG)";
                    Highcharts.chart('VMAFNEG-H.266-animation_clip-chart', bar_options);
                });
            });
            
            
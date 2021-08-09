
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
                    bar_options.series.push({name: '', data: [1.0, 1.341, 1.563, 1.961, 2.063, 2.107, 2.511, 2.622, 2.67, 3.0, 3.016, 3.049, 3.251, 3.251, 3.251]});
                    bar_options.xAxis.categories = ['only compressed (100%)', 'topaz-ahq-11 (50%, x2)', 'topaz-amq-12 (50%, x2)', 'only compressed (50%)', 'topaz-amqs-1 (50%, x2)', 'DynaVSR-R (50%, x2)', 'iSeeBetter (50%, x2)', 'waifu2x_cunet (50%, x2)', 'waifu2x_anime (50%, x2)', 'SOF-VSR-BI (50%, x4)', 'DBVSR (50%, x4)', 'LGFN (50%, x4)', 'EGVSR (50%, x2)', 'RealSR (50%, x4)', 'SOF-VSR-BD (50%, x4)'];
                    bar_options.yAxis.title.text = "BSQ-rate (VMAF)";
                    Highcharts.chart('VMAFCLIPPED-libaom-av1-skiing-chart', bar_options);
                });
            });
            
            
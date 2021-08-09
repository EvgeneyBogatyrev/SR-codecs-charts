
                    $(function () {
                        $(document).ready(function() {
                            plot_options = {
                            chart: {
                                zoomType: 'xy'
                            },
                            title: {
                                text: ''
                            },
                            subtitle: {
                                text: ''
                            },
                            yAxis: {
                                title: {
                                    text: ''
                                }
                            },
                            xAxis: {
                                title: {
                                        text: ''
                                }
                            },
                            legend: {
                                layout: 'vertical',
                                align: 'right',
                                verticalAlign: 'bottom',
                                floating: true,
                                itemStyle: {
                                    "fontSize" : "10px",
                                },
                                width: 340,
                                layout: 'horizontal',
                                y: -50,
                            },
                            colors: [
                                '#5FADF5',
                                '#5FF5D2',
                                '#E6845E',
                                '#E3E645',
                                '#000000',
                                '#E66ADB',
                                '#AB9EE6',
                                '#407A5B'
                            ],
                            plotOptions: {
                                series: {
                                    label: {
                                        connectorAllowed: false
                                    },
                                }
                            },
                            navigation: {
                                buttonOptions: {
                                    align: 'right',
                                    verticalAlign: 'top',
                                    y: 0
                                }
                            },
                            series: [],
                            responsive: {
                                rules: [{
                                    condition: {
                                        maxWidth: 500
                                    },
                                    chartOptions: {
                                        legend: {
                                            layout: 'horizontal',
                                            align: 'center',
                                            verticalAlign: 'bottom'
                                        }
                                    }
                                }]
                            },
                            credits: {
                                text: 'videoprocessing.ai',
                                href: 'https://videoprocessing.ai/'
                                },
                            };
                
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.827, 0.6850279594651033], [1.743, 1.997648175394958], [3.653, 2.3453438425822455]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.827, 0.9811327223815899], [1.743, 1.9085103784858553], [3.653, 2.398016700283683]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.827, 0.3649439620901497], [1.743, 1.8190846784861705], [3.653, 2.2951097102866327]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.827, 2.1592421949107967], [1.743, 3.1122590614187744], [3.653, 3.210001869954219]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.827, 0.9806748464498521], [1.743, 2.4289972995651268], [3.653, 2.7103225690515127]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.827, 0.6012842910840496], [1.743, 1.8440766764725316], [3.653, 2.189672335075258]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.827, 0.8744123485204122], [1.743, 2.1584515700537503], [3.653, 2.7130301157784795]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.889, 0.7034993688141521], [1.854, 3.4661242902118876], [3.898, 4.107792778734181]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.86, 1.1395596486300361], [1.804, 2.1777558645474766], [3.762, 2.605632506476058]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.827, 2.8259816224579106], [1.743, 4.191452318892331], [3.653, 4.524928828795465]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.827, 3.617066348896661], [1.743, 4.39876397254558], [3.653, 4.589643308514617]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.827, 3.1201229706175124], [1.743, 4.309830875525405], [3.653, 4.564851242681633]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.827, 1.4326752236405262], [1.743, 2.598558316149162], [3.653, 2.860062558183652]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.827, 1.2491241364240535], [1.743, 2.6084238744691923], [3.653, 3.0420752238619113]]});
                        
                        plot_options.title.text = 'Subjective';
                        plot_options.subtitle.text = 'x264 + animation_clip_2';
                        plot_options.yAxis.title.text = 'Subjective';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('Subjective-x264-animation_clip_2-graph', plot_options);

                    });
                });

        
            

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
                
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.827, 0.5329974842207299], [1.743, 1.6866245559313415], [3.653, 2.2821596321252624]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.827, 0.5859154235197066], [1.743, 2.180297122551127], [3.653, 2.5643066312530087]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.827, 0.37192549262706337], [1.743, 1.7700094672831572], [3.653, 2.2545047997564627]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.827, 1.7889096748416913], [1.743, 2.6856926111131463], [3.653, 3.035865740191816]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.827, 1.004619216182117], [1.743, 2.341698117595574], [3.653, 3.0073483560928564]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.827, 0.5217610050971346], [1.743, 1.5451107068240644], [3.653, 2.335518354540668]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.827, 0.8484943318472962], [1.743, 2.179152522430977], [3.653, 2.7487493615674756]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.889, 2.3552515505405776], [1.854, 4.458533223921117], [3.898, 5.153674927993373]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.86, 1.752442818798971], [1.804, 2.896840082578251], [3.762, 3.261045304227834]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.827, 3.781427938132234], [1.743, 4.389172567033722], [3.653, 4.409309287200901]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.827, 3.992680201017967], [1.743, 4.657423364050224], [3.653, 4.447881475424576]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.827, 3.6412659734858193], [1.743, 4.345470533506246], [3.653, 4.733753126903771]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.827, 1.0734030826642493], [1.743, 2.4379064929462393], [3.653, 3.030765317607739]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.827, 1.121167802057568], [1.743, 2.4991769747855965], [3.653, 2.8021927316860333]]});
                        
                        plot_options.title.text = 'Subjective';
                        plot_options.subtitle.text = 'x264 + animation_clip_1';
                        plot_options.yAxis.title.text = 'Subjective';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('Subjective-x264-animation_clip_1-graph', plot_options);

                    });
                });

        
            
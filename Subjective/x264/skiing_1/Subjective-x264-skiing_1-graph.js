
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
                
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.84, 2.3024460019869077], [1.704, 3.3789010610590227], [3.526, 4.00019485720655]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.84, 2.3651266446202346], [1.704, 3.725395531177544], [3.526, 3.9066001159966013]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.84, 2.085398223679279], [1.704, 3.2929290069703105], [3.526, 3.781526081357695]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.84, 2.7726576330604598], [1.704, 3.983314887928857], [3.526, 4.494384602354506]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.84, 2.419591298942231], [1.704, 3.7448134529641766], [3.526, 4.265956256869561]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.84, 2.2077451298555375], [1.704, 3.4052341404635835], [3.526, 3.936854596641781]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.84, 2.2333565995865037], [1.704, 3.5189206105250066], [3.526, 4.257702982451299]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.879, 0.5010132304632622], [1.744, 2.5743336170431057], [3.493, 4.247548742975136]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.853, 3.0531678615855977], [1.732, 4.271999128665371], [3.567, 4.887970861408138]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.84, 4.880060711303289], [1.704, 6.385454901997716], [3.526, 6.501816135416896]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.84, 5.853402365390399], [1.704, 7.038850947766709], [3.526, 6.8611671479870955]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.84, 5.32564556583426], [1.704, 6.179555297954708], [3.526, 6.460323907566415]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.84, 2.525663160465221], [1.704, 3.7404459641117116], [3.526, 4.226832311248975]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.84, 2.5231277509038823], [1.704, 3.6716582333035475], [3.526, 4.259577235617105]]});
                        
                        plot_options.title.text = 'Subjective';
                        plot_options.subtitle.text = 'x264 + skiing_1';
                        plot_options.yAxis.title.text = 'Subjective';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('Subjective-x264-skiing_1-graph', plot_options);

                    });
                });

        
            

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
            
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.11947870000000001, 0.9450085560480753], [0.31808179999999997, 0.9666489958763123], [0.5314871000000001, 0.9740613102912903], [0.893642, 0.9793350199858347], [1.8572966, 0.9833654264609019], [3.9125127, 0.9861327111721039], [6.7043932999999996, 0.9871404469013214]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.11947870000000001, 0.945186177889506], [0.31808179999999997, 0.9670176804065704], [0.5314871000000001, 0.9745068252086639], [0.893642, 0.9798092246055603], [1.8572966, 0.9838289221127828], [3.9125127, 0.9865349729855856], [6.7043932999999996, 0.9875078797340393]]});
                        
                        plot_options.series.push({name: 'EGVSR (50%, x2)', data: [[0.11947870000000001, 0.9414927363395691], [0.31808179999999997, 0.9611724217732748], [0.5314871000000001, 0.967644214630127], [0.893642, 0.9720511138439178], [1.8572966, 0.9752237995465597], [3.9125127, 0.977207620938619], [6.7043932999999996, 0.9778875410556793]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.11947870000000001, 0.9450328747431437], [0.31808179999999997, 0.9668354392051697], [0.5314871000000001, 0.9743126432100931], [0.893642, 0.9796339670817057], [1.8572966, 0.9836965302626292], [3.9125127, 0.9864815771579742], [6.7043932999999996, 0.9874991277853647]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.11947870000000001, 0.9449958701928457], [0.31808179999999997, 0.9666532675425211], [0.5314871000000001, 0.974070539077123], [0.893642, 0.9793499211470286], [1.8572966, 0.9833830893039703], [3.9125127, 0.9861553212006887], [6.7043932999999996, 0.9871681729952494]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.21127289999999999, 0.9565347830454508], [0.3313598, 0.967028965552648], [0.5557799, 0.9757845103740692], [0.9067066, 0.9812439878781637], [1.5425162000000001, 0.9847525358200073], [2.7872168, 0.9868897696336111], [5.102946, 0.9881523748238882]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.1249405, 0.9462989072004954], [0.3534441, 0.9688753485679626], [0.5974257000000001, 0.9762154122193655], [1.0176408000000001, 0.9812127550443014], [2.8529355, 0.9860847890377045], [4.7861674, 0.9872300227483114], [8.3007349, 0.9880416293938955]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.11947870000000001, 0.9461955030759176], [0.31808179999999997, 0.9674104253451029], [0.5314871000000001, 0.9742998778820038], [0.893642, 0.9788944323857626], [1.8572966, 0.9819880127906799], [3.9125127, 0.9836609562238058], [6.7043932999999996, 0.9841112097104391]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.11947870000000001, 0.9422727823257446], [0.31808179999999997, 0.9620766242345175], [0.5314871000000001, 0.9686248699824015], [0.893642, 0.9730775753657023], [1.8572966, 0.9763005375862122], [3.9125127, 0.9783325095971426], [6.7043932999999996, 0.9790449440479279]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.11947870000000001, 0.945227324962616], [0.31808179999999997, 0.9668943385283152], [0.5314871000000001, 0.974314292271932], [0.893642, 0.9795951743920644], [1.8572966, 0.98362864057223], [3.9125127, 0.9863958756128947], [6.7043932999999996, 0.9874051610628763]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.11947870000000001, 0.9443856875101725], [0.31808179999999997, 0.9652483959992727], [0.5314871000000001, 0.9718027313550314], [0.893642, 0.9762105147043864], [1.8572966, 0.9797171850999197], [3.9125127, 0.9823172986507416], [6.7043932999999996, 0.9832697113355001]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.11947870000000001, 0.9455477297306061], [0.31808179999999997, 0.9653638104597727], [0.5314871000000001, 0.9719391365845998], [0.893642, 0.9767440358797709], [1.8572966, 0.9805931051572164], [3.9125127, 0.9832503100236257], [6.7043932999999996, 0.9842131634553274]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.11947870000000001, 0.9457206825415293], [0.31808179999999997, 0.966283529996872], [0.5314871000000001, 0.9731030563513438], [0.893642, 0.977980395158132], [1.8572966, 0.9818055729071299], [3.9125127, 0.9844469626744589], [6.7043932999999996, 0.9853768050670624]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.11947870000000001, 0.9460616310437521], [0.31808179999999997, 0.9678479035695394], [0.5314871000000001, 0.9752675592899323], [0.893642, 0.9805062313874563], [1.8572966, 0.9844429393609365], [3.9125127, 0.9870574871699015], [6.7043932999999996, 0.9879524310429891]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.11947870000000001, 0.9458849231402079], [0.31808179999999997, 0.9676793018976847], [0.5314871000000001, 0.9751413563887278], [0.893642, 0.9804314076900482], [1.8572966, 0.984436959028244], [3.9125127, 0.9871301452318827], [6.7043932999999996, 0.9880717198053995]]});
                        
                        plot_options.title.text = 'YUV-MS-SSIM';
                        plot_options.subtitle.text = 'uavs3e + skiing';
                        plot_options.yAxis.title.text = 'YUV-MS-SSIM';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('MSSSIM-AVS3-skiing-graph', plot_options);

                    });
                });

            
            
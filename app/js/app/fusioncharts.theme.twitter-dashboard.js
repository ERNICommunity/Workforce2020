/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>
*/

/**
 * This file create a theme file for the dashboard. The cosmetics for the
 * different charts are defined here.
 *
 * More information on theming can be found at
 * http://docs.fusioncharts.com/tutorial-configuring-your-chart-theme-manager.html
 */
FusionCharts.register('theme', {
    name: 'twitter-dashboard',
    theme: {
        base: {
            chart: {
                paletteColors: '#56ABEE',
                baseFontColor: '#98A6AF',
                baseFont: 'Helvetica Neue,Arial',
                showBorder: '0',
                bgAlpha: '0',
                canvasBgColor: '#fbfafa',
                showShadow: '0',
                useplotgradientcolor: '0',
                useRoundEdges: '0',
                showPlotBorder: '0',
                showAlternateHGridColor: '0',
                showAlternateVGridColor: '0',
                divlineAlpha: '10',
                divlineColor: '#999999',
                divlineThickness: '1',
                showHoverEffect: '0',
                valueFontSize: '10',
                showXAxisLine: '1',
                xAxisLineThickness: '1',
                xAxisLineColor: '#999999',
                xAxisLineAlpha: '50',
                showValues: '0',
                labelDisplay: 'wrap',
                plotFillAlpha: '80',
                toolTipBgColor: '#000000',
                toolTipColor: '#4fa9ef',
                toolTipBorderRadius: "4",
                toolTipPadding: '10',
                toolTipFontSize: '14',
                anchorTrackingRadius: '15'
            }
        },

        doughnut2d: {
            chart: {
            	bgColor: "#DADADA",
                paletteColors: '#4fa9ef, #292f34, #667580',
                use3DLighting: '0',
                showLegend: '0',
                enableSmartLabels: '0',
                showlabels: '1',
                enableRotation: '0',
                enableSlicing: '0',
                useDataPlotColorForLabels: '1',
                showPercentInToolTip: '1',
                showPercentInLabels: '1',
                labelFontSize: '12',
                labelFontBold: '1',
                showValues: '1',
                showPercentValues: '1',
                labelSepChar: '\n',
                showZeroPies: '0',
                doughnutRadius: '70',
                showToolTip: '0'
            }
        },

        geo: {
            chart: {
                showshadow: '0',
                showlabels: '0',
                showmarkerlabels: '0',
                bordercolor: 'FFFFFF',
                basefont: 'Verdana',
                basefontsize: '10',
                canvasBorderAlpha: '0',
                showBorder: '1',
                baseFontColor: '#000000',
                fontBold: '1',
                baseFontSize: '30',
                useSNameInLabels: '0',
                fillColor: '#EBEBEB',
                showLegend: '0',
                legendShadow: '0',
                legendBorderThickness: '0',
                legendScaleLineThickness: '0',
                legendPointerBorderThickness: '0',
                legendPointerHeight: '0',
                legendPointerWidth: '0',
                legendBorderAlpha: '0',
                legendBgAlpha: '0',
                showToolTip: '1',
                numberSuffix: '%'
            }
        }
    }
});
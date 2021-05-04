import { TitleArea, OverviewArea, DoubleBox } from '../src/styles/style'
import Layout from '../src/components/layout'

import { Line, Pie } from 'react-chartjs-2';

const pedidosChart = {
    labels: ['01', '10', '20', '30'],
    datasets: [
      {
        label: 'Pedidos',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#086930',
        borderColor: '#2EC76E',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#6bfafa',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#03A346',
        pointHoverBorderColor: '#01C253',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81]
      }
    ]
};

const fonteChart = {
	labels: [
		'Google',
		'Facebook',
		'Direto'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#086930',
		'#03A346',
		'#2EC76E'
		],
		hoverBackgroundColor: [
		'#086930',
		'#03A346',
		'#2EC76E'
		]
	}]
};

function HomePage() {
    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="title"><h2>Olá, Paulo Lima</h2></div>
                    <div className="description"><span>Bem-vindo ao painel Canalfy</span></div>
                </TitleArea>

                <OverviewArea>
                    <div className="boxOne">
                        <span className="title">Total de Receitas</span>
                        <span className="value">R$ 3.560.000,00</span>
                    </div>
                    <div className="boxTwo">
                        <span className="title">Total de Comissões</span>
                        <span className="value">R$ 3.560,00</span>
                    </div>
                    <div className="boxThree">
                        <span className="title">Taxa de Conversão</span>
                        <span className="value">35%</span>
                    </div>
                    <div className="boxFour">
                        <span className="title">Total de Afiliados</span>
                        <span className="value">1.560</span>
                    </div>
                </OverviewArea>

                <DoubleBox>
                    <div className="boxOne">
                        <div className="titleBox">
                            <span className="title">Pedidos do mês</span>
                            <span className="description">Confira um gráfico com os pedidos do mês atual</span>
                        </div>

                        <div className="chartBox">
                            <Line
                                data={pedidosChart}
                                width={400}
                                height={200}
                            />
                        </div>
                    </div>

                    <div className="boxTwo">
                        <div className="titleBox">
                            <span className="title">Fonte do Pedido</span>
                            <span className="description">Confira um gráfico de onde vem os pedidos</span>
                        </div>

                        <div className="chartBox">
                            <Pie
                                data={fonteChart}
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                </DoubleBox>
            </Layout>
        </>
    )
}
  
export default HomePage
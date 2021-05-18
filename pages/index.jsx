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
        borderColor: '#086930',
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
      },
      {
        label: 'Receita',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#03A346',
        borderColor: '#03A346',
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
        data: [32, 120, 100, 85]
      },
      {
        label: 'Parceiros',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#2EC76E',
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
        data: [80, 72, 75, 78]
      }
    ]
};

const fonteChart = {
	labels: [
		'ID',
		'Cupom',
	],
	datasets: [{
		data: [300, 50],
		backgroundColor: [
		'#086930',
		'#03A346',
		],
		hoverBackgroundColor: [
		'#086930',
		'#03A346',
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
                        <span className="value">R$ 560.000,00</span>
                    </div>
                    <div className="boxTwo">
                        <span className="title">Total de Pedidos</span>
                        <span className="value">520</span>
                    </div>
                    <div className="boxThree">
                        <span className="title">Total de Parceiros</span>
                        <span className="value">32</span>
                    </div>
                    <div className="boxFour">
                        <span className="title">Parceiros com Pedidos</span>
                        <span className="value">30</span>
                    </div>
                    <div className="boxFive">
                        <span className="title">Ticket Médio</span>
                        <span className="value">R$ 320,00</span>
                    </div>
                    <div className="boxSix">
                        <span className="title">Taxa de Conversão</span>
                        <span className="value">5%</span>
                    </div>
                </OverviewArea>

                <DoubleBox>
                    <div className="boxOne">
                        <div className="titleBox">
                            <span className="title">Resultados do mês</span>
                            <span className="description">Confira um gráfico com os resultados do mês atual</span>
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
                            <span className="title">Origem dos Pedidos</span>
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
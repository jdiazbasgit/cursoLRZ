import { RingProgress as RingProgressAnt } from "@ant-design/plots"
import { Box, Image } from "@chakra-ui/react";

interface data {
  score: number,
}

export default function RingProgress({ score }: data) {
  const config = {
    height: 87.7,
    width: 90.4,
    autoFit: false,
    percent: (score * 10) / 1000,
    color: ['#F30005', '#1e1e1e'],
    innerRadius: 0.78,
    radius: .99,
    statistic: {
      content: {
        style: {
          color: '#F30005',
          fontSize: "20px",
          fontWeight: "bold"
        },
        formatter: () => score.toString()
      },
    },
  };

  return (
    <Box pos="relative">
      <Image src="/img/ringProgress1.png" alt="ringProgress1" pos="absolute" right={0} top={0} />
      <Image src="/img/ringProgress2.png" alt="ringProgress2" pos="absolute" right="-5px" bottom="-9px" />
      <RingProgressAnt style={{ marginTop: 0 }} {...config} progressStyle={{ r: 100 }} animation={false} />
    </Box>
  )
}
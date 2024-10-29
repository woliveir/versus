// https://codepen.io/ivanman/pen/rLjOGN
import { ContainerMain, ContainerItem, ContainerItemTitle, ContainerItemContent, ListItemE } from '@/components';
import WorkIcon from '@mui/icons-material/Work';

const Home = () => {

  return (
    <ContainerMain>
      {/* CIB */}
      <ContainerItem $title='::Corporate Invest Banking' $backgroundColor='#c9182c' $borderRadius='10px 0px 0px 10px'>
        <ContainerItemTitle $title='CIB' />
          <ContainerItemContent>
            <ListItemE 
              linkText='Wiliam'
              icon={<WorkIcon />}
            />
        </ContainerItemContent>
      </ContainerItem>

      {/* DICOR */}
      <ContainerItem $title='::Corporate Banking' $backgroundColor='#fd9800'>
        <ContainerItemTitle $title='DICOR'></ContainerItemTitle>
        <ContainerItemContent>
          <li>link1</li>
          <li>link2</li>
          <li>link3</li>
        </ContainerItemContent>
      </ContainerItem >

      {/* UPB */}
      <ContainerItem $title='::Private Banking' $backgroundColor='#733236'>
        <ContainerItemTitle $title='UPB'></ContainerItemTitle>
      </ContainerItem >

      {/* TESOURARIA */}
      <ContainerItem $title='::Tesouraria Global' $backgroundColor='#1b7b3d'>
        <ContainerItemTitle $title='TESOU'></ContainerItemTitle>
      </ContainerItem>

      {/* UCI */}
      <ContainerItem $title='::Canal do Investidor' $backgroundColor='#db1eac'>
        <ContainerItemTitle $title='UCI'></ContainerItemTitle>
      </ContainerItem>

      {/* UNI */}
      <ContainerItem $title='::Negócios Internacionais' $backgroundColor='#1961ae'>
        <ContainerItemTitle $title='UNI'></ContainerItemTitle>
      </ContainerItem>
      
      {/* GERAT */}
      <ContainerItem $title='::Rede Atacado' $backgroundColor='#61007d' $borderRadius='0px 10px 10px 0px'>
        <ContainerItemTitle $title='GERAT'></ContainerItemTitle>
      </ContainerItem>
  </ContainerMain>
  );
}

export default Home;
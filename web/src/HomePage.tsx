import {
  SIMULATION_CARD_BG,
  img1,
  img2,
  imgEllipse11,
  imgGroup1,
  imgGroup2,
  imgIconAlabugaColor,
  imgImg,
  imgLine7,
  imgLine8,
  imgLine9,
  imgLine11,
  imgLine12,
  imgLine13,
  imgPolygon1,
  imgPolygon2,
  imgPolygon4,
  imgUnion,
  imgUnion1,
  imgUnion2,
  imgUnion3,
  imgUnion4,
  imgUnion5,
  imgUnion6,
  imgUnion7,
  imgUnion8,
  imgUnion9,
  imgVector,
  imgVector1,
  imgVector2,
  imgVector3,
  imgVector8,
  imgVector9,
  imgVector10,
  imgVector11,
  imgVector12,
  imgVector15,
  imgVector16,
  imgVector17,
} from "./figma-assets";

type LogoMinProps = {
  className?: string;
};

function LogoMin({ className }: LogoMinProps) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="211:5057">
      <div className="-translate-y-1/2 absolute aspect-[32/30] left-0 right-0 top-1/2" data-node-id="211:5058" data-name="Icon-alabuga-color">
        <div className="absolute inset-[2.31%_0.25%_0.2%_0.25%]">
          <img alt="" className="block max-w-none size-full" src={imgIconAlabugaColor} />
        </div>
      </div>
    </div>
  );
}

type HomePageProps = {
  onGoToConcepts?: () => void;
  onGoToMission?: () => void;
  onGoToStrategy?: () => void;
  onGoToCompetencies?: () => void;
};

export function HomePage({
  onGoToConcepts,
  onGoToMission,
  onGoToStrategy,
  onGoToCompetencies,
}: HomePageProps = {}) {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="211:23284" data-name="Главная страница">
      <div className="bg-[var(--colors-surfaces-main-0,#0f1018)] content-stretch flex flex-[1_0_0] flex-col gap-[var(--body\/gap,8px)] isolate items-start min-h-px overflow-clip p-[var(--body\/padding,16px)] relative w-full" data-node-id="I211:23284;14745:5686" data-name="body">
        <div className="content-stretch flex items-start relative shrink-0 w-full z-[4]" data-node-id="I211:23284;14745:5687" data-name="Header">
          <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-node-id="I211:23284;14745:5687;7004:7178" data-name="APP / HEADER / [Platform]">
            <div className="content-stretch flex flex-[1_0_0] gap-[var(--gap\/xs\/10,8px)] items-center min-w-px p-[var(--spaces\/xs\/0,0px)] relative rounded-[var(--br\/sm\/30,16px)]" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794" data-name="HEADER / BASE">
              <div className="bg-[var(--colors-surfaces-main-10,#181a26)] border border-[var(--colors\/border\/main\/100,rgba(90,93,117,0))] border-solid content-stretch flex gap-[var(--gap\/xs\/0,0px)] items-center justify-center p-[var(--spaces\/md\/20,12px)] relative rounded-[var(--br\/sm\/30,16px)] shrink-0" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;11755:6770" data-name="Nav menu">
                <div className="bg-[var(--colors\/button\/ghost\/primary\/bg\/default,rgba(63,81,181,0))] border border-[var(--colors\/button\/ghost\/primary\/border\/default,rgba(63,81,181,0))] border-solid content-stretch flex gap-[var(--button\/gap\/main,6px)] items-center justify-center px-[var(--button\/padding\/x,14px)] py-[var(--button\/padding\/y,8px)] relative rounded-[var(--button\/br\/basic,10px)] shrink-0" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;12202:18345" data-name="Button">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-[6px]" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;12202:18345;11750:2163" data-name="iconOnly">
                    <div className="ui-icon-slot overflow-visible relative shrink-0 size-[18px]" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;12202:18345;11750:2164" data-name="Lucid/layout-grid">
                      <div className="absolute inset-[8.75%]" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;12202:18345;11750:2164;3659:1451" data-name="Union">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <div className="bg-[var(--colors-surfaces-main-10,#181a26)] border border-[var(--colors\/border\/main\/100,rgba(90,93,117,0))] border-solid content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center justify-center min-w-px p-[var(--spaces\/md\/20,12px)] relative rounded-[var(--br\/sm\/30,16px)]" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;11755:6773" data-name="Сontent slot">
                  <div className="content-stretch flex flex-[1_0_0] gap-[var(--gap\/sm\/30,16px)] items-center min-w-px relative" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;11755:6774" data-name="Сontent">
                    <div className="content-stretch flex gap-[var(--gap\/xs\/10,8px)] items-center relative shrink-0" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;11755:6775" data-name="APP / logo">
                      <LogoMin className="relative shrink-0 size-[24px]" />
                      <p className="font-['Mulish',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[16px] text-[color:var(--colors-typo-main-0,#ffffff)] tracking-[-0.16px] whitespace-nowrap" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;11755:6775;11755:6785">
                        Корпоративная культура
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--colors-surfaces-main-10,#181a26)] border border-[var(--colors\/border\/main\/100,rgba(90,93,117,0))] border-solid content-stretch flex gap-[var(--gap\/xs\/10,8px)] items-center justify-center p-[var(--spaces\/md\/20,12px)] relative rounded-[var(--br\/sm\/30,16px)] shrink-0" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;11755:6778" data-name="Info slot">
                <div className="bg-[var(--colors-button-lim-primary-bg-default,rgba(63,81,181,0.15))] content-stretch flex items-center p-[3px] relative rounded-[var(--main\/br-xs,360px)] shrink-0 w-[50px]" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;12458:6947" data-name="LanguageDrop">
                  <div className="bg-[var(--colors\/tab\/fill\/bg\/selected,#3949ab)] content-stretch flex gap-[var(--tab\/gap\/main,4px)] items-center justify-center px-[var(--tab\/padding\/x,10px)] py-[var(--tab\/padding\/y,6px)] relative rounded-[var(--tab\/br\/basic,360px)] shrink-0" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;12458:6947;12200:15175" data-name="Tab">
                    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;12458:6947;12200:15175;12177:2012" data-name="icon container">
                      <div className="relative shrink-0 size-[16px]" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;12458:6947;12200:15175;12177:2013" data-name="Language/RU">
                        <div className="-translate-x-1/2 absolute aspect-[16.030210494995117/10] bottom-[25.12%] left-[calc(50%+0.4px)] top-1/4" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;12458:6947;12200:15175;12177:2013;3659:5725" data-name="Union">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion1} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[16px]" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;12458:6947;12200:16762" data-name="Feather/chevron-down">
                    <div className="absolute inset-[33.75%_21.25%]" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;12458:6947;12200:16762;3659:5578" data-name="Union">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion2} />
                    </div>
                  </div>
                </div>
                <div className="backdrop-blur-[10px] bg-[var(--colors-button-lim-primary-bg-default,rgba(63,81,181,0.15))] border border-[var(--colors\/button\/lim\/primary\/border\/default,rgba(63,81,181,0))] border-solid content-stretch flex gap-[var(--button\/gap\/main,6px)] items-center justify-center px-[var(--button\/padding\/x,14px)] py-[var(--button\/padding\/y,8px)] relative rounded-[var(--button\/br\/basic,360px)] shrink-0" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;12202:17890" data-name="Button">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-[6px]" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;12202:17890;11750:2494" data-name="iconOnly">
                    <div className="ui-icon-slot overflow-visible relative shrink-0 size-[18px]" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;12202:17890;11750:2495" data-name="Lucid/bell">
                      <div className="absolute inset-[4.59%_8.75%_4.56%_8.75%]" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;12202:17890;11750:2495;3659:2727" data-name="Union">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion3} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-[var(--colors\/counter\/аccent\/bg,#ff5722)] content-stretch drop-shadow-[0px_1px_1.9px_rgba(255,87,34,0.48)] flex flex-col items-center justify-center px-[var(--counter\/padding\/x,4px)] py-[var(--counter\/padding\/y,3px)] right-[-4px] rounded-[var(--counter\/br\/basic,360px)] top-[-5px]" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;12202:17890;11750:2496" data-name="Counter">
                    <div className="flex flex-col font-['Roboto_Flex:Medium',sans-serif] font-[var(--typo-component\/fontweight\/medium,500)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--colors\/counter\/аccent\/text,white)] text-[length:var(--counter\/typo\/fontsize,9px)] text-center tracking-[0.09px] whitespace-nowrap" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;12202:17890;11750:2496;11755:22129" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                      <p className="leading-[var(--counter\/typo\/lineheight,8px)]">1</p>
                    </div>
                  </div>
                </div>
                <div className="border border-[#3f51b5] border-solid content-stretch flex items-center justify-center p-[2px] relative rounded-[var(--br\/lg\/full,1000px)] shrink-0 size-[34px]" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;12202:18017" data-name="Profile pictur">
                  <div className="flex-[1_0_0] h-full min-w-px relative rounded-[var(--br\/lg\/full,1000px)]" data-node-id="I211:23284;14745:5687;7004:7178;11755:6794;12202:18017;12345:24328" data-name="img">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--br\/lg\/full,1000px)] size-full" src={imgImg} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] gap-[var(--body\/gap,0px)] items-start justify-center min-h-px relative w-full z-[3]" data-node-id="I211:23284;14745:5688" data-name="main">
          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center min-w-px relative" data-node-id="I211:23284;14745:5689" data-name="layout">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--body\/gap,0px)] items-center max-w-[1320px] min-h-px relative w-full" data-node-id="I211:23284;14745:5690" data-name="container">
              <div className="content-stretch flex flex-col gap-[var(--gap\/xs\/10,8px)] items-start relative shrink-0 w-full" data-node-id="I211:23284;14745:5691" data-name="list">
                <div className="bg-[var(--colors-surfaces-main-20,#5a5d7517)] border border-[var(--colors-border-main-surfase,rgba(255,255,255,0.04))] border-solid content-stretch flex flex-col gap-[var(--gap\/lg\/85,48px)] items-start justify-end overflow-clip p-[var(--cards\/space\/10,16px)] relative rounded-[var(--cards\/br\/main,24px)] shrink-0 w-full" data-node-id="I211:23284;14745:7069" data-name="Card">
                  <div className="absolute bottom-[calc(19.76%-0.6px)] right-[-1px] top-[calc(-11.29%-1.23px)] w-[345px]" data-node-id="I211:23284;14745:7069;15027:5438">
                    <div className="absolute inset-[25.97%_-106.99%_-33.65%_-102.61%]" data-node-id="I211:23284;14745:7069;15027:5440">
                      <div className="absolute inset-[-127.62%_-30.75%_-102.62%_-30.75%]">
                        <img alt="" className="block max-w-none size-full" src={imgPolygon1} />
                      </div>
                    </div>
                    <div className="absolute inset-[-33.92%_-50.52%_-33.65%_-46.13%]" data-node-id="I211:23284;14745:7069;15027:5441">
                      <div className="absolute inset-[-61.51%_-37.52%_-36.51%_-37.52%]">
                        <img alt="" className="block max-w-none size-full" src={imgPolygon2} />
                      </div>
                    </div>
                    <div className="-translate-x-1/2 absolute aspect-[372/342] bottom-[15.74%] left-[calc(50%-4.5px)] top-[21.11%]" data-node-id="I211:23284;14745:7069;15027:5442" data-name="Vector">
                      <div className="absolute inset-[-54.4%_-50.02%]">
                        <img alt="" className="block max-w-none size-full" src={imgVector} />
                      </div>
                    </div>
                    <div className="-translate-x-1/2 absolute aspect-[219.22036743164062/201.38772583007812] bottom-[32.36%] left-[calc(50%+275.5px)] top-[57.12%]" data-node-id="I211:23284;14745:7069;15027:5443" data-name="Vector">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                    </div>
                    <div className="-translate-x-1/2 absolute aspect-[219.22036743164062/201.38772583007812] bottom-[32.36%] left-[calc(50%-275.5px)] top-[57.12%]" data-node-id="I211:23284;14745:7069;15027:5444" data-name="Vector">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                    </div>
                    <div className="-translate-x-1/2 absolute aspect-[219.22036743164062/201.38772583007812] bottom-[55.44%] left-[calc(50%-317.5px)] top-[40.87%]" data-node-id="I211:23284;14745:7069;15027:5445" data-name="Vector">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                    </div>
                    <div className="-translate-x-1/2 absolute aspect-[219.22036743164062/201.38772583007812] bottom-[65.59%] left-[calc(50%-224px)] top-[28.5%]" data-node-id="I211:23284;14745:7069;15027:5446" data-name="Vector">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
                    </div>
                    <div className="-translate-x-1/2 absolute aspect-[219.22036743164062/201.38772583007812] bottom-[26.08%] left-[calc(50%-165px)] top-[68.01%]" data-node-id="I211:23284;14745:7069;15027:5447" data-name="Vector">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
                    </div>
                    <div className="-translate-x-1/2 absolute aspect-[219.22036743164062/201.38772583007812] bottom-[26.08%] left-[calc(50%+149px)] top-[68.01%]" data-node-id="I211:23284;14745:7069;15027:5448" data-name="Vector">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
                    </div>
                    <div className="-translate-x-1/2 absolute aspect-[219.22036743164062/201.38772583007812] bottom-[55.44%] left-[calc(50%+326.5px)] top-[40.87%]" data-node-id="I211:23284;14745:7069;15027:5449" data-name="Vector">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                    </div>
                    <div className="-translate-x-1/2 absolute aspect-[219.22036743164062/201.38772583007812] bottom-[65.59%] left-[calc(50%+196px)] top-[28.5%]" data-node-id="I211:23284;14745:7069;15027:5450" data-name="Vector">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[var(--cards\/gap\/30,8px)] items-start relative shrink-0 w-full" data-node-id="I211:23284;14745:7069;14745:7357" data-name="Heading">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center justify-center leading-[0] min-w-px not-italic relative" data-node-id="I211:23284;14745:7069;14745:7358">
                      <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto_Flex:Regular',sans-serif)] font-[var(--font\/body\/b2\/fontweight\/regular,400)] justify-center relative shrink-0 text-[color:var(--colors-typo-main-10,#d2d4df)] text-[length:var(--font\/body\/b2\/fontsize,16px)] tracking-[var(--font\/body\/b2\/letterspacing,0.1px)] w-full" data-node-id="I211:23284;14745:7069;14745:7359" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                        <p className="leading-[var(--font\/body\/b2\/lineheight,20px)]">Теория</p>
                      </div>
                      <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto_Flex:Bold',sans-serif)] font-[var(--font\/display\/d2\/fontweight\/bold,700)] justify-center relative shrink-0 text-[color:var(--colors-typo-main-0,#ffffff)] text-[length:var(--font\/display\/d2\/fontsize,44px)] tracking-[var(--font\/display\/d2\/letterspacing,0.1px)] w-full" data-node-id="I211:23284;14745:7069;14745:7360" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                        <p className="leading-[var(--font\/display\/d2\/lineheight,48px)] whitespace-pre-wrap">
                          {`КОРПОРАТИВНАЯ КУЛЬТУРА `}
                          <br aria-hidden="true" />
                          КОМПАНИИ
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[var(--gap\/lg\/85,48px)] items-end relative shrink-0 w-full" data-node-id="I211:23284;14745:7069;14745:7375">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I211:23284;14745:7069;14745:6834">
                      <a
                        className="bg-[var(--colors-button-fill-surfaces-bg-default,#181a26)] border border-[var(--colors-button-fill-surfaces-border-default,rgba(255,255,255,0.04))] border-solid content-stretch cursor-pointer flex gap-[var(--button-gap-main,6px)] items-center justify-center px-[var(--button-padding-x,14px)] py-[var(--button-padding-y,8px)] relative rounded-[var(--button-br-basic,10px)] shrink-0"
                        data-node-id="I211:23284;14745:7069;14745:6784"
                        data-name="Button"
                        href="#/osnovnye-ponyatiya"
                        onClick={(e) => {
                          if (onGoToConcepts) {
                            e.preventDefault();
                            onGoToConcepts();
                          }
                        }}
                      >
                        <div className="flex flex-col font-['Roboto_Flex:Medium',sans-serif] font-[var(--typo-component\/fontweight\/medium,500)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--colors-button-fill-surfaces-text-default,#ffffff)] text-[length:var(--button-typo-fontsize,16px)] text-center tracking-[var(--typo-component\/letterspacing\/main,0.2px)] whitespace-nowrap" data-node-id="I211:23284;14745:7069;14745:6784;11750:1412" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                          <p className="leading-[var(--button-typo-lineheight,22px)]">Перейти</p>
                        </div>
                        <div className="content-stretch flex items-center justify-center relative shrink-0 w-[22px]" data-node-id="I211:23284;14745:7069;14745:6784;11750:1413" data-name="icon-right">
                          <div className="ui-icon-slot overflow-visible relative shrink-0 size-[22px]" data-node-id="I211:23284;14745:7069;14745:6784;11750:1414" data-name="Lucid/arrow-right">
                            <div className="absolute inset-[17.09%_17.08%_17.08%_17.09%]" data-node-id="I211:23284;14745:7069;14745:6784;11750:1414;3659:2865" data-name="Union">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion4} />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="I211:23284;14745:7069;14745:6829">
                      <a className="backdrop-blur-[20px] bg-gradient-to-b content-stretch cursor-pointer flex flex-[1_0_0] flex-col from-[var(--colors\/surfaces\/main\/lim\/10,rgba(255,255,255,0.2))] gap-[var(--spaces\/md\/30,16px)] items-start min-w-[var(--topic-card-min-width,189px)] p-[var(--spaces\/md\/30,16px)] relative rounded-[var(--br\/sm\/40,24px)] shrink-0 to-[rgba(99,166,255,0.1)]" data-node-id="I211:23284;14745:7069;14745:6995" data-name="card">
                        <div className="ui-icon-slot overflow-visible relative shrink-0 size-[24px]" data-node-id="I211:23284;14745:7069;14745:6995;14745:7336" data-name="Lucid/lightbulb">
                          <div className="absolute inset-[4.59%_21.25%_4.58%_21.25%]" data-node-id="I211:23284;14745:7069;14745:6995;14745:7336;3659:1421" data-name="Union">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion5} />
                          </div>
                        </div>
                        <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto_Flex:Bold',sans-serif)] [word-break:break-word] font-[var(--font\/heading\/h5\/fontweight\/bold,700)] h-[40px] justify-end leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[color:var(--colors\/typo\/main\/10,#d2d4df)] text-[length:var(--font\/heading\/h5\/fontsize,20px)] text-left tracking-[var(--font\/heading\/h5\/letterspacing,0.2px)] w-full" data-node-id="I211:23284;14745:7069;14745:6995;14745:6985" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                          <p className="leading-[var(--font\/heading\/h5\/lineheight,24px)]">Основные понятия</p>
                        </div>
                      </a>
                      <a
                        className="backdrop-blur-[20px] bg-gradient-to-b content-stretch cursor-pointer flex flex-[1_0_0] flex-col from-[var(--colors\/surfaces\/main\/lim\/10,rgba(255,255,255,0.2))] gap-[var(--spaces\/md\/30,16px)] items-start min-w-[var(--topic-card-min-width,189px)] p-[var(--spaces\/md\/30,16px)] relative rounded-[var(--br\/sm\/40,24px)] shrink-0 to-[rgba(99,166,255,0.1)]"
                        data-node-id="I211:23284;14745:7069;14745:7003"
                        data-name="card"
                        href="#/missiya-i-tsennosti"
                        onClick={(e) => {
                          if (onGoToMission) {
                            e.preventDefault();
                            onGoToMission();
                          }
                        }}
                      >
                        <div className="ui-icon-slot overflow-visible relative shrink-0 size-[24px]" data-node-id="I211:23284;14745:7069;14745:7003;14745:7336" data-name="Lucid/rocket">
                          <div className="absolute inset-[4.58%_4.59%_6.67%_6.67%]" data-node-id="I211:23284;14745:7069;14745:7003;14745:7336;3659:785" data-name="Union">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion6} />
                          </div>
                        </div>
                        <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto_Flex:Bold',sans-serif)] [word-break:break-word] font-[var(--font\/heading\/h5\/fontweight\/bold,700)] h-[40px] justify-end leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[color:var(--colors\/typo\/main\/10,#d2d4df)] text-[length:var(--font\/heading\/h5\/fontsize,20px)] text-left tracking-[var(--font\/heading\/h5\/letterspacing,0.2px)] w-full" data-node-id="I211:23284;14745:7069;14745:7003;14745:6985" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                          <p className="leading-[var(--font\/heading\/h5\/lineheight,24px)]">Миссия и ценности</p>
                        </div>
                      </a>
                      <a
                        className="backdrop-blur-[20px] bg-gradient-to-b content-stretch cursor-pointer flex flex-[1_0_0] flex-col from-[var(--colors\/surfaces\/main\/lim\/10,rgba(255,255,255,0.2))] gap-[var(--spaces\/md\/30,16px)] items-start min-w-[var(--topic-card-min-width,189px)] p-[var(--spaces\/md\/30,16px)] relative rounded-[var(--br\/sm\/40,24px)] shrink-0 to-[rgba(99,166,255,0.1)]"
                        data-node-id="I211:23284;14745:7069;14745:7011"
                        data-name="card"
                        href="#/strategiya-razvitiya"
                        onClick={(e) => {
                          if (onGoToStrategy) {
                            e.preventDefault();
                            onGoToStrategy();
                          }
                        }}
                      >
                        <div className="ui-icon-slot overflow-visible relative shrink-0 size-[24px]" data-node-id="I211:23284;14745:7069;14745:7011;14745:7336" data-name="Lucid/route">
                          <div className="absolute inset-[4.59%_8.75%_4.58%_8.75%]" data-node-id="I211:23284;14745:7069;14745:7011;14745:7336;3659:763" data-name="Union">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion7} />
                          </div>
                        </div>
                        <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto_Flex:Bold',sans-serif)] [word-break:break-word] font-[var(--font\/heading\/h5\/fontweight\/bold,700)] h-[40px] justify-end leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[color:var(--colors\/typo\/main\/10,#d2d4df)] text-[length:var(--font\/heading\/h5\/fontsize,20px)] text-left tracking-[var(--font\/heading\/h5\/letterspacing,0.2px)] w-full" data-node-id="I211:23284;14745:7069;14745:7011;14745:6985" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                          <p className="leading-[var(--font\/heading\/h5\/lineheight,24px)]">Стратегии развития</p>
                        </div>
                      </a>
                      <a
                        className="backdrop-blur-[20px] bg-gradient-to-b content-stretch cursor-pointer flex flex-[1_0_0] flex-col from-[var(--colors\/surfaces\/main\/lim\/10,rgba(255,255,255,0.2))] gap-[var(--spaces\/md\/30,16px)] items-start min-w-[var(--topic-card-min-width,189px)] p-[var(--spaces\/md\/30,16px)] relative rounded-[var(--br\/sm\/40,24px)] shrink-0 to-[rgba(99,166,255,0.1)]"
                        data-node-id="I211:23284;14745:7069;14746:8567"
                        data-name="card"
                        href="#/korporativnye-kompetencii"
                        onClick={(e) => {
                          if (onGoToCompetencies) {
                            e.preventDefault();
                            onGoToCompetencies();
                          }
                        }}
                      >
                        <div className="ui-icon-slot overflow-visible relative shrink-0 size-[24px]" data-node-id="I211:23284;14745:7069;14746:8567;14745:7336" data-name="Lucid/user-cog">
                          <div className="absolute inset-[8.75%_5.83%_8.75%_4.59%]" data-node-id="I211:23284;14745:7069;14746:8567;14745:7336;3659:150" data-name="Union">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion8} />
                          </div>
                        </div>
                        <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto_Flex:Bold',sans-serif)] [word-break:break-word] font-[var(--font\/heading\/h5\/fontweight\/bold,700)] h-[40px] justify-end leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[color:var(--colors\/typo\/main\/10,#d2d4df)] text-[length:var(--font\/heading\/h5\/fontsize,20px)] tracking-[var(--font\/heading\/h5\/letterspacing,0.2px)] w-full" data-node-id="I211:23284;14745:7069;14746:8567;14745:6985" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                          <p className="leading-[var(--font\/heading\/h5\/lineheight,24px)]">Корпоративные компетенции</p>
                        </div>
                      </a>
                      <div className="flex flex-row items-center self-stretch">
                        <div className="backdrop-blur-[20px] bg-gradient-to-b content-stretch flex from-[var(--colors-surfaces-main-lim-10,rgba(255,255,255,0.2))] h-full items-center justify-center py-[10px] relative rounded-[var(--br\/lg\/50,28px)] shrink-0 to-[rgba(99,166,255,0.1)] w-[34px]" data-node-id="I211:23284;14745:7069;15027:5969">
                          <div className="bg-[var(--colors\/icon-button\/ghost\/surface\/bg\/default,rgba(15,16,24,0))] content-stretch flex items-center justify-center p-[var(--icon-button\/padding\/main,4px)] relative rounded-[var(--icon-button\/br\/basic,8px)] shrink-0" data-node-id="I211:23284;14745:7069;15027:5970" data-name="Icon-button">
                            <div className="relative shrink-0 size-[18px]" data-node-id="I211:23284;14745:7069;15027:5970;11754:2330" data-name="Lucid/chevron-right">
                              <div className="absolute inset-[21.25%_33.75%]" data-node-id="I211:23284;14745:7069;15027:5970;11754:2330;3659:2427" data-name="Union">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion9} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[var(--gap\/lg\/75,0px)] items-center py-[var(--spaces\/md\/30,16px)] relative shrink-0 w-full" data-node-id="I211:23284;14746:8864">
                  <div className="content-stretch flex gap-[var(--gap\/lg\/85,48px)] items-end relative shrink-0 w-full" data-node-id="I211:23284;14746:8450" data-name="Block">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--gap\/lg\/50,28px)] items-start min-w-px relative" data-node-id="I211:23284;14746:8450;14753:15633">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[374.147px] items-center justify-center left-[calc(50%+525.78px)] top-[calc(50%+331.07px)] w-[338.553px]">
                        <div className="flex-none rotate-[-120.55deg]">
                          <div className="h-[209.785px] relative w-[310.637px]" data-node-id="I211:23284;14746:8450;15069:32661">
                            <div className="absolute inset-[-95.34%_-57.69%_-70.34%_-57.69%]">
                              <img alt="" className="block max-w-none size-full" src={imgPolygon4} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-start px-[var(--spaces\/md\/30,16px)] relative shrink-0 w-full" data-node-id="I211:23284;14746:8450;14753:16038">
                        <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto_Flex:Medium',sans-serif)] font-[var(--font\/heading\/h2\/fontweight\/medium,500)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--colors-typo-main-0,#ffffff)] text-[length:var(--font\/heading\/h2\/fontsize,28px)] tracking-[var(--font\/heading\/h2\/letterspacing,0.2px)] w-[560px]" data-node-id="I211:23284;14746:8450;14753:16035" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                          <p className="leading-[var(--font\/heading\/h2\/lineheight,32px)]">Тренируйте компетенции корпоративной культуры в наших симуляциях!</p>
                        </div>
                      </div>
                      <div className="sim-cards-grid items-start relative shrink-0 w-full" data-node-id="I211:23284;14746:8450;14748:7545">
                        <div className="content-stretch flex items-start min-w-[var(--sim-card-min-width,248px)] relative rounded-[var(--br\/lg\/50,28px)] w-full" data-node-id="I211:23284;14746:8450;14748:7546" data-name="T-card / L1-Main">
                          <div className="border border-[var(--colors-border-main-surfase,rgba(255,255,255,0.04))] border-solid content-stretch flex flex-col gap-[var(--cards\/gap\/10,0px)] h-full items-end overflow-clip p-[var(--cards\/space\/10,16px)] relative rounded-[var(--br\/lg\/50,28px)] w-full" data-node-id="I211:23284;14746:8450;14748:7546;14746:7209" style={{ backgroundImage: SIMULATION_CARD_BG, backgroundColor: '#181a26' }} data-name="Card">
                            <div className="content-stretch flex gap-[var(--cards\/gap\/30,0px)] h-[224px] items-end relative shrink-0 w-full" data-node-id="I211:23284;14746:8450;14748:7546;14746:7210" data-name="Heading">
                              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-between min-w-px relative" data-node-id="I211:23284;14746:8450;14748:7546;14746:7211" data-name="Row">
                                <div className="content-stretch flex flex-col gap-[var(--gap\/xs\/6,6px)] items-start leading-[0] not-italic relative shrink-0 w-full" data-node-id="I211:23284;14746:8450;14748:7546;14763:7783">
                                  <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto_Flex:Regular',sans-serif)] font-[var(--font\/body\/b2\/fontweight\/regular,400)] justify-center relative shrink-0 text-[color:var(--colors-typo-main-20,#6d728d)] text-[length:var(--font\/body\/b2\/fontsize,16px)] tracking-[var(--font\/body\/b2\/letterspacing,0.1px)] whitespace-nowrap" data-node-id="I211:23284;14746:8450;14748:7546;14763:7757" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                                    <p className="leading-[var(--font\/body\/b2\/lineheight,20px)]">Симуляция</p>
                                  </div>
                                  <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto_Flex:Bold',sans-serif)] font-[var(--font\/heading\/h5\/fontweight\/bold,700)] [word-break:break-word] justify-center min-h-[48px] min-w-full overflow-hidden relative shrink-0 text-[color:var(--colors-typo-main-10,#d2d4df)] text-[length:var(--font\/heading\/h5\/fontsize,20px)] tracking-[var(--font\/heading\/h5\/letterspacing,0.2px)] w-full" data-node-id="I211:23284;14746:8450;14748:7546;14746:7233" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                                    <p className="leading-[var(--font\/heading\/h5\/lineheight,24px)]">Выход из зоны комфорта по аналитике</p>
                                  </div>
                                </div>
                                <div className="backdrop-blur-[10px] bg-[var(--colors-button-lim-primary-bg-default,rgba(63,81,181,0.15))] border border-[var(--colors\/button\/lim\/primary\/border\/default,rgba(63,81,181,0))] border-solid content-stretch flex gap-[var(--button\/gap\/main,10px)] items-center justify-center px-[var(--button\/padding\/x,18px)] py-[var(--button\/padding\/y,10px)] relative rounded-[var(--button\/br\/basic,14px)] shrink-0" data-node-id="I211:23284;14746:8450;14748:7546;14763:7621" data-name="Button">
                                  <div className="flex flex-col font-['Roboto_Flex:Medium',sans-serif] font-[var(--typo-component\/fontweight\/medium,500)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--colors-button-lim-primary-text-default,#7986cb)] text-[length:var(--button\/typo\/fontsize,12px)] text-center tracking-[var(--typo-component\/letterspacing\/main,0.2px)] whitespace-nowrap" data-node-id="I211:23284;14746:8450;14748:7546;14763:7621;11750:2485" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                                    <p className="leading-[var(--button\/typo\/lineheight,16px)]">Начать</p>
                                  </div>
                                </div>
                                <div className="absolute left-[-52px] size-[179px] top-[119px]" data-node-id="I211:23284;14746:8450;14748:7546;15084:32898">
                                  <div className="absolute bottom-0 flex items-center justify-center left-1/2 right-1/2 top-0 [container-type:size]">
                                    <div className="flex-none h-[22877300cqw] rotate-90 w-[100cqh]">
                                      <div className="relative size-full" data-node-id="I211:23284;14746:8450;14748:7546;15084:32898;15084:32890">
                                        <div className="absolute inset-[-3px_0_0_0]">
                                          <img alt="" className="block max-w-none size-full" src={imgLine7} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute flex inset-[7.7%_23%_5.7%_27%] items-center justify-center [container-type:size]">
                                    <div className="-rotate-120 flex-none h-[hypot(1.73205cqw,-0.57735cqh)] w-[hypot(-100cqw,-100cqh)]">
                                      <div className="relative size-full" data-node-id="I211:23284;14746:8450;14748:7546;15084:32898;15084:32894">
                                        <div className="absolute inset-[-3px_0_0_0]">
                                          <img alt="" className="block max-w-none size-full" src={imgLine11} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute bottom-1/4 flex items-center justify-center left-[6.7%] right-[6.7%] top-1/4 [container-type:size]">
                                    <div className="flex-none h-[hypot(-0.57735cqw,1.73205cqh)] rotate-30 w-[hypot(100cqw,100cqh)]">
                                      <div className="relative size-full" data-node-id="I211:23284;14746:8450;14748:7546;15084:32898;15084:32895">
                                        <div className="absolute inset-[-3px_0_0_0]">
                                          <img alt="" className="block max-w-none size-full" src={imgLine12} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute bottom-1/2 left-0 right-0 top-1/2" data-node-id="I211:23284;14746:8450;14748:7546;15084:32898;15084:32891">
                                    <div className="absolute inset-[-3px_0_0_0]">
                                      <img alt="" className="block max-w-none size-full" src={imgLine8} />
                                    </div>
                                  </div>
                                  <div className="absolute bottom-1/4 flex items-center justify-center left-[7%] right-[6.4%] top-1/4 [container-type:size]">
                                    <div className="-rotate-30 flex-none h-[hypot(0.57735cqw,1.73205cqh)] w-[hypot(100cqw,-100cqh)]">
                                      <div className="relative size-full" data-node-id="I211:23284;14746:8450;14748:7546;15084:32898;15084:32892">
                                        <div className="absolute inset-[-3px_0_0_0]">
                                          <img alt="" className="block max-w-none size-full" src={imgLine9} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute flex inset-[7.08%_24.06%_7.08%_24.65%] items-center justify-center [container-type:size]">
                                    <div className="flex-none h-[hypot(1.67371cqw,0.597477cqh)] rotate-[-59.14deg] w-[hypot(100cqw,-100cqh)]">
                                      <div className="relative size-full" data-node-id="I211:23284;14746:8450;14748:7546;15084:32898;15089:33226">
                                        <div className="absolute inset-[-3px_0_0_0]">
                                          <img alt="" className="block max-w-none size-full" src={imgLine13} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start min-w-[var(--sim-card-min-width,248px)] relative rounded-[var(--br\/lg\/50,28px)] w-full self-stretch" data-node-id="I211:23284;14746:8450;14753:15215" data-name="T-card / L1-Main">
                          <div className="border border-[var(--colors-border-main-surfase,rgba(255,255,255,0.04))] border-solid content-stretch flex flex-col gap-[var(--cards\/gap\/10,0px)] h-full items-end overflow-clip p-[var(--cards\/space\/10,16px)] relative rounded-[var(--br\/lg\/50,28px)] w-full" data-node-id="I211:23284;14746:8450;14753:15215;14746:7209" style={{ backgroundImage: SIMULATION_CARD_BG, backgroundColor: '#181a26' }} data-name="Card">
                            <div className="content-stretch flex flex-[1_0_0] gap-[var(--cards\/gap\/30,0px)] items-end min-h-px relative w-full" data-node-id="I211:23284;14746:8450;14753:15215;14746:7210" data-name="Heading">
                              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-between min-w-px relative" data-node-id="I211:23284;14746:8450;14753:15215;14746:7211" data-name="Row">
                                <div className="content-stretch flex flex-col gap-[var(--gap\/xs\/6,6px)] items-start leading-[0] not-italic relative shrink-0 w-full" data-node-id="I211:23284;14746:8450;14753:15215;14763:7783">
                                  <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto_Flex:Regular',sans-serif)] font-[var(--font\/body\/b2\/fontweight\/regular,400)] justify-center relative shrink-0 text-[color:var(--colors-typo-main-20,#6d728d)] text-[length:var(--font\/body\/b2\/fontsize,16px)] tracking-[var(--font\/body\/b2\/letterspacing,0.1px)] whitespace-nowrap" data-node-id="I211:23284;14746:8450;14753:15215;14763:7757" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                                    <p className="leading-[var(--font\/body\/b2\/lineheight,20px)]">Симуляция</p>
                                  </div>
                                  <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto_Flex:Bold',sans-serif)] font-[var(--font\/heading\/h5\/fontweight\/bold,700)] [word-break:break-word] justify-center min-h-[48px] min-w-full overflow-hidden relative shrink-0 text-[color:var(--colors-typo-main-10,#d2d4df)] text-[length:var(--font\/heading\/h5\/fontsize,20px)] tracking-[var(--font\/heading\/h5\/letterspacing,0.2px)] w-full" data-node-id="I211:23284;14746:8450;14753:15215;14746:7233" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                                    <p className="leading-[var(--font\/heading\/h5\/lineheight,24px)]">Выход из зоны комфорта по общению</p>
                                  </div>
                                </div>
                                <div className="backdrop-blur-[10px] bg-[var(--colors-button-lim-primary-bg-default,rgba(63,81,181,0.15))] border border-[var(--colors\/button\/lim\/primary\/border\/default,rgba(63,81,181,0))] border-solid content-stretch flex gap-[var(--button\/gap\/main,10px)] items-center justify-center px-[var(--button\/padding\/x,18px)] py-[var(--button\/padding\/y,10px)] relative rounded-[var(--button\/br\/basic,14px)] shrink-0" data-node-id="I211:23284;14746:8450;14753:15215;14763:7621" data-name="Button">
                                  <div className="flex flex-col font-['Roboto_Flex:Medium',sans-serif] font-[var(--typo-component\/fontweight\/medium,500)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--colors-button-lim-primary-text-default,#7986cb)] text-[length:var(--button\/typo\/fontsize,12px)] text-center tracking-[var(--typo-component\/letterspacing\/main,0.2px)] whitespace-nowrap" data-node-id="I211:23284;14746:8450;14753:15215;14763:7621;11750:2485" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                                    <p className="leading-[var(--button\/typo\/lineheight,16px)]">Начать</p>
                                  </div>
                                </div>
                                <div className="absolute left-[-52px] size-[179px] top-[119px]" data-node-id="I211:23284;14746:8450;14753:15215;15084:32898">
                                  <div className="absolute flex inset-[0_-35.91%_41.92%_-62.7%] items-center justify-center [container-type:size]">
                                    <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                                      <div className="relative size-full" data-node-id="I211:23284;14746:8450;14753:15215;15084:32898;15084:33175">
                                        <div className="absolute inset-[-1.44%_0_-1.44%_-0.36%]">
                                          <img alt="" className="block max-w-none size-full" src={imgVector8} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute flex inset-[29.49%_-35.91%_46.34%_-66%] items-center justify-center [container-type:size]">
                                    <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                                      <div className="relative size-full" data-node-id="I211:23284;14746:8450;14753:15215;15084:32898;15084:33176">
                                        <div className="absolute inset-[-3.47%_-0.25%_-3.47%_0]">
                                          <img alt="" className="block max-w-none size-full" src={imgVector9} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute flex inset-[22.95%_-41%_17.47%_-53.12%] items-center justify-center [container-type:size]">
                                    <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                                      <div className="relative size-full" data-node-id="I211:23284;14746:8450;14753:15215;15084:32898;15084:33177">
                                        <div className="absolute inset-[-1.41%_0_-1.41%_-0.24%]">
                                          <img alt="" className="block max-w-none size-full" src={imgVector10} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute flex inset-[29.95%_-34.71%_0_-62.7%] items-center justify-center [container-type:size]">
                                    <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                                      <div className="relative size-full" data-node-id="I211:23284;14746:8450;14753:15215;15084:32898;15084:33178">
                                        <div className="absolute inset-[-1.2%_-0.32%_-1.2%_-0.2%]">
                                          <img alt="" className="block max-w-none size-full" src={imgVector11} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start min-w-[var(--sim-card-min-width,248px)] relative rounded-[var(--br\/lg\/50,28px)] w-full self-stretch" data-node-id="I211:23284;14746:8450;14753:15237" data-name="T-card / L1-Main">
                          <div className="border border-[var(--colors-border-main-surfase,rgba(255,255,255,0.04))] border-solid content-stretch flex flex-col gap-[var(--cards\/gap\/10,0px)] h-full items-end overflow-clip p-[var(--cards\/space\/10,16px)] relative rounded-[var(--br\/lg\/50,28px)] w-full" data-node-id="I211:23284;14746:8450;14753:15237;14746:7209" style={{ backgroundImage: SIMULATION_CARD_BG, backgroundColor: '#181a26' }} data-name="Card">
                            <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-node-id="I211:23284;14746:8450;14753:15237;14746:7210" data-name="Heading">
                              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-between min-w-px relative" data-node-id="I211:23284;14746:8450;14753:15237;14746:7211" data-name="Row">
                                <div className="content-stretch flex flex-col gap-[var(--gap\/xs\/6,6px)] items-start leading-[0] not-italic relative shrink-0 w-full" data-node-id="I211:23284;14746:8450;14753:15237;14763:7783">
                                  <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto_Flex:Regular',sans-serif)] font-[var(--font\/body\/b2\/fontweight\/regular,400)] justify-center relative shrink-0 text-[color:var(--colors-typo-main-20,#6d728d)] text-[length:var(--font\/body\/b2\/fontsize,16px)] tracking-[var(--font\/body\/b2\/letterspacing,0.1px)] whitespace-nowrap" data-node-id="I211:23284;14746:8450;14753:15237;14763:7757" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                                    <p className="leading-[var(--font\/body\/b2\/lineheight,20px)]">Симуляция</p>
                                  </div>
                                  <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto_Flex:Bold',sans-serif)] font-[var(--font\/heading\/h5\/fontweight\/bold,700)] [word-break:break-word] justify-center min-h-[48px] min-w-full overflow-hidden relative shrink-0 text-[color:var(--colors-typo-main-10,#d2d4df)] text-[length:var(--font\/heading\/h5\/fontsize,20px)] tracking-[var(--font\/heading\/h5\/letterspacing,0.2px)] w-full" data-node-id="I211:23284;14746:8450;14753:15237;14746:7233" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                                    <p className="leading-[var(--font\/heading\/h5\/lineheight,24px)]">SMART</p>
                                  </div>
                                </div>
                                <div className="backdrop-blur-[10px] bg-[var(--colors-button-lim-primary-bg-default,rgba(63,81,181,0.15))] border border-[var(--colors\/button\/lim\/primary\/border\/default,rgba(63,81,181,0))] border-solid content-stretch flex gap-[var(--button\/gap\/main,10px)] items-center justify-center px-[var(--button\/padding\/x,18px)] py-[var(--button\/padding\/y,10px)] relative rounded-[var(--button\/br\/basic,14px)] shrink-0" data-node-id="I211:23284;14746:8450;14753:15237;14763:7621" data-name="Button">
                                  <div className="flex flex-col font-['Roboto_Flex:Medium',sans-serif] font-[var(--typo-component\/fontweight\/medium,500)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--colors-button-lim-primary-text-default,#7986cb)] text-[length:var(--button\/typo\/fontsize,12px)] text-center tracking-[var(--typo-component\/letterspacing\/main,0.2px)] whitespace-nowrap" data-node-id="I211:23284;14746:8450;14753:15237;14763:7621;11750:2485" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                                    <p className="leading-[var(--button\/typo\/lineheight,16px)]">Начать</p>
                                  </div>
                                </div>
                                <div className="absolute left-[-52px] size-[179px] top-[119px]" data-node-id="I211:23284;14746:8450;14753:15237;15084:32898">
                                  <div className="absolute inset-[-10.41%_1.22%_56.25%_13.41%]" data-node-id="I211:23284;14746:8450;14753:15237;15084:32898;15089:33244">
                                    <div className="absolute inset-[-1.55%_0]">
                                      <img alt="" className="block max-w-none size-full" src={imgVector12} />
                                    </div>
                                  </div>
                                  <div className="absolute inset-[16.67%_1.22%_56.25%_12.2%]" data-node-id="I211:23284;14746:8450;14753:15237;15084:32898;15089:33293">
                                    <div className="absolute inset-[-3.09%_0]">
                                      <img alt="" className="block max-w-none size-full" src={imgVector15} />
                                    </div>
                                  </div>
                                  <div className="absolute flex inset-[43.75%_0_29.17%_12.2%] items-center justify-center [container-type:size]">
                                    <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                                      <div className="relative size-full" data-node-id="I211:23284;14746:8450;14753:15237;15084:32898;15089:33294">
                                        <div className="absolute inset-[-3.09%_0]">
                                          <img alt="" className="block max-w-none size-full" src={imgVector16} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute inset-[43.75%_0_56.25%_12.2%]" data-node-id="I211:23284;14746:8450;14753:15237;15084:32898;15089:33295">
                                    <div className="absolute inset-[-1.5px_0]">
                                      <img alt="" className="block max-w-none size-full" src={imgVector17} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[10px] items-center justify-center pb-[var(--spaces\/xs\/10,8px)] relative shrink-0 w-[310px]" data-node-id="I211:23284;14746:8450;14753:15259">
                      <div className="-translate-x-1/2 absolute bottom-0 h-[51px] left-[calc(50%+18.5px)] w-[419px]" data-node-id="I211:23284;14746:8450;14761:7575">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse11} />
                      </div>
                      <div className="h-[301px] relative shrink-0 w-[287px]" data-node-id="I211:23284;14746:8450;14753:15260" data-name="кот 1">
                        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                          <img alt="" className="absolute max-w-none object-cover size-full" src={img1} />
                          <img alt="" className="absolute max-w-none object-cover size-full" src={img2} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[521px] left-[-189px] top-[223px] w-[427.945px] z-[2]" data-node-id="I211:23284;15069:32621">
          <div className="absolute inset-[-56.32%_-62.29%_-62.68%_-80.21%]">
            <img alt="" className="block max-w-none size-full" src={imgGroup1} />
          </div>
        </div>
        <div className="absolute bottom-[-24.69px] h-[500.687px] right-[-64.94px] w-[427.945px] z-[1]" data-node-id="I211:23284;15069:32637">
          <div className="absolute inset-[-38.63%_-38.92%_-49.31%_-56.84%]">
            <img alt="" className="block max-w-none size-full" src={imgGroup2} />
          </div>
        </div>
      </div>
    </div>
  );
}
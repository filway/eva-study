import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js'
import { RendererSystem } from '@eva/plugin-renderer'
import { Img, ImgSystem } from '@eva/plugin-renderer-img'

resource.addResource([
    {
      name: 'image1',
      type: RESOURCE_TYPE.IMAGE,
      src: {
        image: {
          type: 'png',
          url: 'https://gw.alicdn.com/tfs/TB1DNzoOvb2gK0jSZK9XXaEgFXa-658-1152.webp',
        }
      },
      preload: true,
    },
    {
      name: 'image2',
      type: RESOURCE_TYPE.IMAGE,
      src: {
        image: {
          type: 'png',
          url: 'https://gw.alicdn.com/tfs/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg'
        }
      },
      preload: true
    }
  ]);

  // 创建渲染系统
  const rendererSystem = new RendererSystem({
    canvas: document.querySelector('#canvas'), // 可选，自动生成 canvas 挂在 game.canvas 上
    width: 750,
    height: 1000,
    transparent: false,
    resolution: window.devicePixelRatio / 2, // 可选, 如果是2倍图设计 可以除以2
    enableScroll: true, // 允许页面滚动
    renderType: 0 // 0:自动判断，1: WebGL，2:Canvas，建议android6.1 ios9 以下使用Canvas，需业务判断。
  })
  

    // 创建游戏对象
  const game = new Game({
    frameRate: 60, // 可选，游戏帧率，默认60
    autoStart: true, // 可选，自动开始
    systems: [rendererSystem]
  })

  game.addSystem(new ImgSystem()); // 给游戏添加渲染图片的能力

  const gameObject = new GameObject('gameObj1', {
    size: {
      width: 658,
      height: 1152
    }
  })

  gameObject.addComponent(
    new Img({
      resource: 'image1'
    })
  )
  

  game.scene.addChild(gameObject) // 把游戏对象放入场景，这样画布上就可以显示这张图片了
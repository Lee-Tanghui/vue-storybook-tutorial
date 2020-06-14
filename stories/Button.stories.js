import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import MyButton from './MyButton.vue';

export default {
  title: 'MyButton',
  component: MyButton,
  parameters: {
    viewport: { 
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6' 
    },
  }
};

import ButtonMd from './Button.md';
export const 基础使用 = () => ({
	components: {
		MyButton,
	},
	template: `
    <my-button text="点我" @btnClick="btnClick"/>
    `,
  methods: {
    btnClick: action('btnClick')
  }
});

基础使用.story = {
  parameters: {
    notes: { ButtonMd },
  }
};


export const 使用viewport插件 = () => ({
	components: {
		MyButton,
	},
	template: `
    <my-button text="点我"/>
    `,
})
使用viewport插件.story = {
  parameters: {
    viewport: { 
      defaultViewport: 'iphonex' 
    },
  },
}




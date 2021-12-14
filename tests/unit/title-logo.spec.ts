import { shallowMount } from "@vue/test-utils";
import TitleLogo from '@/components/TitleLogo.vue'; 

describe('title-logo', () => {

    it('is displayed', () => {
        const wrapper = shallowMount(TitleLogo);
        const rootElement = wrapper.find('[qa-ref=title-logo]');
        expect(rootElement.exists()).toBe(true);
    });
});
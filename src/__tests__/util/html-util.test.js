import { makeTitle, getCookie } from '../../util/html-util';

describe('Html Utilities', () => {
  describe('makeTitle', () => {
    it('works correctly', () => {
      expect(makeTitle('hello-world')).toStrictEqual('Hello World');
      expect(makeTitle('foo-Bar')).toStrictEqual('Foo Bar');
      expect(makeTitle('helloWorld')).toStrictEqual('HelloWorld');
    });
  });

  describe('getCookie', () => {
    it('returns correct value for given cookie name', () => {
      document.cookie = 'hello=world';
      expect(getCookie('hello')).toStrictEqual('world');
    });

    it('returns undefined if given cookie does not exist', () => {
      expect(getCookie('foo')).toBeUndefined();
    });
  });
});

describe('dataset',function (){
    var target = null,
        data = null;
    
    beforeEach(function (){
        var html = '<div id="J-target"'+ 
                         'data-type="userinfo"'+ 
                         'data-id="100"'+ 
                         'data-age="-23"'+ 
                         "data-userAddress='{\"province\":\"ZheJiang\",\"city\":\"HangZhou\"}'"+  
                         "data-company-info='{\"china\":[\"Alipay\",\"Taobao\"]}'"+ 
                         'data-vip="true"'+ 
                         'data-email="null"'+   
                         "data-avatars='[{\"google\":[\"img.png\",\"img2.png\"]}]'"+ 
                         'data-sons="undefined"'+ 
                         'data-car="false"'+ 
                     '></div>';
        document.getElementById('J-target-box').innerHTML = html;
        target = document.getElementById('J-target');
        data = dataset(target);
    });
    it('parse successfuly',function (){
        expect(data.type).toBeTruthy();
    });
    it('lower camelCase property',function (){
        expect(data.useraddress).toBeTruthy();
        expect(data.companyInfo).toBeTruthy();
    });
    it('parse string',function (){
        expect(Typeof(data.type)).toBe('[object String]');
    });
    it('parse number',function (){
        expect(Typeof(data.id)).toBe('[object Number]');
    });
    it('parse number negative',function (){
        expect(Typeof(data.age)).toBe('[object Number]');
        expect(data.age).toBe(-23);
    });
    it('parse object literal',function (){
        expect(Typeof(data.useraddress)).toBe('[object Object]');
        expect(data.useraddress.province).toBe('ZheJiang');
    });
    it('deeply parse object literal',function (){
        expect(Typeof(data.companyInfo)).toBe('[object Object]');
        expect(data.companyInfo.china.length).toBe(2);
    });
    it('parse boolean',function (){
        expect(Typeof(data.vip)).toBe('[object Boolean]');
        expect(Typeof(data.car)).toBe('[object Boolean]');
        expect(data.car).toBeFalsy();
        expect(data.vip).toBeTruthy();
    });
    it('parse null',function (){
        expect(data.email).toBeNull();
    });
    it('parse array',function (){
        expect(Typeof(data.avatars)).toBe('[object Array]');
        expect(data.avatars[0].google[0]).toBe('img.png');
    });
    it('parse undefined',function (){
        expect(data.sons).toBeUndefined();
    });
    
    
    function Typeof(val){
        return toString.call(val);
    }
});

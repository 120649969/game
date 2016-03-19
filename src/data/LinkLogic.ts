/**
 *
 * @author 
 *
 */
class LinkLogic {
	
    public static lines:number[][];
    public static isHaveLine():boolean{
        LinkLogic.lines =[];
        var currentType:string = '';
        var typeNum:number=0;
        
        for(var i=0;i<GameData.MaxRow;i++){
            for(var t=0;t<GameData.MaxColumn;t++){
                if(GameData.mapData[i][t]!=-1){
                    if(currentType!=GameData.elements[GameData.mapData[i][t]].type){
                        if(typeNum>=3){
                            var arr:number[]=[];
                            for(var q=0;q<typeNum;q++){
                                arr.push(GameData.mapData[i][t-q-1]);
                            }
                            LinkLogic.lines.push(arr);
                        }
                        currentType= GameData.elements[GameData.mapData[i][t]].type;
                        typeNum=1;
                    }else{
                        typeNum++;
                    }
                }else{
                    if(typeNum>=3){
                        var arr:number[]=[];
                        for(var q=0;q<typeNum;q++){
                            arr.push(GameData.mapData[i][t-q-1]);
                        }
                        LinkLogic.lines.push(arr);
                    }
                    currentType='';
                    typeNum=0;
                }
            }
            if(typeNum >= 3) {
                var arr: number[] = [];
                for(var q = 0;q < typeNum;q++) {
                    arr.push(GameData.mapData[i][t - q - 1]);
                }
                LinkLogic.lines.push(arr);
            }
            currentType = '';
            typeNum = 0;
        }
        
        for(i=0;i<GameData.MaxColumn;i++){
            for(t=0;t<GameData.MaxRow;t++){
                if(GameData.mapData[t][i] !=-1){
                    if(currentType != GameData.elements[GameData.mapData[t][i]].type){
                        if(typeNum>=3){
                            var arr : number[]=[];
                            for(q=0;q<typeNum;q++){
                                arr.push(GameData.mapData[t-q-1][i]);
                                LinkLogic.lines.push(arr);
                            }
                        }
                        currentType = GameData.elements[GameData.mapData[t][i]].type;
                        typeNum=1;
                    }else{
                        typeNum++;
                    }
                }else{
                    if(typeNum >= 3) {
                        var arr: number[] = [];
                        for(q = 0;q < typeNum;q++) {
                            arr.push(GameData.mapData[t - q - 1][i]);
                            LinkLogic.lines.push(arr);
                        }
                    }
                    currentType = '';
                    typeNum = 0;
                }
            }
            if(typeNum >= 3) {
                var arr: number[] = [];
                for(q = 0;q < typeNum;q++) {
                    arr.push(GameData.mapData[t - q - 1][i]);
                    LinkLogic.lines.push(arr);
                }
            }
            currentType = '';
            typeNum = 0;
        }
        if(LinkLogic.lines.length!=0){
            return true;
        }
        return false;
    }
    
    public static isNextHaveLine():boolean{
        for(var i=0;i<GameData.MaxRow;i++){
            for(var t=0;t<GameData.MaxColumn;t++){
                //横向两个相同元素相邻
                if(t < (GameData.MaxColumn - 1) && GameData.mapData[i][t + 1] != -1 && GameData.elements[GameData.mapData[i][t]].type == GameData.elements[GameData.mapData[i][t+1]].type){
                    
                    //左侧
                    if(t>0&&GameData.mapData[i][t-1]!=-1){
                        //左上角
                        if(i>0&&GameData.mapData[i-1][t-1]&&GameData.mapData[i-1][t-1]!=-1 && GameData.elements[GameData.mapData[i-1][t-1]].type==GameData.elements[GameData.mapData[i][t]].type){
                            return true;
                        }
                        //左下角
                        if(i <(GameData.MaxRow-1) && GameData.mapData[i + 1][t - 1] && GameData.mapData[i + 1][t - 1] != -1 && GameData.elements[GameData.mapData[i + 1][t - 1]].type == GameData.elements[GameData.mapData[i][t]].type) {
                            return true;
                        }
                        //左边
                        if( t > 1 && GameData.mapData[i][t - 2] && GameData.mapData[i][t - 2] != -1 && GameData.elements[GameData.mapData[i][t - 2]].type == GameData.elements[GameData.mapData[i][t]].type) {
                            return true;
                        }
                    }
                    //右侧
                    if(t <GameData.MaxColumn-2 && GameData.mapData[i][t+2] != -1) {
                        //右上角
                        if(i > 0 && GameData.mapData[i - 1][t + 2] && GameData.mapData[i - 1][t +2] != -1 && GameData.elements[GameData.mapData[i - 1][t +2]].type == GameData.elements[GameData.mapData[i][t]].type) {
                            return true;
                        }
                        //右下角
                        if(i < (GameData.MaxRow - 1) && GameData.mapData[i + 1][t +2] && GameData.mapData[i + 1][t +2] != -1 && GameData.elements[GameData.mapData[i + 1][t +2]].type == GameData.elements[GameData.mapData[i][t]].type) {
                            return true;
                        }
                        //右边
                        if(t < (GameData.MaxColumn - 3) && GameData.mapData[i][t +3] && GameData.mapData[i][t +3] != -1 && GameData.elements[GameData.mapData[i][t +3]].type == GameData.elements[GameData.mapData[i][t]].type) {
                            return true;
                        }
                    }
                    
                }
                //纵向两个相同元素相邻
                if(i < (GameData.MaxRow - 1) && GameData.mapData[i+1][t] != -1 && GameData.elements[GameData.mapData[i][t]].type == GameData.elements[GameData.mapData[i+1][t]].type) {
                    
                    //上侧
                    if(i > 0 && GameData.mapData[i-1][t] != -1) {
                        //左上角
                        if(t > 0 && GameData.mapData[i - 1][t - 1] && GameData.mapData[i - 1][t - 1] != -1 && GameData.elements[GameData.mapData[i - 1][t - 1]].type == GameData.elements[GameData.mapData[i][t]].type) {
                            return true;
                        }
                        //右上角
                        if(t < (GameData.MaxColumn - 1) && GameData.mapData[i - 1][t +1] && GameData.mapData[i - 1][t + 1] != -1 && GameData.elements[GameData.mapData[i - 1][t + 1]].type == GameData.elements[GameData.mapData[i][t]].type) {
                            return true;
                        }
                        //上边
                        if(i > 1 && GameData.mapData[i-2][t] && GameData.mapData[i-2][t] != -1 && GameData.elements[GameData.mapData[i-2][t]].type == GameData.elements[GameData.mapData[i][t]].type) {
                            return true;
                        }
                    }
                    //下侧
                    if(i <(GameData.MaxRow-2) && GameData.mapData[i][t + 2] != -1) {
                        //左下角
                        if(t > 0 && GameData.mapData[i +2][t -1] && GameData.mapData[i +2][t -1] != -1 && GameData.elements[GameData.mapData[i +2][t -1]].type == GameData.elements[GameData.mapData[i][t]].type) {
                            return true;
                        }
                        //右下角
                        if(t < (GameData.MaxColumn - 1) && GameData.mapData[i + 2][t + 1] && GameData.mapData[i + 2][t + 1] != -1 && GameData.elements[GameData.mapData[i + 2][t + 1]].type == GameData.elements[GameData.mapData[i][t]].type) {
                            return true;
                        }
                        //下边
                        if(i < (GameData.MaxRow - 3) && GameData.mapData[i + 3][t] && GameData.mapData[i + 3][t] != -1 && GameData.elements[GameData.mapData[i + 3][t]].type == GameData.elements[GameData.mapData[i][t]].type) {
                            return true;
                        }
                    }

                }
                
                //横向两个相同元素相隔
                if(t<(GameData.MaxColumn-2)&& GameData.mapData[i][t+2] !=-1 && GameData.elements[GameData.mapData[i][t+2]].type == GameData.elements[GameData.mapData[i][t]].type){
                    //上边
                    if(i>0&&GameData.mapData[i-1][t+1] && GameData.mapData[i-1][t+1]!=-1 && GameData.elements[GameData.mapData[i-1][t+1]].type == GameData.elements[GameData.mapData[i][t]].type){
                        return true;
                    }
                    //下边
                    if(i <(GameData.MaxRow-1) && GameData.mapData[i +1][t + 1] && GameData.mapData[i + 1][t + 1] != -1 && GameData.elements[GameData.mapData[i + 1][t + 1]].type == GameData.elements[GameData.mapData[i][t]].type) {
                        return true;
                    }
                }
                //纵向两个相同元素相隔
                if(i < (GameData.MaxRow - 2) && GameData.mapData[i + 2][t] != -1 && GameData.elements[GameData.mapData[i + 2][t]].type == GameData.elements[GameData.mapData[i][t]].type) {
                    //左边
                    if(t > 0 && GameData.mapData[i + 1][t - 1] && GameData.mapData[i + 1][t -1] != -1 && GameData.elements[GameData.mapData[i + 1][t - 1]].type == GameData.elements[GameData.mapData[i][t]].type) {
                        return true;
                    }
                    //右边
                    if(t < (GameData.MaxColumn - 1) && GameData.mapData[i + 1][t + 1] && GameData.mapData[i + 1][t + 1] != -1 && GameData.elements[GameData.mapData[i + 1][t + 1]].type == GameData.elements[GameData.mapData[i][t]].type) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    
    public static isHaveLineByIndex(p1:number,p2:number):boolean{
        var p1n:number=p1;
        var p2n:number=p2;
        
        var p1id:number= GameData.mapData[Math.floor(p1/GameData.MaxColumn)][p1%GameData.MaxRow];
        var p2id: number = GameData.mapData[Math.floor(p2 / GameData.MaxColumn)][p2 % GameData.MaxRow];
        
        GameData.mapData[Math.floor(p1 / GameData.MaxColumn)][p1 % GameData.MaxRow] =p2id;
        GameData.mapData[Math.floor(p2 / GameData.MaxColumn)][p2 % GameData.MaxRow] =p1id;
        
        var rel:boolean = LinkLogic.isHaveLine();
        if(rel){
            GameData.elements[p1id].location = p2;
            GameData.elements[p2id].location = p1;
            return true;
        }else{
            GameData.mapData[Math.floor(p1 / GameData.MaxColumn)][p1 % GameData.MaxRow] = p1id;
            GameData.mapData[Math.floor(p2 / GameData.MaxColumn)][p2 % GameData.MaxRow] = p2id;
        }
        return false;
    }
    
    public static canMove(id1:number,id2:number):boolean{
        var l1row:number=Math.floor(GameData.elements[id1].location/GameData.MaxRow);
        var l1col:number=GameData.elements[id1].location%GameData.MaxColumn;
        
        var l2row: number = Math.floor(GameData.elements[id2].location / GameData.MaxRow);
        var l2col: number = GameData.elements[id2].location % GameData.MaxColumn;
        
        if(l1row ==l2row){
            if(Math.abs(l1col-l2col)==1){
                return true;
            }
        }
        if(l1col==l2col){
            if(Math.abs(l1row-l2row)==1){
                return true;
            }
        }
        
        return false;
        
    }
    
    public static changeOrder(){
        var arr:number[]=[];
        for(var i=0;i<GameData.MaxRow;i++){
            for(var t=0;t<GameData.MaxColumn;t++){
                if(GameData.mapData[i][t]!=-1){
                    arr.push(GameData.mapData[i][t]);
                }
            }
        }
        
        var index:number=0;
        for(var i=0;i<GameData.MaxRow;i++){
            for(var t=0;t<GameData.MaxColumn;t++){
                index = Math.floor(Math.random()*arr.length);
                GameData.mapData[i][t]=arr[index];
                GameData.elements[arr[index]].location=i*GameData.MaxColumn+t;
                arr.slice(index,i);
            }
        }
    }
}

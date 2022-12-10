
import './App.css';
import React from 'react';
import {buttonFactory} from './utility';

function dayFive(is_test, buffersize){
    let input;
    if (is_test){
        input= "mjqjpqmgbljsphdztnvjfqwrcgsmlb";
    } else {
        input = "bvsvcsssfwwdttzpzqqnjjmbbmpbmpmffnttjllzbblvlvqllcwwqpwwhcclqqhmhbhlbbmtmdmgmpggcmcnmcmfcfddvmmcncrcncbbtssdnnhmmfmfrmrbbzllgtllfnnwhwtwzwjjrsrgsrsbbnjjbhjbbjpplslrssdwswrrcsszpplpfplflnnvdvmvjmmgpghphlhphnhffgqgfgzgddstdsdjjgqglqggtgvgrrgtrtllrvrmmnggftgtdtrttgqttcrcqqjqcqwccdzdldrdbbbmrbbnmmwrmmbcchnhmhchddhpphdhzhbbnvbbtctwcwbcwcfclcwwzvwvddbsdsfftgtqggjllwjwppmvvswsjwsscdcrrbggqzqqbhhjwhjwjtjvttpnpdplljplpqpzqzrqrmqmvvsvrvppfgfzfqffvsfvfcvcddjcddzssgfgtffhtfhthntnvvzhzwhzhbbnvvbtbqtqcqnqwnnvpvwwcqcgqqwrwlwbwrbbjcbbqqpddtbddcldccddjssvnvlnnmggmbbchcdcqqdsdqsdqdvdpvvvbzvbvrrjdrjrbjbrbttqzttmffwcfcnnbjnbbjmmgtmgmgdgdpgdglgzzvnzzztjjwbwvvhbhwbbnbhbddwcwvcvjcvjjnnjqjqjzqjjbgbmbjjnqnqddgfgwfgwfftntvnvtvhvlvslsffhvvwnnhshchmmlwmmwvvnhnggzllphllbqqtgqqffhwwnwzztnzttftptnppdpjdjwdwhdddgqglqldqdzzslsggstsrrcsrcclqqrsqrqjqhhjwjggrjgjnjtjwtwjtjrrvnnbddzqzzfnnbvvmfvmvwvggmsgsrggcjjtftpfflzfzccdgcgzcgzcggrbgbngnpnfngfnfqqfzfbfsbfsslqsstvvfmvfvrrvdrddrlrjlrrngrrgfgvgdggnttqqjbjwbwwchhddpmmcvcppjttbzbrzrdzztgtrrchhhbnnqfnfjnnpncnbnvnfnwwsllvrvddhwdwndnjdjbjttmggfvggjhghrhggczgzttbnttjmmdhdrrnnmppwtwdtdbtdbdffpqplqqfbffjssllmwmnmffcnczzrnznzmmwcmwwpbpcbbfdfrrznnzwnnmjnngmngmgpgrppnhnjhhjnhjhfhbffcfhccvzccnrrsggtjtdtjjqqdmqqcggmzzrhzrrbnnlqqtlqtqhhcffrpffgcfgcgncgnggjgzgvzvtztctmtgmmfwwttrntrtqtptzpzjpjqjffpvffvdfvvjhhggfhfrhrwhhwshsnhshbbjzbjzzlvlfvffmrfffngfgpglgjjsbbvzzjsjvsslgsgsfggwjgjlgjgsjgsstvstvstsffdqdpqddrsrmmjbbqbffzbzjjvzvrvcvhhsjsrrmccgqqjnnplnnrprhppslsqszzpvzvggsqscqqbwqqccsdsswqswwqcqzqddbhhmggswggzllccwvwjjpqqrpplrprgrllfwfmwmhhcmmnppfffvtffndnsdnsnbsnsgnsncnzzwrrqrwwzhzbzbnbqbjjrhhjjjbcjjffmwffjnfjfbbjtbbjhjvhvshvhwvwhvwvwfwwwfvvlddqnnlttqssnpsprpwwttlwtwrwfflggvjggwswgwgtgccdjdtdldrdcdsspjpvjpvvfttjrjdrrjppddbdvdjdwdvdssrhsszsjzzfccmwcwzzlnljlppjdjsdjdhdttrdtdtvddslsmmjnmmhzmhhmwmvmcvclvlnndtdrrfdrfrvfvsfvsszfsfdsfdsfsnsdsnsbsddsdwwzbbfqqhrhmrmzmhzhbbpptptffvtvhhwqqtgtdthhrqrrvttprtprrbcblsmbwqqpffmwnqmrdwvjszzhhhffpqsphcgqhlmsgnmmjsdhbfjscztgfvhnlbcmccrfcbnrwcpvgzztvpjdplmncrbvpzwtdnpfwcpvcbzvbtpqmgztsblnchzlphtzgfqcwnrbpcdhbcgzsbgdmbhhrsjqcngfddwvwvldbftgccbjzrrqjcnhbdfgmpdhdgfqzmnpmjgtgwvqlbwgjzjppgmcjzrfzgnbjjbvmshllzjppscwjzjqnbvrppzlshfvtvnpwljrghhwdhfgtcrstnqtqdzfhvgbrrzfdwgtjpjccwrphsdrsjlrlbnrtdbnhpdtshmqlpjqjdlwvrrflwqhcmnsrmcdnfcnwwqmdjlqmqvpgggrjrvfwtwnmhrgzztvmnqczvgmvpcldgfwmtmnsvdshrjmtsgfstjllmqqmpttfhjnsjflcmnpqtqnvtpbgjjhlwqzmrgrbvcsjvprbtqdrnvrgfjdrlhdjsvhhzvllzgfbdwbtqbqzpllpcmcdrfmrsfnwvvmhcqjblnczltcmmmbqwpztqmdpprwphfwgwnsvnzsldnvbsbcdprnztpbmlfzcwpdvcwbsdflrcvsqlswctvlpvshqpwvtcjbtfnmgwtgsvtqhqdzzfhwznggpsmsmzlzrzqcdbqcnhpwhjbhvnqrcwnvpspwqmsqhdbchgrfcmznchwvftgvbldnvtpgmthbmpvccqwbjnjpzhrstscncsrdzsptzvlzjwnpzshmzbhrhgmnwmjmzvvvbgdjshgnqcmdmjrnhqzwtzpjvdczqzccvpvpqnftvpcwgzrzmmnhjnphfntbgjnscwqjcgfcrhjdsjbqfgzhsftghwwwvjwmhfhbwrwmnfrhcggcrjtjsqndrgsbvddqtwhctltzswmtsgwjgsbvvsvzfhbptjqbvbblzhcmnpcjpgzfhstsnlfvmqbdjhszhwhbqztvfdhnbnmppwvzjpnrhtbgthrdprjpqwpthqwzdnhpngflcmhnrmsbdlfwhjbfgrhfzspmfvvtqrwldzvblbtlwqfgfflvmvthbvdzzbtmmpzchgmldmgnhrfhhjwstbqqrzhmqsbqhjzdmjmllmjgqhhjghgsvrbmrbfjdzghmwpszfmslfwcjrftbqjgbbzddtvjmsgwmhhdzwtwvrgqctvwbwjqvssdvfprjsdgsgwbfmzwzmbnlzbfdqvwbrzpgvngqhfqzfqqsvmtgvsqwrplhfnsqhtvtbbqmpbjlcsfjgngwrztlrjbmcjddjsnbgcpnhdtngzhzvhzpjfcblhglhzfsjdgjdqvvppfrdftfbfldwqjznvrdqdnfscgvhztjwlqgqbjmlsbcrldjhnrsfgthlhplvwgmdnplrtpdvrqbpvnbpzfzwlvrrscvmgzhlcdwglwwrgzqsjqsqfblqljltbvvjwbpmfqjvldspgsbjrdbbwzjntlpqgvdjfvsjznczsppzwfvblffqqhwmhzdzztbvbsjhvjtjrptrdvrbbpnpncltqnhdvwjgzcmdtnbnhlmptjsqlzlpztnrtclgsmgvrvggtzfhpwgjgwtrnshmcpvhprpnrvgprspmwhchlhhsvwpvjdmjrlnjdchngrdgpwzsgqsjnqnqwsctzvsmqgvrpffffcfshbhmqbffwvcjqscrwhbfflwslspwjgdbvcgbtwldzffrdhrlbssjbcsjgbhprgspnjdbmnshzqwdvtnzsrfwbqfrgnlmpvqrrmmmcshzltqbwffprbwqbfthtvszqzcbbljtfjqmwpqssjtdpqlrfmpchrqmdpbsdjcdmglnlgnwvhclqfmbwhtljmscnzzqtwtjqsqrmmnssmqhqjvdlpmstmpwmrcfjbjrchrgvqqzbvtzpcbdvchvghnflllqddlttjwtnfhgqjjgtgsnhpvnwhcbljstshmhpwbqthvngqzrmqpmwqnvrfblpjlqgczfmtwvmlbzslqwdzhfccmrvjwfnwzgpbvgdgttdgtjdlvrmpbdhwjsvvsjqpclrnbtzphvmpfqhhqdmbmqzwphnzzfqjsqvdvbvnpmtnzpdsfzmbttssnssrtpmpvgrrzvcljtqtrqnfmmtsnvtrsjgcmqnttcmp"
    }

    let buffer = buffersize;
    let chars = [];
    console.log(chars);
    let pr = 0;
    let hasDupe;
    for (pr; pr < input.length; pr++){
        let char = input.charAt(pr);
        
        hasDupe = false;
        if (chars.length === buffer){
            for (let i = 0; i < chars.length && !hasDupe; i++){
                for (let j = 0; j < chars.length && !hasDupe; j++){
                    if (i!==j){
                        let samechar = chars[i] === chars[j];
                        if (samechar){
                            hasDupe = true; 
                        }
                    } 
                }
            }
        }

        if (chars.length === buffer){
            if (!hasDupe) break;
            chars.shift();
        }

        chars.push(char);
        
        }
    
    
    let p = document.createElement('pre');
    p.textContent = pr;
  
    let doc = document.getElementById("DayFiveComponent");
    doc.append(p);
    }


  
  class DayFiveComponent extends React.Component{
  
    mounted = false;
  
  
    componentDidMount(){
      if (!this.mounted){
        this.mounted = true;
      
      let doc = document.getElementById("DayFiveComponent");
  
      let dayFive_Sample = buttonFactory("Day Five: Sample");
      dayFive_Sample.addEventListener('click', () => dayFive(true, 4));
      doc.append(dayFive_Sample);
  
      let dayFive_Input = buttonFactory("Day Five: Input");
      dayFive_Input.addEventListener('click', () => dayFive(false, 4));
      doc.append(dayFive_Input);
  
      let dayFive_Sample_Bonus = buttonFactory("Day Five: Sample (Bonus)");
      dayFive_Sample_Bonus.addEventListener('click', () => dayFive(true, 14));
      doc.append(dayFive_Sample_Bonus);
  
  
      let dayFive_Input_Bonus = buttonFactory("Day Five: Input (Bonus)");
      dayFive_Input_Bonus.addEventListener('click', () => dayFive(false, 14));
      doc.append(dayFive_Input_Bonus);
    }
    }
  
    render(){
      return(
      <div id="DayFiveComponent"><h2>Day Five:</h2></div>
      )
    }
  }

  export {DayFiveComponent};
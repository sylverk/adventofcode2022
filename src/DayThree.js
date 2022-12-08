
import './App.css';
import React from 'react';
import { buttonFactory } from './utility';

function dayThree(is_test, is_bonus) {
    let input;
    if (is_test) {
        input = "vJrwpWtwJgWrhcsFMMfFFhFp\njqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\nPmmdzqPrVvPwwTWBwg\nwMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\nttgJtRGJQctTZtZT\nCrZsJsPPZsGzwwsLwLmpwMDw";
    } else {
        input = "tdltdtmhlRNCBcwmHr\nWDzDPnvvGnsWLWpGJJHRzCCRZNBRrRwMNwHH\nDsDsQnJDnWsJnJvrQDPJddgShFQhjljqhggbdbbt\nLqvbLLTdvlfdqTLtbvDSRHPhHmRSnndHnHRM\njswsGgzwsNgNWNwGJzVrgSHnhHHDmShmmGShnMDPRn\nJMNWzVwMpjpLpTfTLLTf\nHnQBjMjPQmRMmJCmBPGSFTSVWcNNGQQGGGTV\ndgstqdtsbwrzddvrvdwqzhrWSFllDSWGDWFGDNsDDWSTHT\ngpqZwwzHZhwzMJBmfZnnJLCL\nPJHbTPCmLdTtLtRtBvzBrWffft\nhnpTqhMncpFDppDqqNVFVvWzvNWNvfBfzs\nGwZccTpgnDSDDZQdCZbbClbCmm\nbnZnRZZZRlpGBbfRJjBbMfhCHwfsHShschMsHCww\nLqVtqVmtLQvVqqLTFFvLDMhDMpMhwMSLDhsDCH\nmFQWtNggVQQgmdgpJGpnnZJjbWGBRZ\nGsdGrGqvLZqWvWWdrPLdfvsvSJDDcQQhcTbFbTcCJLSJShcJ\nwmBlnjwjgHSSDQjfDDfF\nwggpmwmwNnMlHRpttRHmlPfWzdGvvvzrZWVvMrPvvZ\njvlvTvTvTvcqTdZrdnGlVfNgspslpfGGnM\nBWQhQzQwmhwWHbWCSRMRgjpjVDDRgDgVffgV\nzLHQSBWmLcjdPjLLLZ\nBjjLnRzBnRmTSTBhpBmCjnLqNPGGVNZgNgLGddZVNVdf\nwDDJJQJlJtHrlwFFPNGGfZbbbglgfPSf\ntFQssvcDJtJcFcvwHtBmnSCvRmzzhpSCWvmC\nGvPVvVHPgzPMcFvDHssdpCpsnpHnsj\ngmhmSRZBJTTTmSBZhhrqSBLRCnsBjjnbjBdbdbbdnbjwwBsj\nWlrgrRgJSgZSJJJTZRtvVzvGtfzcVFcMzlGM\nQSZwwsBZZwjsndFsMPHLzTLLLz\ntpJfgHghmvqpNWrrTMrMMRzPrMPJ\nghgghmlvmgNWgmWwBQcbGGSclGHjjb\nlhlnWGGFWZhDfgFfWDfrhgrRwcccqcZQBQMwcqJMTMRMqJ\njVdpSLPVSjtNdjdPtptzLNPPzcBzwCQrCcTBTRqwwqMCJTcC\nPNHdpPLHtHtjdLghnHWvrvnFlFnf\nqttvqPdCtLrqRgfpgpMgSfSWvM\nTJccnTDjjDlDhSpfHdhpTpZf\nwldwmJdwmsstCsLzBsBCGP\nddpCGpGpnndnpWqdVVpDGfDGFzSsFSZzBJShJsVtTstssrsr\njbvPLwFjztJBtvJz\nwjggcgPFLlLwPFNwHmNPQqDRQfCRGCGqnpcRqQnn\nPmmGhLLcgZbPQnqH\nDlVsvvrvvvrsDJLRDvvCHbpBqpnbQnggbWZbggVW\nvJRTSSRJClCCDwTJRfSfCsGzMLmGmzmjGcfmdFNNNtfh\nvcmmMvfctfjLjvvRbLdHSnQSgQFnghSgQQSSjT\nWzVbszVNHnTsQFgZ\npVlGlzrbDNrDrPpJNNJpVdBDvLdqvvvqqdBqcfvLdq\ngfzgzPDVZQDDSqBdtFfdFdvqBB\nMrwmTcJJsMwNmJdvFqdFGGtvvsGt\nHMmTTwcJqcrTHrjjczhZQgzghgQHhnhhHh\nBffBVgjPwPPPJwBBVJfDDsgrdZdcZqlcSnSncRNzHzZljNqq\nCmWFbCmFvMtLLQCTbbbLtRqdSZHcdnqqNqNTRlnqNH\nMpthtSMvFbvWPVDrsDgpPggD\nVVRntNwmlvhGccPNfS\nQZcgZppdrZQTzrBgCbrbdQrBvjLssPjSssMsfSLhTPPGvLTP\nZZcpJZHpgCgpppdrJRtVJFqVFVDRWJmtVq\ndpdhtpjHtnpFRHdjRnwspMQmqpqqmVqmTVJQMmff\ngSCcBCBCcgwDBLSvcLQQVTMmfmMJDqfTrrVV\ngSwPzLBbNCbFnHHjhthh\ndLNrRmqLqRgCNNrCJrSqqSQgjDWnGpGjDjspnlslGHnnjsQj\nvVTzZFVttVBMFbFfffVVmVtHWpDspjHWWWbGjjjDsjWllW\nhwFFwztTzvZmBzVfqhSSNPRPPCRPRJCr\nBjfcmzCCTtNBNjcTDWwzPzDMMQPDPMws\nlGpJFHnlSlnZbGnQQSBLwSPPLMsDQh\nJFHHpbnZbGbZgvTmqfNgqCcvjB\nShhpqjhhVZmHhSJSSnLzdNRNTjLwNTNTzv\nQffRWRrMGwLfgNcNgc\nGQrQDPRBlGlsGrWtrtPDPbWpqhZqSqJJpHZSVhVhhmmBZF\nZlVVDTtTrzFDrFfB\nNNGbJNNNNmpWBNbNWmjMfdjmFfPdqFMrMj\nNQvRNvSRHSQBgRGQJJQQHTtcVLlVcTwVTllnRsttZs\nfjsDhJsVDcVJVljFDqLqFlnnCFbzbCCCZCzCtCZrnCCM\nHwQNrHWNPGPHMZCvMCbzzvHZ\ndBWwWPPGrGwBlcjDlcjcjldL\nNCLMHJZqCHHHMFlNBZtTZRvtStZdcRbc\nwDrnpbswVgsrsWmGpDpfpBQtRSTmdvBjTjtBScctRm\ngwzgbGDgpgFJMzlzPJCC\nSpnfPVqFnGfPGggqfGbjZZrtWrlRlbHpZjRZ\nmmJmdJBsBJsDwhJBQhTZtzdRltrrRlrtHjjl\nNBscQhmsmmQLLwLmhhwmcSSGfnfSFCSMCPfHCMqG\nhvVnPwZwVzQrhrVhPPPrpQVDBgMMlSTLZsgdDTSTdsssLd\nRvFCqCGfbFCRbRmSBMMsLBgdFDSgdL\ncRGjRWbWjvtPvrQcnr\nLzLNzhpcRRcTmNDzRhTPDjMvMnVlMgjngSMrMzrQQr\ntfbWfWcWddFcGFwfswFFFCrjjvlVbrQjSglSQMjgvlgl\nFHWGCHCCGcwfswqHdHqwwmPqRJDpZZNRJPRPPTTJNR\ngLHLLhTjZVMwMRSZZS\nGdqdtlPvnQPPnsRw\ntNNGvdtbdmJmHRTRJrFr\nQjjdjGDvdjwpZsssvsPZFZll\nmTWWMWzbPHmZwHHw\nJwTbtBztMVLDSpjVtc\nSZSBWtBSwnTDFSDD\nCsrJWmmPrPQmpzsPmssssvnTFhvTnPhnFDFfDFnwqF\nCCCCzprgrJJCgmVcpJmWLQZddHlGbMbdZMbtZNNcHHBt\nfgqqrZLqZqFzFFWzZzgPPbnMNNNvQnpQnQbNbpcHNP\nSdwdmwCClCCwldhRSmsvpbncjQbNNQMtjQnMvS\nmDlwhMRlCwDCTVwVJRdGgfzLLzzGzGFWqGqfGD\nCnVvCqvnRqHVqnWcMFnLmLnMMm\nZrdzbzbrdwtQdSfdcmmFMBWFNFWLwNNp\nQFrQtJDdSZdDVHlVCPssJRll\nqMpGGmVNHMGVjRJJGfRgQtjQ\nflsTZCwDwWcZZPCrPZZWgLLjdJJQSJTQFSgQJJRt\nZcChshwZCDvlCZCsPHMHzqNzBmMfmBBMfh\nwCtZtzCnPldZSdZp\nVMspbMHspbshbPBLFsdcsLBdLs\npRrQHpNbQbrqRqJfnwfwzR\nDPPcDlPwNdNRJsccpgvwBBvqGGQtqrCjwr\nfMSVrMWmLZqHQgLggCHH\nmZZWVTbTWWfnMWrbmznfZfsPNcdsdpRcNJplbJNcNRNl\nztlNSLhplhBHwwBBMBtv\nDnVVfcGbVnGRZGgvPMpHBpCmJMDP\nGnZdZZnbdpVcQjQQFjjqrlNWlrsNrFNLLsWqSF\nbJQgDRfjDbJbRMTgSSPzPHCNhzQHHszz\nwmnwFmDcwFGvpvwGnSWPNPWzPHhhcWSCNz\nGpDtmvrdGvvBmZrLTjZRTqTjblbMfL\ngBhZmtHhhhwTJqwDFqGGqPWqDb\nrRLRVTrjCrCVdFjMbvGPPGDPvW\nLSsVdrRNRCCffCSllQNBTNgNlmhHBJ\nlCzCCDMDlzzlZtttWDnDCZPbVGLhSmSLGbSgGPgVZm\nsBcNsqTQwRQRrBgbgSbPTLVSnLmV\nwcqrjQsBBjdCzjdnCv\nZgHVtMQVVgvQjjtzdzfdFHppfmzwpz\nCsBrBLLJSrsRCvnGvfRdvF\nDbBJTJDLrJDqqqrrhJsJqVWthWlZZlZjMPZltvtMjZ\nbsHlrwlnwwQJsqmJnqsPSLzTLpPGPSgPPPWmLT\nfdvBtpMDfpCCfBcCcCBtDfFSgTMTGSTRPLgPWGzGgVgLVz\nNDcjcDZjBCdvvjdvhlbJnprjnnbhwrqn\nzRpLMMqjgMggqLDqDRVGNGdhGtvGGnvGnrznGB\nVScbcZPJZWZlZbbHSJQJGtrGvtmdBBGmdGBrdn\ncbPsZcPCcWfCZPcPQslljpDqwfqVgRLMTRjwVqLM\nQtRWhjtsbttQtnbbQvsrRBfDNdMGBLZLVVNVGNLGWd\nJwllwllJmCwzPFSJzwwTBZLDLdBBBPLZZBVTTL\nZwFSSmpwzScFSmggHQjbQvjvscQbrtnjbs\nWMLWnSHSMnHjPVMVMVVJGM\nzQzRcmttdftrtrdZZRzDtPZppphsVbjGbQbJTTsCbsjppG\ndmrDtqfzrmZtqDvdfmZmtdqzLNlgnwgWLNvwFWgWWPNFSFNN\nhvSrMwqljjBHvqhHsHshqnrZcCCpfCZZCCZZCcCfCZ\nQDVTRFWlmDnpLnnPTPCZ\nDVQVtmQRWRRGFVRWVvlwdShBvvSqvtjMdd\npnMQbbnDQMNMDQsnTplNTDvqPGHZGcvqmCqvmqZqmlqP\ndwJdBBwdJJwLJBLSRJczWmHPzqWzzHGmvPRHGG\nLrdFgSSLBsDMFFcbQb\nNSnwvSPPVNnPTLVpRvVvRnqhhQQzHhLbzlqcqHzmHHqh\nDFMMfBffgZJtFsJgwdDHGHHzzmqhhHQzDQGhcH\ndMrZMMgFfFtZJZfBWMfVPNwPpNwPVSNVjjVWpN\ndNlLSvLSdNlhphlhlWfVFFbZHqjjHHvqFZQHCQ\nBcrTcJfRMRmrcbqcQgcHVCVF\nfBzTJJRmfPPmnppdNwhllwlz\nGqfSSmPSFwSCmFBwfQfQBfGnggLrhTrJBDDnrddsJDdLTL\ncHHvVtptbzbrTQJTggnTQv\nQRVbbQWbpZbVQVGfRmwfFwmjflPP\nzzBQJmzQPPlddpJWlzzfdpfjvLvgmvFggMFGDVvLGHVFvvtM\nCCSTrCncrhcCcwhRnCqCttFDvMFvtWtVHvFhvLVv\nwCTNCSRnbnpWzlBpJspN\nPTzTPlrrfrbzmftTTrrjPMsNNFZQgQHVgMtNVFMgFF\nDpGBcpvdZhccdGJhqDBphZhdVRQVQQVsqFwMRwFgFNHMHwQQ\nSGcLGpdGnBhDJppSDZlPTTmLrmbTLTmrZL\nPzmhTqSzdDGcDhzdJDPBmJnrdVppNVVtgttMVrNnMMnV\nblbQbWLvlWffCjlGCWwsnLpnpMggnpspnsrg\nfQRbCZRfFZvZRQHRvHjmGmTFPcBmDhBGTzmGqS\nJJVJfgJfVDdfDDcpTBgdwQMQZQRZQZwmlmWwQGcm\nttzzjjzSqPzqtqzFrPvzwNwMlMRNnnwnllSmmmQG\nFCvvChhsRVhhJBdB\nrbQZdRzBFTBzZZcclntHnlfJlrNgngfS\nPPqGjpPGqpmDmDwqPDVnlNpnJfnnnglJCHlNfC\nMMhhjMwwPvZNZTvLTZdL\nZZGgVgwfQNVNLfZsPqRsVTDspTpsqs\njdjdSbmMdMBSvMgBcWpsRpTWDHWTvRPs\nhttmBMhbBBjCdzShfGzJlnQLlgGGZwww\ngLSLMCbVSGRPdTwtjtVfdt\nTpzJpFFqmzpscslBtddjlwjjDhhldhvP\nWpsTmJpHssqnHMGLnGSgbH\nRRBCpJJplCchWJJHCHCvjdpMzFzrNvVgFrrMzz\nbtLLPGSQctnZnPwwSjgZjjjNNrvMvVrrjV\ntmLPGmnbnsLLwqQPSwqGbwDfHlHWBWlCsffshDCBfWcJ\nGhDFZFGZzzbCdZbZVlfv\nbPNWSbSJSWSJPBBLLqClCltlwlNmllwvCQfC\nPgPLqgqpWcWJJcnqJccccGrjbHhDRGMDGTDbpRhbFF\nVJRffrVJvDzcRcFFbpSlQLHlvtlstbbt\nNmNqPhPqPZhsQLQwSRpH\ndWRnRdBmMBWgjCgVGjFcCDzf\nnhhQFDmVmDGhmFpgCgBpcpHqncCt\nfLLZbljhjjscCggBCLCL\nPhMRhNWddWNjfRdPRfWNfVmvQFVQzVMJJDJGrmQGrQ\nPNQtsHvZtsQgQLPsPtHZbfzRffRzMMqRqpzbfqng\njDwCmhrDlhBhBldrzJMmfFFbSfFnqpFb\njdljDrDrTBBnGVNcGcQLQLQPQL\nMjzrjZvWQRHtjQdS\nJFJlDJbcbvtRQmQbQQdf\nJqNDBVNpqCBqDBCBVDcNVBqNMWgGZTPZgCrPzzvghPwrwZgG\ngzggttLNDFztFCNWzrLttmFddSjsdJsgZVSsJjwjgbgZVG\npPPcqpnqHMpcRbhhMMpThvnwZSjZvdwZvwdZSBvGZSGVZZ\nThcPlHbbPHRnlRTHnMhpfltrNLWzCWWCztzffQLLDmDN\nSlNJRpCGTmdFFDcbqJZFFJ\nwwnWPHgsLPlVVfssLcZcjjzrDqcFzcgchZ\nWVvQHQPfLwSGSvCRlNSd\nwWnWcpWDcwHcRdJQTdmNsT\nhprqBSvZNjFdFjsq\nfSfpvhLBfltMCLzWzC\nfdPfPwPmdmLZfNWjWszQNjjN\nMBRSBBRBChMRQWhlmVWNsmzm\nFvRcSrcRrtvrRrvrrrmcwGwLnTHHqGtwZwHdGPHP\ntFPlJcDJdvLZvFlcvlHtQRthbgQjrhsgQgNr\nqCnpGMnTTVwCCMnqwWfpChQHRbrgQjsQmmfrrHgHrH\nGMnTSBnVTnBGbLlDDvFBLDbF\nrJhPGdLSWnnrdqLhPPWGjcZZffjcgNdgNgRcNfwf\nmHsDTQlsQBvWspTHzpmCTpcZgwZjZfZNRFwRjRRNMHjZ\nvCzDDQsDDvbllWTllCDCCTSLbqSPVqSnJLGSqrPLtVnP\nsSRdHHHSRhjShVHWVFJdQPNFpGCrQCCfflqlPvfN\ngLztmctMwnBtTzMppBCCrGfQlQQqBN\nbbbncfzLmmmnnZLgHZWjhsjVJjHRVSdR\nbRgwCHfgfCCttRbdRLHzzGDnDnLBhmBGzvmFZD\nrssprQlqlTQGNPcJGVsTBDmWzBnPnhWBvZZDBvDm\nMQQTJTNGNcqrNwMwwHRdRbdgbj\nsBnnsDLDBCsLTngnZLcdmppCdmpRJwJJQdMRMP\nNlrTblbNNbwRPpjjbPdJ\nGlztrhvfGqltqzWrcZgFZVSWWSTSncnL\nFLJqLFRjzFqzJddlLfNNCjPrGSHCPHNVNVSH\nTWTpngssgcPgNGPc\npGMDZpnZBMDsTTTnTsQWWZTRlbvdfZlLflZzJfdqvdRbqf\nClsJpCgsppMbFFFbHp\nPvQRPqQPvRdwLNZLZqqwGPPPNTbjMcFcfHjHcMNfBNHrcDDM\nGLRnzqzdRqwdZnLLPqqZdQGsVtsnlWCVVWsgtWSSVVhFWt\nLNLSJjQDLlzRGwTTzQfT\nWbZqchqMZqZWbmdZbhTrvPmGvwfHRHGTHRwH\ndcfChsWWZgbfWdhCbgDNFBBDjFNBjjVNpD\nHjCLsHJHCjnNVHdCnHtJdtQQgQDhFGFDLcwFDBFMMDBT\nvWrSWSbSrRqmzlWlQgRQQTcRMgMTMFwT\nbzrpWWzbqrpnZsJwZVpC\nFhlfrNdTrtFdtrrrfcZBMdpZcHHHZMcccv\nPmbjVDjwQbbjjVpDDvpzBZSSMsvG\njmbVjPVWqVmgJgjmmPPQjmqlCMlftnftnNlTTLLfNfrJtN\nPwMWzqwWbFwznqNQQhffQjJfnhfJ\nmmdpgmttDrpgpdmZdHmgNsQVZvJNMQvVJffsZVQf\npdcBrMgDgcgrrHPcFSFzzqzFFbPS\nQRJJtSfJtQtjQRnSnNssTNdgsgdwddRWcm\nqHMDhPBqbqZVzbddTcVwSmNWNVcc\nBFCZbqPbHBPMhCljvQSvGCCpnj\nHSzHNHlNHmBSHSBFrFFgBHVVqbQLTTcLtqDsDTBTDcDp\nCWQZGCWfMZGqbTbtpLsbWp\nGwjhPCRZPQPPCPwmzSNzzzmwzlzSgH\nGgTvJbpJGvPVHZZZLW\ncwWdnwmWnfwZDBHHNzZBVf\nnhjjmshdwmSjsnmwrrQrtbtbgTTgrWth\nlFBTtcnlcFlppVpttcFZVhTTDDLCHDSDCjDCMSLZDWdDDSjD\nmrfsgMfRRwwPffJfbdDdgWGLGLSDjSSWdC\nMmfNPwPzMzlhlFlplV\npRVgVsRzdDVJJJRttZTnnLrGsrGssG\nBjMvMBWmjWNWSWrLGZPTHLSLTrZr\nLLMWQjfvmljLBRVJfbChfVgJRz\nRPDsdnVrVnVzScStjpFSjV\nBTLBhMMBpSMsMjZz\nhwbBgTsbBbGrGHvGrvDnPH\nnzwgtSFRqhDphDwB\nCmWCrrmrVPGCDTbpvvvhsZDG\nVdNrlWHpmQzSMgJFdRFz\njrhZtczchvvFCTmCDlDMrMDT\nbHbLnbbwLnWQpLQgQVpQCTDqdmwqmDqCdDCSlmdd\nsgVgglblptsfFthtvR\nLctzWvrzTWsvWBfvBzdJQSdQhQQfpDJJmmDD\nlMRwjlwlLnZwLHLggQDRGphdFDJQdSdJJQ\nCjPZCVCjgPwgWqWLqzzcWsVq\nJNWHsPNsJNHBnfnnqfqswcctDTmPCRmmTRtgCdmD\nrjGrLrbhGRZVGQhphbbmDgDZMDMwdwDcCMgcDM\nzvbLvVpFvjzVhbQjGjHlnflJFlWRqBWWBJBS\nNfCMfGNdGqVDhWBvncLllhBgcmgL\nbJbRbHHtRtJtZTpSRtsLDLzvcvBmgnnnJlsm\nSbbbTRpbQHSbbwHZZTHqfCNMfqFWGNGVQMFGDC\nMdzwdMpVwVNMHQMJNcHM\nmDtcPDqWnDqgnGJvLHTJHJ\nmmjhhRBRBcdZrcdRCz\nlvldsNpNGCGgCvCGggDLMbMmrdwnjjZdLLwrjM\nHWHtPHSHPBnrmZjBbwwC\ntHqWRtfttNlDClvNqs\nBTRNQTQTTBFRTglDwzztDgCwLF\njZsMjqgdrrzzSbsDSwsw\njWZrMgMjGdvrWWvrWMfMfZTBHTHQBHBQNpQRfRHNpnRT\nGRgFCPhnBBhPwZPnwdbWMJMlcJTLLlTlRT\nVQsvVvvVNzqsscTVSLbWTStTJW\nspfDNpvsnPCfhBbh\nGhWSgWphprhQqqndQd\nMvZRjjLcCzwcLnHfdTdgfFHQ\nwCczcCgRMwRRNCtjMCtCvlBmVDGslmPpmWWNVGSpWV\nPZqgTbTZvFgZbZnFvPlBsVqsGBlGVzGsqVls\nMMhSmHHfrfrSrjMNfcjrSRBlBVzGVpVGgGVCGslGNd\nrMhQQmDSQMjMtZvPTTnJvtQg\nTNGWlqVpmPssnNssWLtRfCLbjCCwPgLjfg\nZSHvHczFBBcHhJHFvhHcSFgrCgLbfgfbwrLTtbjwLwJr\nBMzSQzcQznlNQTQsnl\nFVWDZDZHpDdtZlqZqZqljfNmsNFPjbbPbPRbFFjm\nMJSGMghngrccvSrSzMrsQbbRmjmQmjtNtbfB\nCMnvczGChCCwcgtpDDlLLLwVHdlHTZ\nfTTzbQzhDwwbCnZnpbgnHncM\nmGtBRBFmsRpVGMzpnnGL\nlFNqtdsssrRFBltSFRFlSrvfDSWWvwfhhPJPjWfQzPvf\nGWWWQlpSZzrQnjQdRHVjdjTRvddddB\nztthMtCmffcChJhChfCJdLddLBBgvqdvBBVBcgdq\nsmbsmbmChCJmJffPmhNthDtZwnFQZQGpSrGWGQGZpQZzWP\nZDzsjjFLFqsQzFsZqDzBHGtBHpmgdNGmGBtLBG\nhbbMMTcWhbwnJPlwWrnPbbVGVNndgpVVHmdNHVBmmmtf\nbCTPTclcgRZQZCgs"
    }
    let arr = input.split('\n');
    let dupes = [];
    arr.forEach((el) => {
        let d = findDupes(el);
        if (d && d.length > 0) {
            console.log("pushing into global dupes " + d );
            console.log("---")
            d.forEach((el) => {
                dupes.push(el);
            })
        }
    })

    let totalSum = calcDupes(dupes);

    let p = document.createElement('pre');
    p.textContent = totalSum;

    let doc = document.getElementById("dayThreeComponent");
    doc.append(p);
}

function getVal(x) {
    let y = x.toUpperCase();
    let offset;
    if (y === x) { // letter is uppercase
        offset = 38;
    } else { // letter is lowercase
        offset = 96;
    }
    return x.charCodeAt(0) - offset;
}

function findDupes(str) {

    let ruck = str.trim();
    let compartment_len = ruck.length / 2;

    let compartment1 = ruck.substring(0, compartment_len);
    let compartment2 = ruck.substring(compartment_len + 1);
    console.log(`(${compartment1})(${compartment2})`);

    let dupes = [];
    for (let i = 0; i < compartment_len; i++) {
        let char = compartment1.charAt(i);
        if (compartment2.indexOf(char) >= 0) {
            if (dupes.length === 0 || !dupes.includes(char)) {
                console.log("pushing line level dupe " + char);
                dupes.push(char);
            }
        }
    }

    console.log("line level dupes: " + dupes)
    if (dupes.length === 0) {
        return null;
    }
    return dupes;
}

function calcDupes(dupes) {
    let sum = 0;
    dupes.forEach((el) => {
            sum += getVal(el[0]);
        })

    return sum;
}


class DayThreeComponent extends React.Component {

    mounted = false;


    componentDidMount() {
        if (!this.mounted) {
            this.mounted = true;

            let doc = document.getElementById("dayThreeComponent");

            let dayThree_Sample = buttonFactory("Day Three: Sample");
            dayThree_Sample.addEventListener('click', () => dayThree(true, false));
            doc.append(dayThree_Sample);

            let dayThree_Input = buttonFactory("Day Three: Input");
            dayThree_Input.addEventListener('click', () => dayThree(false, false));
            doc.append(dayThree_Input);

            let dayThree_Sample_Bonus = buttonFactory("Day Three: Sample (Bonus)");
            dayThree_Sample_Bonus.addEventListener('click', () => dayThree(true, true));
            doc.append(dayThree_Sample_Bonus);


            let dayThree_Input_Bonus = buttonFactory("Day Three: Input (Bonus)");
            dayThree_Input_Bonus.addEventListener('click', () => dayThree(false, true));
            doc.append(dayThree_Input_Bonus);
        }
    }

    render() {
        return (
            <div id="dayThreeComponent"><h2>Day Three:</h2></div>
        )
    }
}

export { DayThreeComponent };
(self["webpackChunkdtale"] = self["webpackChunkdtale"] || []).push([["react-syntax-highlighter_languages_highlight_sqlMore"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/sql_more.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/sql_more.js ***!
  \***************************************************************************************************/
/***/ ((module) => {

/*
 Language: SQL More (mix of MySQL, Oracle, etc)
 Contributors: Nikolay Lisienko <info@neor.ru>, Heiko August <post@auge8472.de>, Travis Odom <travis.a.odom@gmail.com>, Vadimtro <vadimtro@yahoo.com>, Benjamin Auder <benjamin.auder@gmail.com>
 Website: https://en.wikipedia.org/wiki/SQL
 Category: database
 */

/*

This is a preservation of the old bloated SQL grammar which includes pretty much
the kitchen sink because no one was keeping track of which keywords belong to
which databases.  This is likely to be removed in the future.

- Oracle SQL should be factored into it's own 3rd party grammar.
- MySQL should be factored out into it's own 3rd party grammar.

*/

function sql_more(hljs) {
  var COMMENT_MODE = hljs.COMMENT('--', '$');
  return {
    name: 'SQL (more)',
    aliases: ["mysql", "oracle"],
    disableAutodetect: true,
    case_insensitive: true,
    illegal: /[<>{}*]/,
    contains: [
      {
        beginKeywords:
          'begin end start commit rollback savepoint lock alter create drop rename call ' +
          'delete do handler insert load replace select truncate update set show pragma grant ' +
          'merge describe use explain help declare prepare execute deallocate release ' +
          'unlock purge reset change stop analyze cache flush optimize repair kill ' +
          'install uninstall checksum restore check backup revoke comment values with',
        end: /;/, endsWithParent: true,
        keywords: {
          $pattern: /[\w\.]+/,
          keyword:
            'as abort abs absolute acc acce accep accept access accessed accessible account acos action activate add ' +
            'addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias ' +
            'all allocate allow alter always analyze ancillary and anti any anydata anydataset anyschema anytype apply ' +
            'archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan ' +
            'atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid ' +
            'authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile ' +
            'before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float ' +
            'binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound ' +
            'bucket buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel ' +
            'capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base ' +
            'char_length character_length characters characterset charindex charset charsetform charsetid check ' +
            'checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close ' +
            'cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation ' +
            'collect colu colum column column_value columns columns_updated comment commit compact compatibility ' +
            'compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn ' +
            'connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection ' +
            'consider consistent constant constraint constraints constructor container content contents context ' +
            'contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost ' +
            'count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation ' +
            'critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user ' +
            'cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add ' +
            'date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts ' +
            'day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate ' +
            'declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults ' +
            'deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank ' +
            'depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor ' +
            'deterministic diagnostics difference dimension direct_load directory disable disable_all ' +
            'disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div ' +
            'do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable ' +
            'editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt ' +
            'end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors ' +
            'escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding ' +
            'execu execut execute exempt exists exit exp expire explain explode export export_set extended extent external ' +
            'external_1 external_2 externally extract failed failed_login_attempts failover failure far fast ' +
            'feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final ' +
            'finish first first_value fixed flash_cache flashback floor flush following follows for forall force foreign ' +
            'form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ' +
            'ftp full function general generated get get_format get_lock getdate getutcdate global global_name ' +
            'globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups ' +
            'gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex ' +
            'hierarchy high high_priority hosts hour hours http id ident_current ident_incr ident_seed identified ' +
            'identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment ' +
            'index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile ' +
            'initial initialized initially initrans inmemory inner innodb input insert install instance instantiable ' +
            'instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat ' +
            'is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists ' +
            'keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lateral lax lcase ' +
            'lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit ' +
            'lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate ' +
            'locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call ' +
            'logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime ' +
            'managed management manual map mapping mask master master_pos_wait match matched materialized max ' +
            'maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans ' +
            'md5 measures median medium member memcompress memory merge microsecond mid migration min minextents ' +
            'minimum mining minus minute minutes minvalue missing mod mode model modification modify module monitoring month ' +
            'months mount move movement multiset mutex name name_const names nan national native natural nav nchar ' +
            'nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile ' +
            'nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile ' +
            'nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder ' +
            'nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck ' +
            'noswitch not nothing notice notnull notrim novalidate now nowait nth_value nullif nulls num numb numbe ' +
            'nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ' +
            'ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old ' +
            'on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date ' +
            'oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary ' +
            'out outer outfile outline output over overflow overriding package pad parallel parallel_enable ' +
            'parameters parent parse partial partition partitions pascal passing password password_grace_time ' +
            'password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex ' +
            'pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc ' +
            'performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin ' +
            'policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction ' +
            'prediction_cost prediction_details prediction_probability prediction_set prepare present preserve ' +
            'prior priority private private_sga privileges procedural procedure procedure_analyze processlist ' +
            'profiles project prompt protection public publishingservername purge quarter query quick quiesce quota ' +
            'quotename radians raise rand range rank raw read reads readsize rebuild record records ' +
            'recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh ' +
            'regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy ' +
            'reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename ' +
            'repair repeat replace replicate replication required reset resetlogs resize resource respect restore ' +
            'restricted result result_cache resumable resume retention return returning returns reuse reverse revoke ' +
            'right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows ' +
            'rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll ' +
            'sdo_georaster sdo_topo_geometry search sec_to_time second seconds section securefile security seed segment select ' +
            'self semi sequence sequential serializable server servererror session session_user sessions_per_user set ' +
            'sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor ' +
            'si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin ' +
            'size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex ' +
            'source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows ' +
            'sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone ' +
            'standby start starting startup statement static statistics stats_binomial_test stats_crosstab ' +
            'stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep ' +
            'stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev ' +
            'stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate ' +
            'subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum ' +
            'suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate ' +
            'sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tablesample tan tdo ' +
            'template temporary terminated tertiary_weights test than then thread through tier ties time time_format ' +
            'time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr ' +
            'timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking ' +
            'transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate ' +
            'try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress ' +
            'under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unnest unpivot ' +
            'unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert ' +
            'url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date ' +
            'utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var ' +
            'var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray ' +
            'verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear ' +
            'wellformed when whene whenev wheneve whenever where while whitespace window with within without work wrapped ' +
            'xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces ' +
            'xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek',
          literal:
            'true false null unknown',
          built_in:
            'array bigint binary bit blob bool boolean char character date dec decimal float int int8 integer interval number ' +
            'numeric real record serial serial8 smallint text time timestamp tinyint varchar varchar2 varying void'
        },
        contains: [
          {
            className: 'string',
            begin: '\'', end: '\'',
            contains: [{begin: '\'\''}]
          },
          {
            className: 'string',
            begin: '"', end: '"',
            contains: [{begin: '""'}]
          },
          {
            className: 'string',
            begin: '`', end: '`'
          },
          hljs.C_NUMBER_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          COMMENT_MODE,
          hljs.HASH_COMMENT_MODE
        ]
      },
      hljs.C_BLOCK_COMMENT_MODE,
      COMMENT_MODE,
      hljs.HASH_COMMENT_MODE
    ]
  };
}

module.exports = sql_more;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfc3FsTW9yZS5kdGFsZV9idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixjQUFjO0FBQ3RDLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQyxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHRhbGUvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9zcWxfbW9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIExhbmd1YWdlOiBTUUwgTW9yZSAobWl4IG9mIE15U1FMLCBPcmFjbGUsIGV0YylcbiBDb250cmlidXRvcnM6IE5pa29sYXkgTGlzaWVua28gPGluZm9AbmVvci5ydT4sIEhlaWtvIEF1Z3VzdCA8cG9zdEBhdWdlODQ3Mi5kZT4sIFRyYXZpcyBPZG9tIDx0cmF2aXMuYS5vZG9tQGdtYWlsLmNvbT4sIFZhZGltdHJvIDx2YWRpbXRyb0B5YWhvby5jb20+LCBCZW5qYW1pbiBBdWRlciA8YmVuamFtaW4uYXVkZXJAZ21haWwuY29tPlxuIFdlYnNpdGU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1NRTFxuIENhdGVnb3J5OiBkYXRhYmFzZVxuICovXG5cbi8qXG5cblRoaXMgaXMgYSBwcmVzZXJ2YXRpb24gb2YgdGhlIG9sZCBibG9hdGVkIFNRTCBncmFtbWFyIHdoaWNoIGluY2x1ZGVzIHByZXR0eSBtdWNoXG50aGUga2l0Y2hlbiBzaW5rIGJlY2F1c2Ugbm8gb25lIHdhcyBrZWVwaW5nIHRyYWNrIG9mIHdoaWNoIGtleXdvcmRzIGJlbG9uZyB0b1xud2hpY2ggZGF0YWJhc2VzLiAgVGhpcyBpcyBsaWtlbHkgdG8gYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLlxuXG4tIE9yYWNsZSBTUUwgc2hvdWxkIGJlIGZhY3RvcmVkIGludG8gaXQncyBvd24gM3JkIHBhcnR5IGdyYW1tYXIuXG4tIE15U1FMIHNob3VsZCBiZSBmYWN0b3JlZCBvdXQgaW50byBpdCdzIG93biAzcmQgcGFydHkgZ3JhbW1hci5cblxuKi9cblxuZnVuY3Rpb24gc3FsX21vcmUoaGxqcykge1xuICB2YXIgQ09NTUVOVF9NT0RFID0gaGxqcy5DT01NRU5UKCctLScsICckJyk7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1NRTCAobW9yZSknLFxuICAgIGFsaWFzZXM6IFtcIm15c3FsXCIsIFwib3JhY2xlXCJdLFxuICAgIGRpc2FibGVBdXRvZGV0ZWN0OiB0cnVlLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgaWxsZWdhbDogL1s8Pnt9Kl0vLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6XG4gICAgICAgICAgJ2JlZ2luIGVuZCBzdGFydCBjb21taXQgcm9sbGJhY2sgc2F2ZXBvaW50IGxvY2sgYWx0ZXIgY3JlYXRlIGRyb3AgcmVuYW1lIGNhbGwgJyArXG4gICAgICAgICAgJ2RlbGV0ZSBkbyBoYW5kbGVyIGluc2VydCBsb2FkIHJlcGxhY2Ugc2VsZWN0IHRydW5jYXRlIHVwZGF0ZSBzZXQgc2hvdyBwcmFnbWEgZ3JhbnQgJyArXG4gICAgICAgICAgJ21lcmdlIGRlc2NyaWJlIHVzZSBleHBsYWluIGhlbHAgZGVjbGFyZSBwcmVwYXJlIGV4ZWN1dGUgZGVhbGxvY2F0ZSByZWxlYXNlICcgK1xuICAgICAgICAgICd1bmxvY2sgcHVyZ2UgcmVzZXQgY2hhbmdlIHN0b3AgYW5hbHl6ZSBjYWNoZSBmbHVzaCBvcHRpbWl6ZSByZXBhaXIga2lsbCAnICtcbiAgICAgICAgICAnaW5zdGFsbCB1bmluc3RhbGwgY2hlY2tzdW0gcmVzdG9yZSBjaGVjayBiYWNrdXAgcmV2b2tlIGNvbW1lbnQgdmFsdWVzIHdpdGgnLFxuICAgICAgICBlbmQ6IC87LywgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgJHBhdHRlcm46IC9bXFx3XFwuXSsvLFxuICAgICAgICAgIGtleXdvcmQ6XG4gICAgICAgICAgICAnYXMgYWJvcnQgYWJzIGFic29sdXRlIGFjYyBhY2NlIGFjY2VwIGFjY2VwdCBhY2Nlc3MgYWNjZXNzZWQgYWNjZXNzaWJsZSBhY2NvdW50IGFjb3MgYWN0aW9uIGFjdGl2YXRlIGFkZCAnICtcbiAgICAgICAgICAgICdhZGR0aW1lIGFkbWluIGFkbWluaXN0ZXIgYWR2YW5jZWQgYWR2aXNlIGFlc19kZWNyeXB0IGFlc19lbmNyeXB0IGFmdGVyIGFnZW50IGFnZ3JlZ2F0ZSBhbGkgYWxpYSBhbGlhcyAnICtcbiAgICAgICAgICAgICdhbGwgYWxsb2NhdGUgYWxsb3cgYWx0ZXIgYWx3YXlzIGFuYWx5emUgYW5jaWxsYXJ5IGFuZCBhbnRpIGFueSBhbnlkYXRhIGFueWRhdGFzZXQgYW55c2NoZW1hIGFueXR5cGUgYXBwbHkgJyArXG4gICAgICAgICAgICAnYXJjaGl2ZSBhcmNoaXZlZCBhcmNoaXZlbG9nIGFyZSBhcyBhc2MgYXNjaWkgYXNpbiBhc3NlbWJseSBhc3NlcnRpb24gYXNzb2NpYXRlIGFzeW5jaHJvbm91cyBhdCBhdGFuICcgK1xuICAgICAgICAgICAgJ2F0bjIgYXR0ciBhdHRyaSBhdHRyaWIgYXR0cmlidSBhdHRyaWJ1dCBhdHRyaWJ1dGUgYXR0cmlidXRlcyBhdWRpdCBhdXRoZW50aWNhdGVkIGF1dGhlbnRpY2F0aW9uIGF1dGhpZCAnICtcbiAgICAgICAgICAgICdhdXRob3JzIGF1dG8gYXV0b2FsbG9jYXRlIGF1dG9kYmxpbmsgYXV0b2V4dGVuZCBhdXRvbWF0aWMgYXZhaWxhYmlsaXR5IGF2ZyBiYWNrdXAgYmFkZmlsZSBiYXNpY2ZpbGUgJyArXG4gICAgICAgICAgICAnYmVmb3JlIGJlZ2luIGJlZ2lubmluZyBiZW5jaG1hcmsgYmV0d2VlbiBiZmlsZSBiZmlsZV9iYXNlIGJpZyBiaWdmaWxlIGJpbiBiaW5hcnlfZG91YmxlIGJpbmFyeV9mbG9hdCAnICtcbiAgICAgICAgICAgICdiaW5sb2cgYml0X2FuZCBiaXRfY291bnQgYml0X2xlbmd0aCBiaXRfb3IgYml0X3hvciBiaXRtYXAgYmxvYl9iYXNlIGJsb2NrIGJsb2Nrc2l6ZSBib2R5IGJvdGggYm91bmQgJyArXG4gICAgICAgICAgICAnYnVja2V0IGJ1ZmZlcl9jYWNoZSBidWZmZXJfcG9vbCBidWlsZCBidWxrIGJ5IGJ5dGUgYnl0ZW9yZGVybWFyayBieXRlcyBjYWNoZSBjYWNoaW5nIGNhbGwgY2FsbGluZyBjYW5jZWwgJyArXG4gICAgICAgICAgICAnY2FwYWNpdHkgY2FzY2FkZSBjYXNjYWRlZCBjYXNlIGNhc3QgY2F0YWxvZyBjYXRlZ29yeSBjZWlsIGNlaWxpbmcgY2hhaW4gY2hhbmdlIGNoYW5nZWQgY2hhcl9iYXNlICcgK1xuICAgICAgICAgICAgJ2NoYXJfbGVuZ3RoIGNoYXJhY3Rlcl9sZW5ndGggY2hhcmFjdGVycyBjaGFyYWN0ZXJzZXQgY2hhcmluZGV4IGNoYXJzZXQgY2hhcnNldGZvcm0gY2hhcnNldGlkIGNoZWNrICcgK1xuICAgICAgICAgICAgJ2NoZWNrc3VtIGNoZWNrc3VtX2FnZyBjaGlsZCBjaG9vc2UgY2hyIGNodW5rIGNsYXNzIGNsZWFudXAgY2xlYXIgY2xpZW50IGNsb2IgY2xvYl9iYXNlIGNsb25lIGNsb3NlICcgK1xuICAgICAgICAgICAgJ2NsdXN0ZXJfaWQgY2x1c3Rlcl9wcm9iYWJpbGl0eSBjbHVzdGVyX3NldCBjbHVzdGVyaW5nIGNvYWxlc2NlIGNvZXJjaWJpbGl0eSBjb2wgY29sbGF0ZSBjb2xsYXRpb24gJyArXG4gICAgICAgICAgICAnY29sbGVjdCBjb2x1IGNvbHVtIGNvbHVtbiBjb2x1bW5fdmFsdWUgY29sdW1ucyBjb2x1bW5zX3VwZGF0ZWQgY29tbWVudCBjb21taXQgY29tcGFjdCBjb21wYXRpYmlsaXR5ICcgK1xuICAgICAgICAgICAgJ2NvbXBpbGVkIGNvbXBsZXRlIGNvbXBvc2l0ZV9saW1pdCBjb21wb3VuZCBjb21wcmVzcyBjb21wdXRlIGNvbmNhdCBjb25jYXRfd3MgY29uY3VycmVudCBjb25maXJtIGNvbm4gJyArXG4gICAgICAgICAgICAnY29ubmVjIGNvbm5lY3QgY29ubmVjdF9ieV9pc2N5Y2xlIGNvbm5lY3RfYnlfaXNsZWFmIGNvbm5lY3RfYnlfcm9vdCBjb25uZWN0X3RpbWUgY29ubmVjdGlvbiAnICtcbiAgICAgICAgICAgICdjb25zaWRlciBjb25zaXN0ZW50IGNvbnN0YW50IGNvbnN0cmFpbnQgY29uc3RyYWludHMgY29uc3RydWN0b3IgY29udGFpbmVyIGNvbnRlbnQgY29udGVudHMgY29udGV4dCAnICtcbiAgICAgICAgICAgICdjb250cmlidXRvcnMgY29udHJvbGZpbGUgY29udiBjb252ZXJ0IGNvbnZlcnRfdHogY29yciBjb3JyX2sgY29ycl9zIGNvcnJlc3BvbmRpbmcgY29ycnVwdGlvbiBjb3MgY29zdCAnICtcbiAgICAgICAgICAgICdjb3VudCBjb3VudF9iaWcgY291bnRlZCBjb3Zhcl9wb3AgY292YXJfc2FtcCBjcHVfcGVyX2NhbGwgY3B1X3Blcl9zZXNzaW9uIGNyYzMyIGNyZWF0ZSBjcmVhdGlvbiAnICtcbiAgICAgICAgICAgICdjcml0aWNhbCBjcm9zcyBjdWJlIGN1bWVfZGlzdCBjdXJkYXRlIGN1cnJlbnQgY3VycmVudF9kYXRlIGN1cnJlbnRfdGltZSBjdXJyZW50X3RpbWVzdGFtcCBjdXJyZW50X3VzZXIgJyArXG4gICAgICAgICAgICAnY3Vyc29yIGN1cnRpbWUgY3VzdG9tZGF0dW0gY3ljbGUgZGF0YSBkYXRhYmFzZSBkYXRhYmFzZXMgZGF0YWZpbGUgZGF0YWZpbGVzIGRhdGFsZW5ndGggZGF0ZV9hZGQgJyArXG4gICAgICAgICAgICAnZGF0ZV9jYWNoZSBkYXRlX2Zvcm1hdCBkYXRlX3N1YiBkYXRlYWRkIGRhdGVkaWZmIGRhdGVmcm9tcGFydHMgZGF0ZW5hbWUgZGF0ZXBhcnQgZGF0ZXRpbWUyZnJvbXBhcnRzICcgK1xuICAgICAgICAgICAgJ2RheSBkYXlfdG9fc2Vjb25kIGRheW5hbWUgZGF5b2Ztb250aCBkYXlvZndlZWsgZGF5b2Z5ZWFyIGRheXMgZGJfcm9sZV9jaGFuZ2UgZGJ0aW1lem9uZSBkZGwgZGVhbGxvY2F0ZSAnICtcbiAgICAgICAgICAgICdkZWNsYXJlIGRlY29kZSBkZWNvbXBvc2UgZGVjcmVtZW50IGRlY3J5cHQgZGVkdXBsaWNhdGUgZGVmIGRlZmEgZGVmYXUgZGVmYXVsIGRlZmF1bHQgZGVmYXVsdHMgJyArXG4gICAgICAgICAgICAnZGVmZXJyZWQgZGVmaSBkZWZpbiBkZWZpbmUgZGVncmVlcyBkZWxheWVkIGRlbGVnYXRlIGRlbGV0ZSBkZWxldGVfYWxsIGRlbGltaXRlZCBkZW1hbmQgZGVuc2VfcmFuayAnICtcbiAgICAgICAgICAgICdkZXB0aCBkZXF1ZXVlIGRlc19kZWNyeXB0IGRlc19lbmNyeXB0IGRlc19rZXlfZmlsZSBkZXNjIGRlc2NyIGRlc2NyaSBkZXNjcmliIGRlc2NyaWJlIGRlc2NyaXB0b3IgJyArXG4gICAgICAgICAgICAnZGV0ZXJtaW5pc3RpYyBkaWFnbm9zdGljcyBkaWZmZXJlbmNlIGRpbWVuc2lvbiBkaXJlY3RfbG9hZCBkaXJlY3RvcnkgZGlzYWJsZSBkaXNhYmxlX2FsbCAnICtcbiAgICAgICAgICAgICdkaXNhbGxvdyBkaXNhc3NvY2lhdGUgZGlzY2FyZGZpbGUgZGlzY29ubmVjdCBkaXNrZ3JvdXAgZGlzdGluY3QgZGlzdGluY3Ryb3cgZGlzdHJpYnV0ZSBkaXN0cmlidXRlZCBkaXYgJyArXG4gICAgICAgICAgICAnZG8gZG9jdW1lbnQgZG9tYWluIGRvdG5ldCBkb3VibGUgZG93bmdyYWRlIGRyb3AgZHVtcGZpbGUgZHVwbGljYXRlIGR1cmF0aW9uIGVhY2ggZWRpdGlvbiBlZGl0aW9uYWJsZSAnICtcbiAgICAgICAgICAgICdlZGl0aW9ucyBlbGVtZW50IGVsbGlwc2lzIGVsc2UgZWxzaWYgZWx0IGVtcHR5IGVuYWJsZSBlbmFibGVfYWxsIGVuY2xvc2VkIGVuY29kZSBlbmNvZGluZyBlbmNyeXB0ICcgK1xuICAgICAgICAgICAgJ2VuZCBlbmQtZXhlYyBlbmRpYW4gZW5mb3JjZWQgZW5naW5lIGVuZ2luZXMgZW5xdWV1ZSBlbnRlcnByaXNlIGVudGl0eWVzY2FwaW5nIGVvbW9udGggZXJyb3IgZXJyb3JzICcgK1xuICAgICAgICAgICAgJ2VzY2FwZWQgZXZhbG5hbWUgZXZhbHVhdGUgZXZlbnQgZXZlbnRkYXRhIGV2ZW50cyBleGNlcHQgZXhjZXB0aW9uIGV4Y2VwdGlvbnMgZXhjaGFuZ2UgZXhjbHVkZSBleGNsdWRpbmcgJyArXG4gICAgICAgICAgICAnZXhlY3UgZXhlY3V0IGV4ZWN1dGUgZXhlbXB0IGV4aXN0cyBleGl0IGV4cCBleHBpcmUgZXhwbGFpbiBleHBsb2RlIGV4cG9ydCBleHBvcnRfc2V0IGV4dGVuZGVkIGV4dGVudCBleHRlcm5hbCAnICtcbiAgICAgICAgICAgICdleHRlcm5hbF8xIGV4dGVybmFsXzIgZXh0ZXJuYWxseSBleHRyYWN0IGZhaWxlZCBmYWlsZWRfbG9naW5fYXR0ZW1wdHMgZmFpbG92ZXIgZmFpbHVyZSBmYXIgZmFzdCAnICtcbiAgICAgICAgICAgICdmZWF0dXJlX3NldCBmZWF0dXJlX3ZhbHVlIGZldGNoIGZpZWxkIGZpZWxkcyBmaWxlIGZpbGVfbmFtZV9jb252ZXJ0IGZpbGVzeXN0ZW1fbGlrZV9sb2dnaW5nIGZpbmFsICcgK1xuICAgICAgICAgICAgJ2ZpbmlzaCBmaXJzdCBmaXJzdF92YWx1ZSBmaXhlZCBmbGFzaF9jYWNoZSBmbGFzaGJhY2sgZmxvb3IgZmx1c2ggZm9sbG93aW5nIGZvbGxvd3MgZm9yIGZvcmFsbCBmb3JjZSBmb3JlaWduICcgK1xuICAgICAgICAgICAgJ2Zvcm0gZm9ybWEgZm9ybWF0IGZvdW5kIGZvdW5kX3Jvd3MgZnJlZWxpc3QgZnJlZWxpc3RzIGZyZWVwb29scyBmcmVzaCBmcm9tIGZyb21fYmFzZTY0IGZyb21fZGF5cyAnICtcbiAgICAgICAgICAgICdmdHAgZnVsbCBmdW5jdGlvbiBnZW5lcmFsIGdlbmVyYXRlZCBnZXQgZ2V0X2Zvcm1hdCBnZXRfbG9jayBnZXRkYXRlIGdldHV0Y2RhdGUgZ2xvYmFsIGdsb2JhbF9uYW1lICcgK1xuICAgICAgICAgICAgJ2dsb2JhbGx5IGdvIGdvdG8gZ3JhbnQgZ3JhbnRzIGdyZWF0ZXN0IGdyb3VwIGdyb3VwX2NvbmNhdCBncm91cF9pZCBncm91cGluZyBncm91cGluZ19pZCBncm91cHMgJyArXG4gICAgICAgICAgICAnZ3RpZF9zdWJ0cmFjdCBndWFyYW50ZWUgZ3VhcmQgaGFuZGxlciBoYXNoIGhhc2hrZXlzIGhhdmluZyBoZWEgaGVhZCBoZWFkaSBoZWFkaW4gaGVhZGluZyBoZWFwIGhlbHAgaGV4ICcgK1xuICAgICAgICAgICAgJ2hpZXJhcmNoeSBoaWdoIGhpZ2hfcHJpb3JpdHkgaG9zdHMgaG91ciBob3VycyBodHRwIGlkIGlkZW50X2N1cnJlbnQgaWRlbnRfaW5jciBpZGVudF9zZWVkIGlkZW50aWZpZWQgJyArXG4gICAgICAgICAgICAnaWRlbnRpdHkgaWRsZV90aW1lIGlmIGlmbnVsbCBpZ25vcmUgaWlmIGlsaWtlIGlsbSBpbW1lZGlhdGUgaW1wb3J0IGluIGluY2x1ZGUgaW5jbHVkaW5nIGluY3JlbWVudCAnICtcbiAgICAgICAgICAgICdpbmRleCBpbmRleGVzIGluZGV4aW5nIGluZGV4dHlwZSBpbmRpY2F0b3IgaW5kaWNlcyBpbmV0Nl9hdG9uIGluZXQ2X250b2EgaW5ldF9hdG9uIGluZXRfbnRvYSBpbmZpbGUgJyArXG4gICAgICAgICAgICAnaW5pdGlhbCBpbml0aWFsaXplZCBpbml0aWFsbHkgaW5pdHJhbnMgaW5tZW1vcnkgaW5uZXIgaW5ub2RiIGlucHV0IGluc2VydCBpbnN0YWxsIGluc3RhbmNlIGluc3RhbnRpYWJsZSAnICtcbiAgICAgICAgICAgICdpbnN0ciBpbnRlcmZhY2UgaW50ZXJsZWF2ZWQgaW50ZXJzZWN0IGludG8gaW52YWxpZGF0ZSBpbnZpc2libGUgaXMgaXNfZnJlZV9sb2NrIGlzX2lwdjQgaXNfaXB2NF9jb21wYXQgJyArXG4gICAgICAgICAgICAnaXNfbm90IGlzX25vdF9udWxsIGlzX3VzZWRfbG9jayBpc2RhdGUgaXNudWxsIGlzb2xhdGlvbiBpdGVyYXRlIGphdmEgam9pbiBqc29uIGpzb25fZXhpc3RzICcgK1xuICAgICAgICAgICAgJ2tlZXAga2VlcF9kdXBsaWNhdGVzIGtleSBrZXlzIGtpbGwgbGFuZ3VhZ2UgbGFyZ2UgbGFzdCBsYXN0X2RheSBsYXN0X2luc2VydF9pZCBsYXN0X3ZhbHVlIGxhdGVyYWwgbGF4IGxjYXNlICcgK1xuICAgICAgICAgICAgJ2xlYWQgbGVhZGluZyBsZWFzdCBsZWF2ZXMgbGVmdCBsZW4gbGVuZ2h0IGxlbmd0aCBsZXNzIGxldmVsIGxldmVscyBsaWJyYXJ5IGxpa2UgbGlrZTIgbGlrZTQgbGlrZWMgbGltaXQgJyArXG4gICAgICAgICAgICAnbGluZXMgbGluayBsaXN0IGxpc3RhZ2cgbGl0dGxlIGxuIGxvYWQgbG9hZF9maWxlIGxvYiBsb2JzIGxvY2FsIGxvY2FsdGltZSBsb2NhbHRpbWVzdGFtcCBsb2NhdGUgJyArXG4gICAgICAgICAgICAnbG9jYXRvciBsb2NrIGxvY2tlZCBsb2cgbG9nMTAgbG9nMiBsb2dmaWxlIGxvZ2ZpbGVzIGxvZ2dpbmcgbG9naWNhbCBsb2dpY2FsX3JlYWRzX3Blcl9jYWxsICcgK1xuICAgICAgICAgICAgJ2xvZ29mZiBsb2dvbiBsb2dzIGxvbmcgbG9vcCBsb3cgbG93X3ByaW9yaXR5IGxvd2VyIGxwYWQgbHJ0cmltIGx0cmltIG1haW4gbWFrZV9zZXQgbWFrZWRhdGUgbWFrZXRpbWUgJyArXG4gICAgICAgICAgICAnbWFuYWdlZCBtYW5hZ2VtZW50IG1hbnVhbCBtYXAgbWFwcGluZyBtYXNrIG1hc3RlciBtYXN0ZXJfcG9zX3dhaXQgbWF0Y2ggbWF0Y2hlZCBtYXRlcmlhbGl6ZWQgbWF4ICcgK1xuICAgICAgICAgICAgJ21heGV4dGVudHMgbWF4aW1pemUgbWF4aW5zdGFuY2VzIG1heGxlbiBtYXhsb2dmaWxlcyBtYXhsb2doaXN0b3J5IG1heGxvZ21lbWJlcnMgbWF4c2l6ZSBtYXh0cmFucyAnICtcbiAgICAgICAgICAgICdtZDUgbWVhc3VyZXMgbWVkaWFuIG1lZGl1bSBtZW1iZXIgbWVtY29tcHJlc3MgbWVtb3J5IG1lcmdlIG1pY3Jvc2Vjb25kIG1pZCBtaWdyYXRpb24gbWluIG1pbmV4dGVudHMgJyArXG4gICAgICAgICAgICAnbWluaW11bSBtaW5pbmcgbWludXMgbWludXRlIG1pbnV0ZXMgbWludmFsdWUgbWlzc2luZyBtb2QgbW9kZSBtb2RlbCBtb2RpZmljYXRpb24gbW9kaWZ5IG1vZHVsZSBtb25pdG9yaW5nIG1vbnRoICcgK1xuICAgICAgICAgICAgJ21vbnRocyBtb3VudCBtb3ZlIG1vdmVtZW50IG11bHRpc2V0IG11dGV4IG5hbWUgbmFtZV9jb25zdCBuYW1lcyBuYW4gbmF0aW9uYWwgbmF0aXZlIG5hdHVyYWwgbmF2IG5jaGFyICcgK1xuICAgICAgICAgICAgJ25jbG9iIG5lc3RlZCBuZXZlciBuZXcgbmV3bGluZSBuZXh0IG5leHR2YWwgbm8gbm9fd3JpdGVfdG9fYmlubG9nIG5vYXJjaGl2ZWxvZyBub2F1ZGl0IG5vYmFkZmlsZSAnICtcbiAgICAgICAgICAgICdub2NoZWNrIG5vY29tcHJlc3Mgbm9jb3B5IG5vY3ljbGUgbm9kZWxheSBub2Rpc2NhcmRmaWxlIG5vZW50aXR5ZXNjYXBpbmcgbm9ndWFyYW50ZWUgbm9rZWVwIG5vbG9nZmlsZSAnICtcbiAgICAgICAgICAgICdub21hcHBpbmcgbm9tYXh2YWx1ZSBub21pbmltaXplIG5vbWludmFsdWUgbm9tb25pdG9yaW5nIG5vbmUgbm9uZWRpdGlvbmFibGUgbm9uc2NoZW1hIG5vb3JkZXIgJyArXG4gICAgICAgICAgICAnbm9wciBub3BybyBub3Byb20gbm9wcm9tcCBub3Byb21wdCBub3JlbHkgbm9yZXNldGxvZ3Mgbm9yZXZlcnNlIG5vcm1hbCBub3Jvd2RlcGVuZGVuY2llcyBub3NjaGVtYWNoZWNrICcgK1xuICAgICAgICAgICAgJ25vc3dpdGNoIG5vdCBub3RoaW5nIG5vdGljZSBub3RudWxsIG5vdHJpbSBub3ZhbGlkYXRlIG5vdyBub3dhaXQgbnRoX3ZhbHVlIG51bGxpZiBudWxscyBudW0gbnVtYiBudW1iZSAnICtcbiAgICAgICAgICAgICdudmFyY2hhciBudmFyY2hhcjIgb2JqZWN0IG9jaWNvbGwgb2NpZGF0ZSBvY2lkYXRldGltZSBvY2lkdXJhdGlvbiBvY2lpbnRlcnZhbCBvY2lsb2Jsb2NhdG9yIG9jaW51bWJlciAnICtcbiAgICAgICAgICAgICdvY2lyZWYgb2NpcmVmY3Vyc29yIG9jaXJvd2lkIG9jaXN0cmluZyBvY2l0eXBlIG9jdCBvY3RldF9sZW5ndGggb2Ygb2ZmIG9mZmxpbmUgb2Zmc2V0IG9pZCBvaWRpbmRleCBvbGQgJyArXG4gICAgICAgICAgICAnb24gb25saW5lIG9ubHkgb3BhcXVlIG9wZW4gb3BlcmF0aW9ucyBvcGVyYXRvciBvcHRpbWFsIG9wdGltaXplIG9wdGlvbiBvcHRpb25hbGx5IG9yIG9yYWNsZSBvcmFjbGVfZGF0ZSAnICtcbiAgICAgICAgICAgICdvcmFkYXRhIG9yZCBvcmRhdWRpbyBvcmRkaWNvbSBvcmRkb2Mgb3JkZXIgb3JkaW1hZ2Ugb3JkaW5hbGl0eSBvcmR2aWRlbyBvcmdhbml6YXRpb24gb3JsYW55IG9ybHZhcnkgJyArXG4gICAgICAgICAgICAnb3V0IG91dGVyIG91dGZpbGUgb3V0bGluZSBvdXRwdXQgb3ZlciBvdmVyZmxvdyBvdmVycmlkaW5nIHBhY2thZ2UgcGFkIHBhcmFsbGVsIHBhcmFsbGVsX2VuYWJsZSAnICtcbiAgICAgICAgICAgICdwYXJhbWV0ZXJzIHBhcmVudCBwYXJzZSBwYXJ0aWFsIHBhcnRpdGlvbiBwYXJ0aXRpb25zIHBhc2NhbCBwYXNzaW5nIHBhc3N3b3JkIHBhc3N3b3JkX2dyYWNlX3RpbWUgJyArXG4gICAgICAgICAgICAncGFzc3dvcmRfbG9ja190aW1lIHBhc3N3b3JkX3JldXNlX21heCBwYXNzd29yZF9yZXVzZV90aW1lIHBhc3N3b3JkX3ZlcmlmeV9mdW5jdGlvbiBwYXRjaCBwYXRoIHBhdGluZGV4ICcgK1xuICAgICAgICAgICAgJ3BjdGluY3JlYXNlIHBjdHRocmVzaG9sZCBwY3R1c2VkIHBjdHZlcnNpb24gcGVyY2VudCBwZXJjZW50X3JhbmsgcGVyY2VudGlsZV9jb250IHBlcmNlbnRpbGVfZGlzYyAnICtcbiAgICAgICAgICAgICdwZXJmb3JtYW5jZSBwZXJpb2QgcGVyaW9kX2FkZCBwZXJpb2RfZGlmZiBwZXJtYW5lbnQgcGh5c2ljYWwgcGkgcGlwZSBwaXBlbGluZWQgcGl2b3QgcGx1Z2dhYmxlIHBsdWdpbiAnICtcbiAgICAgICAgICAgICdwb2xpY3kgcG9zaXRpb24gcG9zdF90cmFuc2FjdGlvbiBwb3cgcG93ZXIgcHJhZ21hIHByZWJ1aWx0IHByZWNlZGVzIHByZWNlZGluZyBwcmVjaXNpb24gcHJlZGljdGlvbiAnICtcbiAgICAgICAgICAgICdwcmVkaWN0aW9uX2Nvc3QgcHJlZGljdGlvbl9kZXRhaWxzIHByZWRpY3Rpb25fcHJvYmFiaWxpdHkgcHJlZGljdGlvbl9zZXQgcHJlcGFyZSBwcmVzZW50IHByZXNlcnZlICcgK1xuICAgICAgICAgICAgJ3ByaW9yIHByaW9yaXR5IHByaXZhdGUgcHJpdmF0ZV9zZ2EgcHJpdmlsZWdlcyBwcm9jZWR1cmFsIHByb2NlZHVyZSBwcm9jZWR1cmVfYW5hbHl6ZSBwcm9jZXNzbGlzdCAnICtcbiAgICAgICAgICAgICdwcm9maWxlcyBwcm9qZWN0IHByb21wdCBwcm90ZWN0aW9uIHB1YmxpYyBwdWJsaXNoaW5nc2VydmVybmFtZSBwdXJnZSBxdWFydGVyIHF1ZXJ5IHF1aWNrIHF1aWVzY2UgcXVvdGEgJyArXG4gICAgICAgICAgICAncXVvdGVuYW1lIHJhZGlhbnMgcmFpc2UgcmFuZCByYW5nZSByYW5rIHJhdyByZWFkIHJlYWRzIHJlYWRzaXplIHJlYnVpbGQgcmVjb3JkIHJlY29yZHMgJyArXG4gICAgICAgICAgICAncmVjb3ZlciByZWNvdmVyeSByZWN1cnNpdmUgcmVjeWNsZSByZWRvIHJlZHVjZWQgcmVmIHJlZmVyZW5jZSByZWZlcmVuY2VkIHJlZmVyZW5jZXMgcmVmZXJlbmNpbmcgcmVmcmVzaCAnICtcbiAgICAgICAgICAgICdyZWdleHBfbGlrZSByZWdpc3RlciByZWdyX2F2Z3ggcmVncl9hdmd5IHJlZ3JfY291bnQgcmVncl9pbnRlcmNlcHQgcmVncl9yMiByZWdyX3Nsb3BlIHJlZ3Jfc3h4IHJlZ3Jfc3h5ICcgK1xuICAgICAgICAgICAgJ3JlamVjdCByZWtleSByZWxhdGlvbmFsIHJlbGF0aXZlIHJlbGF5bG9nIHJlbGVhc2UgcmVsZWFzZV9sb2NrIHJlbGllc19vbiByZWxvY2F0ZSByZWx5IHJlbSByZW1haW5kZXIgcmVuYW1lICcgK1xuICAgICAgICAgICAgJ3JlcGFpciByZXBlYXQgcmVwbGFjZSByZXBsaWNhdGUgcmVwbGljYXRpb24gcmVxdWlyZWQgcmVzZXQgcmVzZXRsb2dzIHJlc2l6ZSByZXNvdXJjZSByZXNwZWN0IHJlc3RvcmUgJyArXG4gICAgICAgICAgICAncmVzdHJpY3RlZCByZXN1bHQgcmVzdWx0X2NhY2hlIHJlc3VtYWJsZSByZXN1bWUgcmV0ZW50aW9uIHJldHVybiByZXR1cm5pbmcgcmV0dXJucyByZXVzZSByZXZlcnNlIHJldm9rZSAnICtcbiAgICAgICAgICAgICdyaWdodCBybGlrZSByb2xlIHJvbGVzIHJvbGxiYWNrIHJvbGxpbmcgcm9sbHVwIHJvdW5kIHJvdyByb3dfY291bnQgcm93ZGVwZW5kZW5jaWVzIHJvd2lkIHJvd251bSByb3dzICcgK1xuICAgICAgICAgICAgJ3J0cmltIHJ1bGVzIHNhZmUgc2FsdCBzYW1wbGUgc2F2ZSBzYXZlcG9pbnQgc2IxIHNiMiBzYjQgc2NhbiBzY2hlbWEgc2NoZW1hY2hlY2sgc2NuIHNjb3BlIHNjcm9sbCAnICtcbiAgICAgICAgICAgICdzZG9fZ2VvcmFzdGVyIHNkb190b3BvX2dlb21ldHJ5IHNlYXJjaCBzZWNfdG9fdGltZSBzZWNvbmQgc2Vjb25kcyBzZWN0aW9uIHNlY3VyZWZpbGUgc2VjdXJpdHkgc2VlZCBzZWdtZW50IHNlbGVjdCAnICtcbiAgICAgICAgICAgICdzZWxmIHNlbWkgc2VxdWVuY2Ugc2VxdWVudGlhbCBzZXJpYWxpemFibGUgc2VydmVyIHNlcnZlcmVycm9yIHNlc3Npb24gc2Vzc2lvbl91c2VyIHNlc3Npb25zX3Blcl91c2VyIHNldCAnICtcbiAgICAgICAgICAgICdzZXRzIHNldHRpbmdzIHNoYSBzaGExIHNoYTIgc2hhcmUgc2hhcmVkIHNoYXJlZF9wb29sIHNob3J0IHNob3cgc2hyaW5rIHNodXRkb3duIHNpX2F2ZXJhZ2Vjb2xvciAnICtcbiAgICAgICAgICAgICdzaV9jb2xvcmhpc3RvZ3JhbSBzaV9mZWF0dXJlbGlzdCBzaV9wb3NpdGlvbmFsY29sb3Igc2lfc3RpbGxpbWFnZSBzaV90ZXh0dXJlIHNpYmxpbmdzIHNpZCBzaWduIHNpbiAnICtcbiAgICAgICAgICAgICdzaXplIHNpemVfdCBzaXplcyBza2lwIHNsYXZlIHNsZWVwIHNtYWxsZGF0ZXRpbWVmcm9tcGFydHMgc21hbGxmaWxlIHNuYXBzaG90IHNvbWUgc29uYW1lIHNvcnQgc291bmRleCAnICtcbiAgICAgICAgICAgICdzb3VyY2Ugc3BhY2Ugc3BhcnNlIHNwZmlsZSBzcGxpdCBzcWwgc3FsX2JpZ19yZXN1bHQgc3FsX2J1ZmZlcl9yZXN1bHQgc3FsX2NhY2hlIHNxbF9jYWxjX2ZvdW5kX3Jvd3MgJyArXG4gICAgICAgICAgICAnc3FsX3NtYWxsX3Jlc3VsdCBzcWxfdmFyaWFudF9wcm9wZXJ0eSBzcWxjb2RlIHNxbGRhdGEgc3FsZXJyb3Igc3FsbmFtZSBzcWxzdGF0ZSBzcXJ0IHNxdWFyZSBzdGFuZGFsb25lICcgK1xuICAgICAgICAgICAgJ3N0YW5kYnkgc3RhcnQgc3RhcnRpbmcgc3RhcnR1cCBzdGF0ZW1lbnQgc3RhdGljIHN0YXRpc3RpY3Mgc3RhdHNfYmlub21pYWxfdGVzdCBzdGF0c19jcm9zc3RhYiAnICtcbiAgICAgICAgICAgICdzdGF0c19rc190ZXN0IHN0YXRzX21vZGUgc3RhdHNfbXdfdGVzdCBzdGF0c19vbmVfd2F5X2Fub3ZhIHN0YXRzX3RfdGVzdF8gc3RhdHNfdF90ZXN0X2luZGVwICcgK1xuICAgICAgICAgICAgJ3N0YXRzX3RfdGVzdF9vbmUgc3RhdHNfdF90ZXN0X3BhaXJlZCBzdGF0c193c3JfdGVzdCBzdGF0dXMgc3RkIHN0ZGRldiBzdGRkZXZfcG9wIHN0ZGRldl9zYW1wIHN0ZGV2ICcgK1xuICAgICAgICAgICAgJ3N0b3Agc3RvcmFnZSBzdG9yZSBzdG9yZWQgc3RyIHN0cl90b19kYXRlIHN0cmFpZ2h0X2pvaW4gc3RyY21wIHN0cmljdCBzdHJpbmcgc3RydWN0IHN0dWZmIHN0eWxlIHN1YmRhdGUgJyArXG4gICAgICAgICAgICAnc3VicGFydGl0aW9uIHN1YnBhcnRpdGlvbnMgc3Vic3RpdHV0YWJsZSBzdWJzdHIgc3Vic3RyaW5nIHN1YnRpbWUgc3VidHJpbmdfaW5kZXggc3VidHlwZSBzdWNjZXNzIHN1bSAnICtcbiAgICAgICAgICAgICdzdXNwZW5kIHN3aXRjaCBzd2l0Y2hvZmZzZXQgc3dpdGNob3ZlciBzeW5jIHN5bmNocm9ub3VzIHN5bm9ueW0gc3lzIHN5c194bWxhZ2cgc3lzYXNtIHN5c2F1eCBzeXNkYXRlICcgK1xuICAgICAgICAgICAgJ3N5c2RhdGV0aW1lb2Zmc2V0IHN5c2RiYSBzeXNvcGVyIHN5c3RlbSBzeXN0ZW1fdXNlciBzeXN1dGNkYXRldGltZSB0YWJsZSB0YWJsZXMgdGFibGVzcGFjZSB0YWJsZXNhbXBsZSB0YW4gdGRvICcgK1xuICAgICAgICAgICAgJ3RlbXBsYXRlIHRlbXBvcmFyeSB0ZXJtaW5hdGVkIHRlcnRpYXJ5X3dlaWdodHMgdGVzdCB0aGFuIHRoZW4gdGhyZWFkIHRocm91Z2ggdGllciB0aWVzIHRpbWUgdGltZV9mb3JtYXQgJyArXG4gICAgICAgICAgICAndGltZV96b25lIHRpbWVkaWZmIHRpbWVmcm9tcGFydHMgdGltZW91dCB0aW1lc3RhbXAgdGltZXN0YW1wYWRkIHRpbWVzdGFtcGRpZmYgdGltZXpvbmVfYWJiciAnICtcbiAgICAgICAgICAgICd0aW1lem9uZV9taW51dGUgdGltZXpvbmVfcmVnaW9uIHRvIHRvX2Jhc2U2NCB0b19kYXRlIHRvX2RheXMgdG9fc2Vjb25kcyB0b2RhdGV0aW1lb2Zmc2V0IHRyYWNlIHRyYWNraW5nICcgK1xuICAgICAgICAgICAgJ3RyYW5zYWN0aW9uIHRyYW5zYWN0aW9uYWwgdHJhbnNsYXRlIHRyYW5zbGF0aW9uIHRyZWF0IHRyaWdnZXIgdHJpZ2dlcl9uZXN0bGV2ZWwgdHJpZ2dlcnMgdHJpbSB0cnVuY2F0ZSAnICtcbiAgICAgICAgICAgICd0cnlfY2FzdCB0cnlfY29udmVydCB0cnlfcGFyc2UgdHlwZSB1YjEgdWIyIHViNCB1Y2FzZSB1bmFyY2hpdmVkIHVuYm91bmRlZCB1bmNvbXByZXNzICcgK1xuICAgICAgICAgICAgJ3VuZGVyIHVuZG8gdW5oZXggdW5pY29kZSB1bmlmb3JtIHVuaW5zdGFsbCB1bmlvbiB1bmlxdWUgdW5peF90aW1lc3RhbXAgdW5rbm93biB1bmxpbWl0ZWQgdW5sb2NrIHVubmVzdCB1bnBpdm90ICcgK1xuICAgICAgICAgICAgJ3VucmVjb3ZlcmFibGUgdW5zYWZlIHVuc2lnbmVkIHVudGlsIHVudHJ1c3RlZCB1bnVzYWJsZSB1bnVzZWQgdXBkYXRlIHVwZGF0ZWQgdXBncmFkZSB1cHBlZCB1cHBlciB1cHNlcnQgJyArXG4gICAgICAgICAgICAndXJsIHVyb3dpZCB1c2FibGUgdXNhZ2UgdXNlIHVzZV9zdG9yZWRfb3V0bGluZXMgdXNlciB1c2VyX2RhdGEgdXNlcl9yZXNvdXJjZXMgdXNlcnMgdXNpbmcgdXRjX2RhdGUgJyArXG4gICAgICAgICAgICAndXRjX3RpbWVzdGFtcCB1dWlkIHV1aWRfc2hvcnQgdmFsaWRhdGUgdmFsaWRhdGVfcGFzc3dvcmRfc3RyZW5ndGggdmFsaWRhdGlvbiB2YWxpc3QgdmFsdWUgdmFsdWVzIHZhciAnICtcbiAgICAgICAgICAgICd2YXJfc2FtcCB2YXJjaGFyYyB2YXJpIHZhcmlhIHZhcmlhYiB2YXJpYWJsIHZhcmlhYmxlIHZhcmlhYmxlcyB2YXJpYW5jZSB2YXJwIHZhcnJhdyB2YXJyYXdjIHZhcnJheSAnICtcbiAgICAgICAgICAgICd2ZXJpZnkgdmVyc2lvbiB2ZXJzaW9ucyB2aWV3IHZpcnR1YWwgdmlzaWJsZSB2b2lkIHdhaXQgd2FsbGV0IHdhcm5pbmcgd2FybmluZ3Mgd2VlayB3ZWVrZGF5IHdlZWtvZnllYXIgJyArXG4gICAgICAgICAgICAnd2VsbGZvcm1lZCB3aGVuIHdoZW5lIHdoZW5ldiB3aGVuZXZlIHdoZW5ldmVyIHdoZXJlIHdoaWxlIHdoaXRlc3BhY2Ugd2luZG93IHdpdGggd2l0aGluIHdpdGhvdXQgd29yayB3cmFwcGVkICcgK1xuICAgICAgICAgICAgJ3hkYiB4bWwgeG1sYWdnIHhtbGF0dHJpYnV0ZXMgeG1sY2FzdCB4bWxjb2xhdHR2YWwgeG1sZWxlbWVudCB4bWxleGlzdHMgeG1sZm9yZXN0IHhtbGluZGV4IHhtbG5hbWVzcGFjZXMgJyArXG4gICAgICAgICAgICAneG1scGkgeG1scXVlcnkgeG1scm9vdCB4bWxzY2hlbWEgeG1sc2VyaWFsaXplIHhtbHRhYmxlIHhtbHR5cGUgeG9yIHllYXIgeWVhcl90b19tb250aCB5ZWFycyB5ZWFyd2VlaycsXG4gICAgICAgICAgbGl0ZXJhbDpcbiAgICAgICAgICAgICd0cnVlIGZhbHNlIG51bGwgdW5rbm93bicsXG4gICAgICAgICAgYnVpbHRfaW46XG4gICAgICAgICAgICAnYXJyYXkgYmlnaW50IGJpbmFyeSBiaXQgYmxvYiBib29sIGJvb2xlYW4gY2hhciBjaGFyYWN0ZXIgZGF0ZSBkZWMgZGVjaW1hbCBmbG9hdCBpbnQgaW50OCBpbnRlZ2VyIGludGVydmFsIG51bWJlciAnICtcbiAgICAgICAgICAgICdudW1lcmljIHJlYWwgcmVjb3JkIHNlcmlhbCBzZXJpYWw4IHNtYWxsaW50IHRleHQgdGltZSB0aW1lc3RhbXAgdGlueWludCB2YXJjaGFyIHZhcmNoYXIyIHZhcnlpbmcgdm9pZCdcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgYmVnaW46ICdcXCcnLCBlbmQ6ICdcXCcnLFxuICAgICAgICAgICAgY29udGFpbnM6IFt7YmVnaW46ICdcXCdcXCcnfV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICBiZWdpbjogJ1wiJywgZW5kOiAnXCInLFxuICAgICAgICAgICAgY29udGFpbnM6IFt7YmVnaW46ICdcIlwiJ31dXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgYmVnaW46ICdgJywgZW5kOiAnYCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIENPTU1FTlRfTU9ERSxcbiAgICAgICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzcWxfbW9yZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
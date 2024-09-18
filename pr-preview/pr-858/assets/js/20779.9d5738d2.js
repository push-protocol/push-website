"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[20779],{

/***/ 420779:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index)
});

// EXTERNAL MODULE: ./node_modules/@web3-onboard/core/dist/index-323aef78.js + 10 modules
var index_323aef78 = __webpack_require__(332461);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/filter.js
var filter = __webpack_require__(416126);
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/skip.js

function skip(count) {
    return (0,filter/* filter */.p)(function (_, index) { return count <= index; });
}
//# sourceMappingURL=skip.js.map
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(331635);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/Subscription.js + 1 modules
var Subscription = __webpack_require__(79390);
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/Action.js


var Action = (function (_super) {
    (0,tslib_es6.__extends)(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription/* Subscription */.yU));

//# sourceMappingURL=Action.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js

var intervalProvider = {
    setInterval: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = intervalProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
            return delegate.setInterval.apply(delegate, (0,tslib_es6.__spreadArray)([handler, timeout], (0,tslib_es6.__read)(args)));
        }
        return setInterval.apply(void 0, (0,tslib_es6.__spreadArray)([handler, timeout], (0,tslib_es6.__read)(args)));
    },
    clearInterval: function (handle) {
        var delegate = intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=intervalProvider.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
var arrRemove = __webpack_require__(106174);
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js




var AsyncAction = (function (_super) {
    (0,tslib_es6.__extends)(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        var _a;
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, _id, delay) {
        if (delay === void 0) { delay = 0; }
        return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (_scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay != null && this.delay === delay && this.pending === false) {
            return id;
        }
        if (id != null) {
            intervalProvider.clearInterval(id);
        }
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, _delay) {
        var errored = false;
        var errorValue;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = e ? e : new Error('Scheduled action threw falsy error');
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype.unsubscribe = function () {
        if (!this.closed) {
            var _a = this, id = _a.id, scheduler = _a.scheduler;
            var actions = scheduler.actions;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            (0,arrRemove/* arrRemove */.o)(actions, this);
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
            _super.prototype.unsubscribe.call(this);
        }
    };
    return AsyncAction;
}(Action));

//# sourceMappingURL=AsyncAction.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
var dateTimestampProvider = __webpack_require__(631179);
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Scheduler.js

var Scheduler = (function () {
    function Scheduler(schedulerActionCtor, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler.now = dateTimestampProvider/* dateTimestampProvider */.U.now;
    return Scheduler;
}());

//# sourceMappingURL=Scheduler.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js


var AsyncScheduler = (function (_super) {
    (0,tslib_es6.__extends)(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        return _this;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this._active) {
            actions.push(action);
            return;
        }
        var error;
        this._active = true;
        do {
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        } while ((action = actions.shift()));
        this._active = false;
        if (error) {
            while ((action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler));

//# sourceMappingURL=AsyncScheduler.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/async.js


var asyncScheduler = new AsyncScheduler(AsyncAction);
var async_async = (/* unused pure expression or super */ null && (asyncScheduler));
//# sourceMappingURL=async.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/lift.js
var lift = __webpack_require__(292908);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
var OperatorSubscriber = __webpack_require__(864878);
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js



function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = asyncScheduler; }
    return (0,lift/* operate */.N)(function (source, subscriber) {
        var activeTask = null;
        var lastValue = null;
        var lastTime = null;
        var emit = function () {
            if (activeTask) {
                activeTask.unsubscribe();
                activeTask = null;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        function emitWhenIdle() {
            var targetTime = lastTime + dueTime;
            var now = scheduler.now();
            if (now < targetTime) {
                activeTask = this.schedule(undefined, targetTime - now);
                subscriber.add(activeTask);
                return;
            }
            emit();
        }
        source.subscribe((0,OperatorSubscriber/* createOperatorSubscriber */._)(subscriber, function (value) {
            lastValue = value;
            lastTime = scheduler.now();
            if (!activeTask) {
                activeTask = scheduler.schedule(emitWhenIdle, dueTime);
                subscriber.add(activeTask);
            }
        }, function () {
            emit();
            subscriber.complete();
        }, undefined, function () {
            lastValue = activeTask = null;
        }));
    });
}
//# sourceMappingURL=debounceTime.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js
var distinctUntilChanged = __webpack_require__(541900);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/startWith.js + 2 modules
var startWith = __webpack_require__(1576);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js + 1 modules
var shareReplay = __webpack_require__(588965);
// EXTERNAL MODULE: ./node_modules/svelte-i18n/dist/runtime.esm.js + 14 modules
var runtime_esm = __webpack_require__(444663);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js
var BehaviorSubject = __webpack_require__(949426);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js
var mergeAll = __webpack_require__(493031);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
var innerFrom = __webpack_require__(215964);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/empty.js
var empty = __webpack_require__(161701);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/args.js + 1 modules
var util_args = __webpack_require__(744847);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/from.js + 9 modules
var from = __webpack_require__(28400);
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/merge.js





function merge() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = (0,util_args/* popScheduler */.lI)(args);
    var concurrent = (0,util_args/* popNumber */.R0)(args, Infinity);
    var sources = args;
    return !sources.length
        ?
            empty/* EMPTY */.w
        : sources.length === 1
            ?
                (0,innerFrom/* innerFrom */.Tg)(sources[0])
            :
                (0,mergeAll/* mergeAll */.U)(concurrent)((0,from/* from */.H)(sources, scheduler));
}
//# sourceMappingURL=merge.js.map
// EXTERNAL MODULE: ./node_modules/@web3-onboard/common/dist/index.js + 8 modules
var dist = __webpack_require__(552012);
// EXTERNAL MODULE: ./node_modules/bowser/es5.js
var es5 = __webpack_require__(146880);
// EXTERNAL MODULE: ./node_modules/lodash.partition/index.js
var lodash_partition = __webpack_require__(363064);
// EXTERNAL MODULE: ./node_modules/svelte/store/index.mjs + 1 modules
var store = __webpack_require__(619390);
// EXTERNAL MODULE: ./node_modules/joi/dist/joi-browser.min.js
var joi_browser_min = __webpack_require__(16075);
// EXTERNAL MODULE: ./node_modules/lodash.merge/index.js
var lodash_merge = __webpack_require__(470182);
// EXTERNAL MODULE: ./node_modules/eventemitter3/index.js
var eventemitter3 = __webpack_require__(430228);
;// CONCATENATED MODULE: ./node_modules/@web3-onboard/core/dist/Index-a4a1058e.js














var caretIcon = `<svg width="100%" height="24" viewBox="0 5 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 10L12 15L17 10H7Z" fill="currentColor"/></svg>`;

var warningIcon = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" fill="currentColor"/>
  </svg>
`;

/* src/views/shared/NetworkSelector.svelte generated by Svelte v3.59.2 */

function add_css$8(target) {
	(0,index_323aef78.a)(target, "svelte-1uqued6", "select.svelte-1uqued6{border:none;background-image:none;background-color:transparent;-webkit-appearance:none;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;appearance:none;font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));transition:width 250ms ease-in-out;background-repeat:no-repeat, repeat;background-position:right 0px top 0px, 0 0;scrollbar-width:none;-ms-overflow-style:none;padding:0 14px 0 0;white-space:nowrap;text-overflow:ellipsis}select.minimized_ac.svelte-1uqued6{min-width:80px;max-width:80px}select.maximized_ac.svelte-1uqued6{width:auto !important}select.svelte-1uqued6:focus{outline:none}span.switching-placeholder.svelte-1uqued6{font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));min-width:80px;max-width:80px;padding:0 8px 0 4px}");
}

function get_each_context$3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[15] = list[i];
	return child_ctx;
}

// (92:0) {#if wallet}
function create_if_block$5(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*$switching$*/ ctx[7]) return create_if_block_1$4;
		return create_else_block$2;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = (0,index_323aef78.e)();
		},
		m(target, anchor) {
			if_block.m(target, anchor);
			(0,index_323aef78.b)(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		d(detaching) {
			if_block.d(detaching);
			if (detaching) (0,index_323aef78.d)(if_block_anchor);
		}
	};
}

// (101:2) {:else}
function create_else_block$2(ctx) {
	let select;
	let show_if = !(0,index_323aef78.h)(/*wallet*/ ctx[6].chains[0], /*chains*/ ctx[2]);
	let if_block_anchor;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let select_class_value;
	let select_value_value;
	let select_style_value;
	let mounted;
	let dispose;
	let if_block = show_if && create_if_block_2$4(ctx);
	let each_value = /*chains*/ ctx[2];
	const get_key = ctx => /*chain*/ ctx[15].id;

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context$3(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block$3(key, child_ctx));
	}

	return {
		c() {
			select = (0,index_323aef78.j)("select");
			if (if_block) if_block.c();
			if_block_anchor = (0,index_323aef78.e)();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			(0,index_323aef78.k)(select, "class", select_class_value = "" + ((0,index_323aef78.l)(`flex justify-center items-center pointer ${/*parentCSSId*/ ctx[4]}`) + " svelte-1uqued6"));

			(0,index_323aef78.k)(select, "style", select_style_value = `
        color: var(${/*colorVar*/ ctx[1]},
        var(--account-center-network-selector-color, var(--gray-500)));
        background-image: url('data:image/svg+xml;utf8,${/*selectIcon*/ ctx[0]}'); ${/*bold*/ ctx[3] ? 'font-weight: 600;' : ''}`);
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, select, anchor);
			if (if_block) if_block.m(select, null);
			(0,index_323aef78.m)(select, if_block_anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(select, null);
				}
			}

			(0,index_323aef78.o)(select, /*wallet*/ ctx[6].chains[0].id);
			/*select_binding*/ ctx[13](select);

			if (!mounted) {
				dispose = (0,index_323aef78.p)(select, "change", /*handleSelect*/ ctx[10]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*wallet, chains*/ 68) show_if = !(0,index_323aef78.h)(/*wallet*/ ctx[6].chains[0], /*chains*/ ctx[2]);

			if (show_if) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_2$4(ctx);
					if_block.c();
					if_block.m(select, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*chains, chainIdToLabel*/ 4) {
				each_value = /*chains*/ ctx[2];
				each_blocks = (0,index_323aef78.u)(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, select, index_323aef78.q, create_each_block$3, null, get_each_context$3);
			}

			if (dirty & /*parentCSSId*/ 16 && select_class_value !== (select_class_value = "" + ((0,index_323aef78.l)(`flex justify-center items-center pointer ${/*parentCSSId*/ ctx[4]}`) + " svelte-1uqued6"))) {
				(0,index_323aef78.k)(select, "class", select_class_value);
			}

			if (dirty & /*wallet*/ 64 && select_value_value !== (select_value_value = /*wallet*/ ctx[6].chains[0].id)) {
				(0,index_323aef78.o)(select, /*wallet*/ ctx[6].chains[0].id);
			}

			if (dirty & /*colorVar, selectIcon, bold*/ 11 && select_style_value !== (select_style_value = `
        color: var(${/*colorVar*/ ctx[1]},
        var(--account-center-network-selector-color, var(--gray-500)));
        background-image: url('data:image/svg+xml;utf8,${/*selectIcon*/ ctx[0]}'); ${/*bold*/ ctx[3] ? 'font-weight: 600;' : ''}`)) {
				(0,index_323aef78.k)(select, "style", select_style_value);
			}
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(select);
			if (if_block) if_block.d();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}

			/*select_binding*/ ctx[13](null);
			mounted = false;
			dispose();
		}
	};
}

// (93:2) {#if $switching$}
function create_if_block_1$4(ctx) {
	let span;
	let t;
	let span_class_value;
	let span_style_value;

	return {
		c() {
			span = (0,index_323aef78.j)("span");
			t = (0,index_323aef78.t)("switching...");
			(0,index_323aef78.k)(span, "class", span_class_value = "" + ((0,index_323aef78.l)(`switching-placeholder ${/*parentCSSId*/ ctx[4]}`) + " svelte-1uqued6"));

			(0,index_323aef78.k)(span, "style", span_style_value = `
        color: var(${/*colorVar*/ ctx[1]},
        var(--account-center-network-selector-color, var(--gray-500)));
      `);
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, span, anchor);
			(0,index_323aef78.m)(span, t);
		},
		p(ctx, dirty) {
			if (dirty & /*parentCSSId*/ 16 && span_class_value !== (span_class_value = "" + ((0,index_323aef78.l)(`switching-placeholder ${/*parentCSSId*/ ctx[4]}`) + " svelte-1uqued6"))) {
				(0,index_323aef78.k)(span, "class", span_class_value);
			}

			if (dirty & /*colorVar*/ 2 && span_style_value !== (span_style_value = `
        color: var(${/*colorVar*/ ctx[1]},
        var(--account-center-network-selector-color, var(--gray-500)));
      `)) {
				(0,index_323aef78.k)(span, "style", span_style_value);
			}
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(span);
		}
	};
}

// (114:6) {#if !connectedToValidAppChain(wallet.chains[0], chains)}
function create_if_block_2$4(ctx) {
	let option;
	let t_value = (index_323aef78.r[/*wallet*/ ctx[6].chains[0].id] || 'unrecognized') + "";
	let t;
	let option_value_value;

	return {
		c() {
			option = (0,index_323aef78.j)("option");
			t = (0,index_323aef78.t)(t_value);
			option.__value = option_value_value = /*wallet*/ ctx[6].chains[0].id;
			option.value = option.__value;
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, option, anchor);
			(0,index_323aef78.m)(option, t);
		},
		p(ctx, dirty) {
			if (dirty & /*wallet*/ 64 && t_value !== (t_value = (index_323aef78.r[/*wallet*/ ctx[6].chains[0].id] || 'unrecognized') + "")) (0,index_323aef78.v)(t, t_value);

			if (dirty & /*wallet*/ 64 && option_value_value !== (option_value_value = /*wallet*/ ctx[6].chains[0].id)) {
				option.__value = option_value_value;
				option.value = option.__value;
			}
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(option);
		}
	};
}

// (119:6) {#each chains as chain (chain.id)}
function create_each_block$3(key_1, ctx) {
	let option;
	let t_value = (/*chain*/ ctx[15].label || index_323aef78.r[/*chain*/ ctx[15].id] || /*chain*/ ctx[15].id) + "";
	let t;
	let option_value_value;

	return {
		key: key_1,
		first: null,
		c() {
			option = (0,index_323aef78.j)("option");
			t = (0,index_323aef78.t)(t_value);
			option.__value = option_value_value = /*chain*/ ctx[15].id;
			option.value = option.__value;
			this.first = option;
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, option, anchor);
			(0,index_323aef78.m)(option, t);
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*chains*/ 4 && t_value !== (t_value = (/*chain*/ ctx[15].label || index_323aef78.r[/*chain*/ ctx[15].id] || /*chain*/ ctx[15].id) + "")) (0,index_323aef78.v)(t, t_value);

			if (dirty & /*chains*/ 4 && option_value_value !== (option_value_value = /*chain*/ ctx[15].id)) {
				option.__value = option_value_value;
				option.value = option.__value;
			}
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(option);
		}
	};
}

function create_fragment$8(ctx) {
	let if_block_anchor;
	let if_block = /*wallet*/ ctx[6] && create_if_block$5(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = (0,index_323aef78.e)();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			(0,index_323aef78.b)(target, if_block_anchor, anchor);
		},
		p(ctx, [dirty]) {
			if (/*wallet*/ ctx[6]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block$5(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: index_323aef78.n,
		o: index_323aef78.n,
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) (0,index_323aef78.d)(if_block_anchor);
		}
	};
}

function instance$8($$self, $$props, $$invalidate) {
	let wallet;
	let $resize$;
	let $wallets$;
	let $switching$;
	(0,index_323aef78.c)($$self, index_323aef78.w, $$value => $$invalidate(12, $wallets$ = $$value));
	let { selectIcon = caretIcon } = $$props;
	let { colorVar } = $$props;
	let { chains } = $$props;
	let { bold = false } = $$props;
	let { parentCSSId = '' } = $$props;
	const switching$ = new BehaviorSubject/* BehaviorSubject */.t(false);
	(0,index_323aef78.c)($$self, switching$, value => $$invalidate(7, $switching$ = value));
	let selectElement;

	const resize$ = merge(index_323aef78.w, switching$.pipe(skip(1))).pipe(debounceTime(50), (0,distinctUntilChanged/* distinctUntilChanged */.F)((prev, next) => typeof prev === 'boolean' || typeof next === 'boolean'
	? false
	: prev[0] && next[0] && prev[0].chains[0].id === next[0].chains[0].id));

	(0,index_323aef78.c)($$self, resize$, value => $$invalidate(11, $resize$ = value));

	async function handleSelect() {
		const selectedChain = selectElement.selectedOptions[0].value;

		if (selectedChain !== wallet.chains[0].id) {
			switching$.next(true);

			await (0,index_323aef78.f)({
				chainId: selectedChain,
				chainNamespace: 'evm',
				wallet: wallet.label
			});

			switching$.next(false);
		}
	}

	function resizeSelect() {
		if (!selectElement) return;
		let tempOption = document.createElement('option');
		tempOption.textContent = selectElement.selectedOptions[0].textContent;
		let tempSelect = document.createElement('select');
		tempSelect.style.visibility = 'hidden';
		tempSelect.style.position = 'fixed';
		tempSelect.appendChild(tempOption);
		selectElement.after(tempSelect);
		$$invalidate(5, selectElement.style.width = `${tempSelect.clientWidth - 22}px`, selectElement);
		tempSelect.remove();
	}

	function select_binding($$value) {
		index_323aef78.g[$$value ? 'unshift' : 'push'](() => {
			selectElement = $$value;
			$$invalidate(5, selectElement);
			$$invalidate(2, chains);
			($$invalidate(6, wallet), $$invalidate(12, $wallets$));
		});
	}

	$$self.$$set = $$props => {
		if ('selectIcon' in $$props) $$invalidate(0, selectIcon = $$props.selectIcon);
		if ('colorVar' in $$props) $$invalidate(1, colorVar = $$props.colorVar);
		if ('chains' in $$props) $$invalidate(2, chains = $$props.chains);
		if ('bold' in $$props) $$invalidate(3, bold = $$props.bold);
		if ('parentCSSId' in $$props) $$invalidate(4, parentCSSId = $$props.parentCSSId);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$wallets$*/ 4096) {
			$$invalidate(6, [wallet] = $wallets$, wallet);
		}

		if ($$self.$$.dirty & /*$resize$*/ 2048) {
			if ($resize$) {
				resizeSelect();
			}
		}
	};

	return [
		selectIcon,
		colorVar,
		chains,
		bold,
		parentCSSId,
		selectElement,
		wallet,
		$switching$,
		switching$,
		resize$,
		handleSelect,
		$resize$,
		$wallets$,
		select_binding
	];
}

class NetworkSelector extends index_323aef78.S {
	constructor(options) {
		super();

		(0,index_323aef78.i)(
			this,
			options,
			instance$8,
			create_fragment$8,
			index_323aef78.s,
			{
				selectIcon: 0,
				colorVar: 1,
				chains: 2,
				bold: 3,
				parentCSSId: 4
			},
			add_css$8
		);
	}
}

var elipsisIcon = `
  <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="currentColor"/>
  </svg>
`;

/* src/views/account-center/WalletRow.svelte generated by Svelte v3.59.2 */

function add_css$7(target) {
	(0,index_323aef78.a)(target, "svelte-hb2n95", ".container.svelte-hb2n95.svelte-hb2n95{display:flex;align-items:center;gap:0.5rem;cursor:pointer;position:relative;z-index:0;width:100%;padding:0.25rem;margin-bottom:0.25rem;border-radius:12px;transition:background-color 150ms ease-in-out}.container.svelte-hb2n95.svelte-hb2n95::before{content:'';display:block;position:absolute;top:0;bottom:0;left:0;right:0;height:100%;width:100%;background:var(--action-color);border-radius:12px;z-index:-1;opacity:0}.container.svelte-hb2n95.svelte-hb2n95:hover::before{opacity:0.2}.container.svelte-hb2n95:hover .balance.svelte-hb2n95,.container.svelte-hb2n95:hover .elipsis-container.svelte-hb2n95{opacity:1}.container.svelte-hb2n95:hover .balance.svelte-hb2n95{color:var(--account-center-maximized-balance-color, inherit)}.container.primary.svelte-hb2n95.svelte-hb2n95:hover{background-color:var(\n      --account-center-maximized-account-section-background-hover\n    )}.account-details.svelte-hb2n95.svelte-hb2n95{flex:1 1;display:flex;gap:inherit;overflow:hidden}.address-domain.svelte-hb2n95.svelte-hb2n95{flex:1 0 auto;max-width:70%;white-space:nowrap;font-weight:600;color:var(--account-center-maximized-address-color, inherit);overflow:scroll;scrollbar-width:none;-ms-overflow-style:none}.address-domain.svelte-hb2n95.svelte-hb2n95::-webkit-scrollbar{display:none}.balance.svelte-hb2n95.svelte-hb2n95{flex:1 1 auto;max-width:70%;white-space:nowrap;text-align:end;opacity:0.4;transition:color 150ms ease-in-out, background-color 150ms ease-in-out;overflow:scroll;scrollbar-width:none;-ms-overflow-style:none}.balance.svelte-hb2n95.svelte-hb2n95::-webkit-scrollbar{display:none}.elipsis-container.svelte-hb2n95.svelte-hb2n95{flex:0;padding:0.25rem;border-radius:24px;transition:color 150ms ease-in-out, background-color 150ms ease-in-out;background-color:transparent;opacity:0.4}.elipsis-container.svelte-hb2n95.svelte-hb2n95:hover{color:var(--text-color)}.elipsis-container.active.svelte-hb2n95.svelte-hb2n95{color:var(--text-color)}.elipsis.svelte-hb2n95.svelte-hb2n95{width:24px}.menu.svelte-hb2n95.svelte-hb2n95{background:var(--onboard-white, var(--white));border:1px solid var(--onboard-gray-100, var(--gray-100));border-radius:8px;list-style-type:none;right:0.25rem;top:2.25rem;margin:0;padding:0;border:none;overflow:hidden;z-index:1}.menu.svelte-hb2n95 li.svelte-hb2n95{color:var(--onboard-primary-500, var(--primary-500));font-size:var(--onboard-font-size-5, var(--font-size-5));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));padding:12px 16px;background:var(--onboard-white, var(--white));transition:background-color 150ms ease-in-out;cursor:pointer}.menu.svelte-hb2n95 li.svelte-hb2n95:hover{background:var(--onboard-primary-200, var(--primary-200))}");
}

function get_each_context$2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[14] = list[i].address;
	child_ctx[15] = list[i].ens;
	child_ctx[16] = list[i].uns;
	child_ctx[17] = list[i].balance;
	child_ctx[19] = i;
	return child_ctx;
}

// (203:8) {#if primary && i === 0}
function create_if_block_3$1(ctx) {
	let div;
	let successstatusicon;
	let current;
	successstatusicon = new index_323aef78.R({ props: { size: 14 } });

	return {
		c() {
			div = (0,index_323aef78.j)("div");
			(0,index_323aef78.F)(successstatusicon.$$.fragment);
			(0,index_323aef78.T)(div, "right", "-5px");
			(0,index_323aef78.T)(div, "bottom", "-5px");
			(0,index_323aef78.k)(div, "class", "drop-shadow absolute");
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, div, anchor);
			(0,index_323aef78.I)(successstatusicon, div, null);
			current = true;
		},
		i(local) {
			if (current) return;
			(0,index_323aef78.x)(successstatusicon.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,index_323aef78.A)(successstatusicon.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(div);
			(0,index_323aef78.K)(successstatusicon);
		}
	};
}

// (221:8) {#if balance}
function create_if_block_2$3(ctx) {
	let div;
	let t_value = formatBalance(/*balance*/ ctx[17]) + "";
	let t;
	let div_intro;

	return {
		c() {
			div = (0,index_323aef78.j)("div");
			t = (0,index_323aef78.t)(t_value);
			(0,index_323aef78.k)(div, "class", "balance svelte-hb2n95");
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, div, anchor);
			(0,index_323aef78.m)(div, t);
		},
		p(ctx, dirty) {
			if (dirty & /*wallet*/ 1 && t_value !== (t_value = formatBalance(/*balance*/ ctx[17]) + "")) (0,index_323aef78.v)(t, t_value);
		},
		i(local) {
			if (local) {
				if (!div_intro) {
					(0,index_323aef78.U)(() => {
						div_intro = (0,index_323aef78.V)(div, index_323aef78.X, {});
						div_intro.start();
					});
				}
			}
		},
		o: index_323aef78.n,
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(div);
		}
	};
}

// (240:4) {#if showMenu === address}
function create_if_block$4(ctx) {
	let ul;
	let li0;

	let t0_value = /*$_*/ ctx[4]('accountCenter.addAccount', {
		default: /*en*/ ctx[2].accountCenter.addAccount
	}) + "";

	let t0;
	let t1;
	let t2;
	let li1;

	let t3_value = /*$_*/ ctx[4]('accountCenter.disconnectWallet', {
		default: /*en*/ ctx[2].accountCenter.disconnectWallet
	}) + "";

	let t3;
	let t4;
	let li2;
	let t5_value = /*en*/ ctx[2].accountCenter.copyAddress + "";
	let t5;
	let ul_intro;
	let mounted;
	let dispose;
	let if_block = !(/*primary*/ ctx[1] && /*i*/ ctx[19] === 0) && create_if_block_1$3(ctx);

	function click_handler_5() {
		return /*click_handler_5*/ ctx[13](/*ens*/ ctx[15], /*uns*/ ctx[16], /*address*/ ctx[14]);
	}

	return {
		c() {
			ul = (0,index_323aef78.j)("ul");
			li0 = (0,index_323aef78.j)("li");
			t0 = (0,index_323aef78.t)(t0_value);
			t1 = (0,index_323aef78.G)();
			if (if_block) if_block.c();
			t2 = (0,index_323aef78.G)();
			li1 = (0,index_323aef78.j)("li");
			t3 = (0,index_323aef78.t)(t3_value);
			t4 = (0,index_323aef78.G)();
			li2 = (0,index_323aef78.j)("li");
			t5 = (0,index_323aef78.t)(t5_value);
			(0,index_323aef78.k)(li0, "class", "svelte-hb2n95");
			(0,index_323aef78.k)(li1, "class", "svelte-hb2n95");
			(0,index_323aef78.k)(li2, "class", "svelte-hb2n95");
			(0,index_323aef78.k)(ul, "class", "menu absolute svelte-hb2n95");
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, ul, anchor);
			(0,index_323aef78.m)(ul, li0);
			(0,index_323aef78.m)(li0, t0);
			(0,index_323aef78.m)(ul, t1);
			if (if_block) if_block.m(ul, null);
			(0,index_323aef78.m)(ul, t2);
			(0,index_323aef78.m)(ul, li1);
			(0,index_323aef78.m)(li1, t3);
			(0,index_323aef78.m)(ul, t4);
			(0,index_323aef78.m)(ul, li2);
			(0,index_323aef78.m)(li2, t5);

			if (!mounted) {
				dispose = [
					(0,index_323aef78.p)(li0, "click", (0,index_323aef78.J)(/*click_handler_2*/ ctx[10])),
					(0,index_323aef78.p)(li1, "click", (0,index_323aef78.J)(/*click_handler_4*/ ctx[12])),
					(0,index_323aef78.p)(li2, "click", (0,index_323aef78.J)(click_handler_5))
				];

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty & /*$_, en*/ 20 && t0_value !== (t0_value = /*$_*/ ctx[4]('accountCenter.addAccount', {
				default: /*en*/ ctx[2].accountCenter.addAccount
			}) + "")) (0,index_323aef78.v)(t0, t0_value);

			if (!(/*primary*/ ctx[1] && /*i*/ ctx[19] === 0)) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_1$3(ctx);
					if_block.c();
					if_block.m(ul, t2);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*$_, en*/ 20 && t3_value !== (t3_value = /*$_*/ ctx[4]('accountCenter.disconnectWallet', {
				default: /*en*/ ctx[2].accountCenter.disconnectWallet
			}) + "")) (0,index_323aef78.v)(t3, t3_value);

			if (dirty & /*en*/ 4 && t5_value !== (t5_value = /*en*/ ctx[2].accountCenter.copyAddress + "")) (0,index_323aef78.v)(t5, t5_value);
		},
		i(local) {
			if (local) {
				if (!ul_intro) {
					(0,index_323aef78.U)(() => {
						ul_intro = (0,index_323aef78.V)(ul, index_323aef78.X, {});
						ul_intro.start();
					});
				}
			}
		},
		o: index_323aef78.n,
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(ul);
			if (if_block) if_block.d();
			mounted = false;
			(0,index_323aef78.L)(dispose);
		}
	};
}

// (252:8) {#if !(primary && i === 0)}
function create_if_block_1$3(ctx) {
	let li;

	let t_value = /*$_*/ ctx[4]('accountCenter.setPrimaryAccount', {
		default: /*en*/ ctx[2].accountCenter.setPrimaryAccount
	}) + "";

	let t;
	let mounted;
	let dispose;

	function click_handler_3() {
		return /*click_handler_3*/ ctx[11](/*address*/ ctx[14]);
	}

	return {
		c() {
			li = (0,index_323aef78.j)("li");
			t = (0,index_323aef78.t)(t_value);
			(0,index_323aef78.k)(li, "class", "svelte-hb2n95");
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, li, anchor);
			(0,index_323aef78.m)(li, t);

			if (!mounted) {
				dispose = (0,index_323aef78.p)(li, "click", (0,index_323aef78.J)(click_handler_3));
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty & /*$_, en*/ 20 && t_value !== (t_value = /*$_*/ ctx[4]('accountCenter.setPrimaryAccount', {
				default: /*en*/ ctx[2].accountCenter.setPrimaryAccount
			}) + "")) (0,index_323aef78.v)(t, t_value);
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(li);
			mounted = false;
			dispose();
		}
	};
}

// (182:0) {#each wallet.accounts as { address, ens, uns, balance }
function create_each_block$2(ctx) {
	let div6;
	let div5;
	let div0;
	let walletappbadge;
	let t0;
	let t1;
	let div2;
	let div1;

	let t2_value = (/*ens*/ ctx[15]
	? (0,index_323aef78.D)(/*ens*/ ctx[15].name)
	: /*uns*/ ctx[16]
		? (0,index_323aef78.D)(/*uns*/ ctx[16].name)
		: (0,index_323aef78.E)(/*address*/ ctx[14])) + "";

	let t2;
	let t3;
	let t4;
	let div4;
	let div3;
	let t5;
	let t6;
	let current;
	let mounted;
	let dispose;

	walletappbadge = new index_323aef78.W({
			props: {
				size: 32,
				padding: 4,
				background: "custom",
				color: "#EFF1FC",
				customBackgroundColor: /*primary*/ ctx[1] && /*i*/ ctx[19] === 0
				? 'rgba(24, 206, 102, 0.2)'
				: 'rgba(235, 235, 237, 0.1)',
				border: /*primary*/ ctx[1] && /*i*/ ctx[19] === 0
				? 'green'
				: 'gray',
				radius: 8,
				icon: /*wallet*/ ctx[0].icon
			}
		});

	let if_block0 = /*primary*/ ctx[1] && /*i*/ ctx[19] === 0 && create_if_block_3$1();
	let if_block1 = /*balance*/ ctx[17] && create_if_block_2$3(ctx);

	function click_handler() {
		return /*click_handler*/ ctx[8](/*address*/ ctx[14]);
	}

	function click_handler_1() {
		return /*click_handler_1*/ ctx[9](/*address*/ ctx[14]);
	}

	let if_block2 = /*showMenu*/ ctx[3] === /*address*/ ctx[14] && create_if_block$4(ctx);

	return {
		c() {
			div6 = (0,index_323aef78.j)("div");
			div5 = (0,index_323aef78.j)("div");
			div0 = (0,index_323aef78.j)("div");
			(0,index_323aef78.F)(walletappbadge.$$.fragment);
			t0 = (0,index_323aef78.G)();
			if (if_block0) if_block0.c();
			t1 = (0,index_323aef78.G)();
			div2 = (0,index_323aef78.j)("div");
			div1 = (0,index_323aef78.j)("div");
			t2 = (0,index_323aef78.t)(t2_value);
			t3 = (0,index_323aef78.G)();
			if (if_block1) if_block1.c();
			t4 = (0,index_323aef78.G)();
			div4 = (0,index_323aef78.j)("div");
			div3 = (0,index_323aef78.j)("div");
			t5 = (0,index_323aef78.G)();
			if (if_block2) if_block2.c();
			t6 = (0,index_323aef78.G)();
			(0,index_323aef78.k)(div0, "class", "flex items-center relative");
			(0,index_323aef78.k)(div1, "class", "address-domain svelte-hb2n95");
			(0,index_323aef78.k)(div2, "class", "account-details svelte-hb2n95");
			(0,index_323aef78.k)(div3, "class", "elipsis pointer flex items-center justify-center relative svelte-hb2n95");
			(0,index_323aef78.k)(div4, "class", "elipsis-container svelte-hb2n95");
			(0,index_323aef78.H)(div4, "active", /*showMenu*/ ctx[3] === /*address*/ ctx[14]);
			(0,index_323aef78.k)(div5, "class", "container svelte-hb2n95");
			(0,index_323aef78.H)(div5, "primary", /*primary*/ ctx[1] && /*i*/ ctx[19] === 0);
			(0,index_323aef78.k)(div6, "class", "relative");
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, div6, anchor);
			(0,index_323aef78.m)(div6, div5);
			(0,index_323aef78.m)(div5, div0);
			(0,index_323aef78.I)(walletappbadge, div0, null);
			(0,index_323aef78.m)(div0, t0);
			if (if_block0) if_block0.m(div0, null);
			(0,index_323aef78.m)(div5, t1);
			(0,index_323aef78.m)(div5, div2);
			(0,index_323aef78.m)(div2, div1);
			(0,index_323aef78.m)(div1, t2);
			(0,index_323aef78.m)(div2, t3);
			if (if_block1) if_block1.m(div2, null);
			(0,index_323aef78.m)(div5, t4);
			(0,index_323aef78.m)(div5, div4);
			(0,index_323aef78.m)(div4, div3);
			div3.innerHTML = elipsisIcon;
			(0,index_323aef78.m)(div6, t5);
			if (if_block2) if_block2.m(div6, null);
			(0,index_323aef78.m)(div6, t6);
			current = true;

			if (!mounted) {
				dispose = [
					(0,index_323aef78.p)(div3, "click", (0,index_323aef78.J)(click_handler)),
					(0,index_323aef78.p)(div5, "click", click_handler_1)
				];

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			const walletappbadge_changes = {};

			if (dirty & /*primary*/ 2) walletappbadge_changes.customBackgroundColor = /*primary*/ ctx[1] && /*i*/ ctx[19] === 0
			? 'rgba(24, 206, 102, 0.2)'
			: 'rgba(235, 235, 237, 0.1)';

			if (dirty & /*primary*/ 2) walletappbadge_changes.border = /*primary*/ ctx[1] && /*i*/ ctx[19] === 0
			? 'green'
			: 'gray';

			if (dirty & /*wallet*/ 1) walletappbadge_changes.icon = /*wallet*/ ctx[0].icon;
			walletappbadge.$set(walletappbadge_changes);

			if (/*primary*/ ctx[1] && /*i*/ ctx[19] === 0) {
				if (if_block0) {
					if (dirty & /*primary*/ 2) {
						(0,index_323aef78.x)(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_3$1();
					if_block0.c();
					(0,index_323aef78.x)(if_block0, 1);
					if_block0.m(div0, null);
				}
			} else if (if_block0) {
				(0,index_323aef78.y)();

				(0,index_323aef78.A)(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				(0,index_323aef78.z)();
			}

			if ((!current || dirty & /*wallet*/ 1) && t2_value !== (t2_value = (/*ens*/ ctx[15]
			? (0,index_323aef78.D)(/*ens*/ ctx[15].name)
			: /*uns*/ ctx[16]
				? (0,index_323aef78.D)(/*uns*/ ctx[16].name)
				: (0,index_323aef78.E)(/*address*/ ctx[14])) + "")) (0,index_323aef78.v)(t2, t2_value);

			if (/*balance*/ ctx[17]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty & /*wallet*/ 1) {
						(0,index_323aef78.x)(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_2$3(ctx);
					if_block1.c();
					(0,index_323aef78.x)(if_block1, 1);
					if_block1.m(div2, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (!current || dirty & /*showMenu, wallet*/ 9) {
				(0,index_323aef78.H)(div4, "active", /*showMenu*/ ctx[3] === /*address*/ ctx[14]);
			}

			if (!current || dirty & /*primary*/ 2) {
				(0,index_323aef78.H)(div5, "primary", /*primary*/ ctx[1] && /*i*/ ctx[19] === 0);
			}

			if (/*showMenu*/ ctx[3] === /*address*/ ctx[14]) {
				if (if_block2) {
					if_block2.p(ctx, dirty);

					if (dirty & /*showMenu, wallet*/ 9) {
						(0,index_323aef78.x)(if_block2, 1);
					}
				} else {
					if_block2 = create_if_block$4(ctx);
					if_block2.c();
					(0,index_323aef78.x)(if_block2, 1);
					if_block2.m(div6, t6);
				}
			} else if (if_block2) {
				if_block2.d(1);
				if_block2 = null;
			}
		},
		i(local) {
			if (current) return;
			(0,index_323aef78.x)(walletappbadge.$$.fragment, local);
			(0,index_323aef78.x)(if_block0);
			(0,index_323aef78.x)(if_block1);
			(0,index_323aef78.x)(if_block2);
			current = true;
		},
		o(local) {
			(0,index_323aef78.A)(walletappbadge.$$.fragment, local);
			(0,index_323aef78.A)(if_block0);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(div6);
			(0,index_323aef78.K)(walletappbadge);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			mounted = false;
			(0,index_323aef78.L)(dispose);
		}
	};
}

function create_fragment$7(ctx) {
	let each_1_anchor;
	let current;
	let each_value = /*wallet*/ ctx[0].accounts;
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
	}

	const out = i => (0,index_323aef78.A)(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = (0,index_323aef78.e)();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(target, anchor);
				}
			}

			(0,index_323aef78.b)(target, each_1_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*copyWalletAddress, wallet, changeText, en, showMenu, disconnect, $_, setPrimaryWallet, primary, selectAnotherAccount, elipsisIcon, formatBalance, shortenDomain, shortenAddress*/ 127) {
				each_value = /*wallet*/ ctx[0].accounts;
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$2(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						(0,index_323aef78.x)(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block$2(child_ctx);
						each_blocks[i].c();
						(0,index_323aef78.x)(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				(0,index_323aef78.y)();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				(0,index_323aef78.z)();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				(0,index_323aef78.x)(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				(0,index_323aef78.A)(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			(0,index_323aef78.B)(each_blocks, detaching);
			if (detaching) (0,index_323aef78.d)(each_1_anchor);
		}
	};
}

function formatBalance(balance) {
	const [asset] = Object.keys(balance);

	return `${balance[asset].length > 7
	? balance[asset].slice(0, 7)
	: balance[asset]} ${asset}`;
}

function instance$7($$self, $$props, $$invalidate) {
	let $_;
	(0,index_323aef78.c)($$self, runtime_esm._, $$value => $$invalidate(4, $_ = $$value));
	let { wallet } = $$props;
	let { primary } = $$props;

	function hideMenu() {
		$$invalidate(3, showMenu = '');
	}

	let showMenu = '';

	async function selectAnotherAccount(wallet) {
		try {
			await (0,index_323aef78.M)(wallet.provider);
		} catch(error) {
			const { code } = error;

			if (code === dist.ProviderRpcErrorCode.UNSUPPORTED_METHOD || code === dist.ProviderRpcErrorCode.DOES_NOT_EXIST) {
				index_323aef78.N.next({
					inProgress: false,
					actionRequired: wallet.label
				});
			}
		}
	}

	function changeText() {
		$$invalidate(2, index_323aef78.C.accountCenter.copyAddress = 'Copied Successfully', index_323aef78.C);
		setTimeout(hideMenu, 500);

		setTimeout(
			() => {
				$$invalidate(2, index_323aef78.C.accountCenter.copyAddress = 'Copy Wallet address', index_323aef78.C);
			},
			700
		);
	}

	const click_handler = address => $$invalidate(3, showMenu = showMenu === address ? '' : address);
	const click_handler_1 = address => (0,index_323aef78.O)(wallet, address);

	const click_handler_2 = () => {
		$$invalidate(3, showMenu = '');
		selectAnotherAccount(wallet);
	};

	const click_handler_3 = address => {
		$$invalidate(3, showMenu = '');
		(0,index_323aef78.O)(wallet, address);
	};

	const click_handler_4 = () => {
		$$invalidate(3, showMenu = '');
		(0,index_323aef78.P)({ label: wallet.label });
	};

	const click_handler_5 = (ens, uns, address) => {
		(0,index_323aef78.Q)(ens ? ens.name : uns ? uns.name : address).then(() => {
			changeText();
		});
	};

	$$self.$$set = $$props => {
		if ('wallet' in $$props) $$invalidate(0, wallet = $$props.wallet);
		if ('primary' in $$props) $$invalidate(1, primary = $$props.primary);
	};

	return [
		wallet,
		primary,
		index_323aef78.C,
		showMenu,
		$_,
		selectAnotherAccount,
		changeText,
		hideMenu,
		click_handler,
		click_handler_1,
		click_handler_2,
		click_handler_3,
		click_handler_4,
		click_handler_5
	];
}

class WalletRow extends index_323aef78.S {
	constructor(options) {
		super();
		(0,index_323aef78.i)(this, options, instance$7, create_fragment$7, index_323aef78.s, { wallet: 0, primary: 1, hideMenu: 7 }, add_css$7);
	}

	get hideMenu() {
		return this.$$.ctx[7];
	}
}

var plusCircleIcon = `
  <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
  </svg>
`;

var arrowForwardIcon = `
  <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.09 15.59L11.5 17L16.5 12L11.5 7L10.09 8.41L12.67 11H3V13H12.67L10.09 15.59ZM19 3H5C3.89 3 3 3.9 3 5V9H5V5H19V19H5V15H3V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill="currentColor"/>
  </svg>
`;

var caretLightIcon = `<svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z" fill="grey"/></svg>`;

var shieldIcon = `<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99998 17.3125C5.05553 16.8264 3.45831 15.6979 2.20831 13.9271C0.958313 12.1562 0.333313 10.2153 0.333313 8.10417V3.14583L6.99998 0.645833L13.6666 3.14583V8.10417C13.6666 10.2153 13.0416 12.1562 11.7916 13.9271C10.5416 15.6979 8.94442 16.8264 6.99998 17.3125ZM5.12498 12.3333H8.87498C9.05553 12.3333 9.20484 12.2743 9.3229 12.1562C9.44095 12.0382 9.49998 11.8889 9.49998 11.7083V8.79167C9.49998 8.61111 9.44095 8.46181 9.3229 8.34375C9.20484 8.22569 9.05553 8.16667 8.87498 8.16667H8.66665V7.33333C8.66665 6.875 8.50345 6.48264 8.17706 6.15625C7.85067 5.82986 7.45831 5.66667 6.99998 5.66667C6.54165 5.66667 6.14928 5.82986 5.8229 6.15625C5.49651 6.48264 5.33331 6.875 5.33331 7.33333V8.16667H5.12498C4.94442 8.16667 4.79512 8.22569 4.67706 8.34375C4.55901 8.46181 4.49998 8.61111 4.49998 8.79167V11.7083C4.49998 11.8889 4.55901 12.0382 4.67706 12.1562C4.79512 12.2743 4.94442 12.3333 5.12498 12.3333ZM5.95831 8.16667V7.33333C5.95831 7.05556 6.06248 6.82292 6.27081 6.63542C6.47915 6.44792 6.7222 6.35417 6.99998 6.35417C7.27776 6.35417 7.52081 6.44792 7.72915 6.63542C7.93748 6.82292 8.04165 7.05556 8.04165 7.33333V8.16667H5.95831Z" fill="#929BED"/>
</svg>
`;

/* src/views/account-center/DisconnectAllConfirm.svelte generated by Svelte v3.59.2 */

function add_css$6(target) {
	(0,index_323aef78.a)(target, "svelte-1ubxcdp", ".content.svelte-1ubxcdp{padding:1rem;width:300px;font-family:var(--onboard-font-family-normal, var(--font-family-normal));font-size:var(--onboard-font-size-5, var(--font-size-5));line-height:24px}.icon-container.svelte-1ubxcdp{width:3rem;height:3rem;background:var(--onboard-warning-100, var(--warning-100));border-radius:24px;padding:12px;color:var(--onboard-warning-500, var(--warning-500))}h4.svelte-1ubxcdp{margin:1.5rem 0 0.5rem 0;font-weight:600}p.svelte-1ubxcdp{margin:0;font-weight:400}button.svelte-1ubxcdp{margin-top:1.5rem;width:50%;font-weight:600}.right.svelte-1ubxcdp{margin-left:0.5rem;width:60%}");
}

// (49:0) <Modal close={onClose}>
function create_default_slot$1(ctx) {
	let div2;
	let div0;
	let t0;
	let h4;

	let t1_value = /*$_*/ ctx[2]('modals.confirmDisconnectAll.heading', {
		default: index_323aef78.C.modals.confirmDisconnectAll.heading
	}) + "";

	let t1;
	let t2;
	let p;
	let t3_value = /*$_*/ ctx[2]('modals.confirmDisconnectAll.description') + "";
	let t3;
	let t4;
	let div1;
	let button0;

	let t5_value = /*$_*/ ctx[2]('modals.confirmDisconnectAll.cancel', {
		default: index_323aef78.C.modals.confirmDisconnectAll.cancel
	}) + "";

	let t5;
	let t6;
	let button1;

	let t7_value = /*$_*/ ctx[2]('modals.confirmDisconnectAll.confirm', {
		default: index_323aef78.C.modals.confirmDisconnectAll.confirm
	}) + "";

	let t7;
	let mounted;
	let dispose;

	return {
		c() {
			div2 = (0,index_323aef78.j)("div");
			div0 = (0,index_323aef78.j)("div");
			t0 = (0,index_323aef78.G)();
			h4 = (0,index_323aef78.j)("h4");
			t1 = (0,index_323aef78.t)(t1_value);
			t2 = (0,index_323aef78.G)();
			p = (0,index_323aef78.j)("p");
			t3 = (0,index_323aef78.t)(t3_value);
			t4 = (0,index_323aef78.G)();
			div1 = (0,index_323aef78.j)("div");
			button0 = (0,index_323aef78.j)("button");
			t5 = (0,index_323aef78.t)(t5_value);
			t6 = (0,index_323aef78.G)();
			button1 = (0,index_323aef78.j)("button");
			t7 = (0,index_323aef78.t)(t7_value);
			(0,index_323aef78.k)(div0, "class", "icon-container flex justify-center items-center svelte-1ubxcdp");
			(0,index_323aef78.k)(h4, "class", "svelte-1ubxcdp");
			(0,index_323aef78.k)(p, "class", "svelte-1ubxcdp");
			(0,index_323aef78.k)(button0, "class", "button-neutral-solid-b rounded svelte-1ubxcdp");
			(0,index_323aef78.k)(button1, "class", "right button-neutral-solid rounded svelte-1ubxcdp");
			(0,index_323aef78.k)(div1, "class", "flex justify-between items-center w-100");
			(0,index_323aef78.k)(div2, "class", "content svelte-1ubxcdp");
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, div2, anchor);
			(0,index_323aef78.m)(div2, div0);
			div0.innerHTML = warningIcon;
			(0,index_323aef78.m)(div2, t0);
			(0,index_323aef78.m)(div2, h4);
			(0,index_323aef78.m)(h4, t1);
			(0,index_323aef78.m)(div2, t2);
			(0,index_323aef78.m)(div2, p);
			(0,index_323aef78.m)(p, t3);
			(0,index_323aef78.m)(div2, t4);
			(0,index_323aef78.m)(div2, div1);
			(0,index_323aef78.m)(div1, button0);
			(0,index_323aef78.m)(button0, t5);
			(0,index_323aef78.m)(div1, t6);
			(0,index_323aef78.m)(div1, button1);
			(0,index_323aef78.m)(button1, t7);

			if (!mounted) {
				dispose = [
					(0,index_323aef78.p)(button0, "click", function () {
						if ((0,index_323aef78.Z)(/*onClose*/ ctx[1])) /*onClose*/ ctx[1].apply(this, arguments);
					}),
					(0,index_323aef78.p)(button1, "click", function () {
						if ((0,index_323aef78.Z)(/*onConfirm*/ ctx[0])) /*onConfirm*/ ctx[0].apply(this, arguments);
					})
				];

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty & /*$_*/ 4 && t1_value !== (t1_value = /*$_*/ ctx[2]('modals.confirmDisconnectAll.heading', {
				default: index_323aef78.C.modals.confirmDisconnectAll.heading
			}) + "")) (0,index_323aef78.v)(t1, t1_value);

			if (dirty & /*$_*/ 4 && t3_value !== (t3_value = /*$_*/ ctx[2]('modals.confirmDisconnectAll.description') + "")) (0,index_323aef78.v)(t3, t3_value);

			if (dirty & /*$_*/ 4 && t5_value !== (t5_value = /*$_*/ ctx[2]('modals.confirmDisconnectAll.cancel', {
				default: index_323aef78.C.modals.confirmDisconnectAll.cancel
			}) + "")) (0,index_323aef78.v)(t5, t5_value);

			if (dirty & /*$_*/ 4 && t7_value !== (t7_value = /*$_*/ ctx[2]('modals.confirmDisconnectAll.confirm', {
				default: index_323aef78.C.modals.confirmDisconnectAll.confirm
			}) + "")) (0,index_323aef78.v)(t7, t7_value);
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(div2);
			mounted = false;
			(0,index_323aef78.L)(dispose);
		}
	};
}

function create_fragment$6(ctx) {
	let modal;
	let current;

	modal = new index_323aef78.Y({
			props: {
				close: /*onClose*/ ctx[1],
				$$slots: { default: [create_default_slot$1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			(0,index_323aef78.F)(modal.$$.fragment);
		},
		m(target, anchor) {
			(0,index_323aef78.I)(modal, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const modal_changes = {};
			if (dirty & /*onClose*/ 2) modal_changes.close = /*onClose*/ ctx[1];

			if (dirty & /*$$scope, onConfirm, $_, onClose*/ 15) {
				modal_changes.$$scope = { dirty, ctx };
			}

			modal.$set(modal_changes);
		},
		i(local) {
			if (current) return;
			(0,index_323aef78.x)(modal.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,index_323aef78.A)(modal.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,index_323aef78.K)(modal, detaching);
		}
	};
}

function instance$6($$self, $$props, $$invalidate) {
	let $_;
	(0,index_323aef78.c)($$self, runtime_esm._, $$value => $$invalidate(2, $_ = $$value));
	let { onConfirm } = $$props;
	let { onClose } = $$props;

	$$self.$$set = $$props => {
		if ('onConfirm' in $$props) $$invalidate(0, onConfirm = $$props.onConfirm);
		if ('onClose' in $$props) $$invalidate(1, onClose = $$props.onClose);
	};

	return [onConfirm, onClose, $_];
}

class DisconnectAllConfirm extends index_323aef78.S {
	constructor(options) {
		super();
		(0,index_323aef78.i)(this, options, instance$6, create_fragment$6, index_323aef78.s, { onConfirm: 0, onClose: 1 }, add_css$6);
	}
}

/* src/views/account-center/EnableTransactionProtectionModal.svelte generated by Svelte v3.59.2 */

function add_css$5(target) {
	(0,index_323aef78.a)(target, "svelte-ruodf3", ".content.svelte-ruodf3{--background-color:var(--w3o-background-color);--text-color:var(--w3o-text-color);--action-color:var(--w3o-action-color, var(--primary-500));font-size:1rem;line-height:1.5rem;display:flex;flex-flow:column;gap:1.5rem;padding:1rem;max-width:320px;background:var(--background-color);color:var(--text-color)}.icon-container.svelte-ruodf3{position:relative;overflow:hidden;width:3rem;height:3rem;border-radius:24px;padding:0.75rem;background:none}.icon-container.svelte-ruodf3::before{content:'';position:absolute;height:100%;width:100%;opacity:0.2;background:var(--action-color)}.text-container.svelte-ruodf3{display:flex;flex-flow:column;gap:0.5rem;padding:0 0.5rem}.actions-container.svelte-ruodf3{display:flex;flex-flow:row nowrap;gap:1rem}.heading.svelte-ruodf3{font-weight:600}button.svelte-ruodf3{font-weight:600}button.primary.svelte-ruodf3{background:var(--action-color)}");
}

// (73:0) <Modal close={onDismiss}>
function create_default_slot(ctx) {
	let div5;
	let div0;
	let t0;
	let div3;
	let div1;

	let t1_value = /*$_*/ ctx[3]('modals.confirmTransactionProtection.heading', {
		default: index_323aef78.C.modals.confirmTransactionProtection.heading
	}) + "";

	let t1;
	let t2;
	let div2;
	let t3_value = /*$_*/ ctx[3]('modals.confirmTransactionProtection.description') + "";
	let t3;
	let t4;
	let a;

	let t5_value = /*$_*/ ctx[3]('modals.confirmTransactionProtection.link', {
		default: index_323aef78.C.modals.confirmTransactionProtection.link
	}) + "";

	let t5;
	let t6;
	let div4;
	let button0;

	let t7_value = /*$_*/ ctx[3]('modals.confirmTransactionProtection.dismiss', {
		default: index_323aef78.C.modals.confirmTransactionProtection.dismiss
	}) + "";

	let t7;
	let t8;
	let button1;

	let t9_value = /*$_*/ ctx[3]('modals.confirmTransactionProtection.enable', {
		default: index_323aef78.C.modals.confirmTransactionProtection.enable
	}) + "";

	let t9;
	let mounted;
	let dispose;

	return {
		c() {
			div5 = (0,index_323aef78.j)("div");
			div0 = (0,index_323aef78.j)("div");
			t0 = (0,index_323aef78.G)();
			div3 = (0,index_323aef78.j)("div");
			div1 = (0,index_323aef78.j)("div");
			t1 = (0,index_323aef78.t)(t1_value);
			t2 = (0,index_323aef78.G)();
			div2 = (0,index_323aef78.j)("div");
			t3 = (0,index_323aef78.t)(t3_value);
			t4 = (0,index_323aef78.G)();
			a = (0,index_323aef78.j)("a");
			t5 = (0,index_323aef78.t)(t5_value);
			t6 = (0,index_323aef78.G)();
			div4 = (0,index_323aef78.j)("div");
			button0 = (0,index_323aef78.j)("button");
			t7 = (0,index_323aef78.t)(t7_value);
			t8 = (0,index_323aef78.G)();
			button1 = (0,index_323aef78.j)("button");
			t9 = (0,index_323aef78.t)(t9_value);
			(0,index_323aef78.k)(div0, "class", "icon-container flex justify-center items-center svelte-ruodf3");
			(0,index_323aef78.k)(div1, "class", "heading svelte-ruodf3");
			(0,index_323aef78.k)(a, "href", /*infoLink*/ ctx[2]);
			(0,index_323aef78.k)(a, "target", "_blank");
			(0,index_323aef78.k)(a, "rel", "noreferrer noopener");
			(0,index_323aef78.k)(a, "class", "no-link");
			(0,index_323aef78.k)(div3, "class", "text-container svelte-ruodf3");
			(0,index_323aef78.k)(button0, "class", "button-neutral-solid-b svelte-ruodf3");
			(0,index_323aef78.k)(button1, "class", "button-neutral-solid rounded primary svelte-ruodf3");
			(0,index_323aef78.k)(div4, "class", "actions-container svelte-ruodf3");
			(0,index_323aef78.k)(div5, "class", "content svelte-ruodf3");
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, div5, anchor);
			(0,index_323aef78.m)(div5, div0);
			div0.innerHTML = shieldIcon;
			(0,index_323aef78.m)(div5, t0);
			(0,index_323aef78.m)(div5, div3);
			(0,index_323aef78.m)(div3, div1);
			(0,index_323aef78.m)(div1, t1);
			(0,index_323aef78.m)(div3, t2);
			(0,index_323aef78.m)(div3, div2);
			(0,index_323aef78.m)(div2, t3);
			(0,index_323aef78.m)(div3, t4);
			(0,index_323aef78.m)(div3, a);
			(0,index_323aef78.m)(a, t5);
			(0,index_323aef78.m)(div5, t6);
			(0,index_323aef78.m)(div5, div4);
			(0,index_323aef78.m)(div4, button0);
			(0,index_323aef78.m)(button0, t7);
			(0,index_323aef78.m)(div4, t8);
			(0,index_323aef78.m)(div4, button1);
			(0,index_323aef78.m)(button1, t9);

			if (!mounted) {
				dispose = [
					(0,index_323aef78.p)(button0, "click", function () {
						if ((0,index_323aef78.Z)(/*onDismiss*/ ctx[1])) /*onDismiss*/ ctx[1].apply(this, arguments);
					}),
					(0,index_323aef78.p)(button1, "click", function () {
						if ((0,index_323aef78.Z)(/*onEnable*/ ctx[0])) /*onEnable*/ ctx[0].apply(this, arguments);
					})
				];

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty & /*$_*/ 8 && t1_value !== (t1_value = /*$_*/ ctx[3]('modals.confirmTransactionProtection.heading', {
				default: index_323aef78.C.modals.confirmTransactionProtection.heading
			}) + "")) (0,index_323aef78.v)(t1, t1_value);

			if (dirty & /*$_*/ 8 && t3_value !== (t3_value = /*$_*/ ctx[3]('modals.confirmTransactionProtection.description') + "")) (0,index_323aef78.v)(t3, t3_value);

			if (dirty & /*$_*/ 8 && t5_value !== (t5_value = /*$_*/ ctx[3]('modals.confirmTransactionProtection.link', {
				default: index_323aef78.C.modals.confirmTransactionProtection.link
			}) + "")) (0,index_323aef78.v)(t5, t5_value);

			if (dirty & /*infoLink*/ 4) {
				(0,index_323aef78.k)(a, "href", /*infoLink*/ ctx[2]);
			}

			if (dirty & /*$_*/ 8 && t7_value !== (t7_value = /*$_*/ ctx[3]('modals.confirmTransactionProtection.dismiss', {
				default: index_323aef78.C.modals.confirmTransactionProtection.dismiss
			}) + "")) (0,index_323aef78.v)(t7, t7_value);

			if (dirty & /*$_*/ 8 && t9_value !== (t9_value = /*$_*/ ctx[3]('modals.confirmTransactionProtection.enable', {
				default: index_323aef78.C.modals.confirmTransactionProtection.enable
			}) + "")) (0,index_323aef78.v)(t9, t9_value);
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(div5);
			mounted = false;
			(0,index_323aef78.L)(dispose);
		}
	};
}

function create_fragment$5(ctx) {
	let modal;
	let current;

	modal = new index_323aef78.Y({
			props: {
				close: /*onDismiss*/ ctx[1],
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			(0,index_323aef78.F)(modal.$$.fragment);
		},
		m(target, anchor) {
			(0,index_323aef78.I)(modal, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const modal_changes = {};
			if (dirty & /*onDismiss*/ 2) modal_changes.close = /*onDismiss*/ ctx[1];

			if (dirty & /*$$scope, onEnable, $_, onDismiss, infoLink*/ 31) {
				modal_changes.$$scope = { dirty, ctx };
			}

			modal.$set(modal_changes);
		},
		i(local) {
			if (current) return;
			(0,index_323aef78.x)(modal.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,index_323aef78.A)(modal.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,index_323aef78.K)(modal, detaching);
		}
	};
}

function instance$5($$self, $$props, $$invalidate) {
	let $_;
	(0,index_323aef78.c)($$self, runtime_esm._, $$value => $$invalidate(3, $_ = $$value));
	let { onEnable } = $$props;
	let { onDismiss } = $$props;
	let { infoLink } = $$props;

	$$self.$$set = $$props => {
		if ('onEnable' in $$props) $$invalidate(0, onEnable = $$props.onEnable);
		if ('onDismiss' in $$props) $$invalidate(1, onDismiss = $$props.onDismiss);
		if ('infoLink' in $$props) $$invalidate(2, infoLink = $$props.infoLink);
	};

	return [onEnable, onDismiss, infoLink, $_];
}

class EnableTransactionProtectionModal extends index_323aef78.S {
	constructor(options) {
		super();
		(0,index_323aef78.i)(this, options, instance$5, create_fragment$5, index_323aef78.s, { onEnable: 0, onDismiss: 1, infoLink: 2 }, add_css$5);
	}
}

/* src/views/account-center/SecondaryTokenTable.svelte generated by Svelte v3.59.2 */

function add_css$4(target) {
	(0,index_323aef78.a)(target, "svelte-b848yl", ".secondary-token-container.svelte-b848yl.svelte-b848yl{width:100%}table.svelte-b848yl.svelte-b848yl{width:100%}tr.svelte-b848yl.svelte-b848yl{padding:0.25rem 1rem;line-height:1rem;border-bottom:1px solid var(--border-color);display:flex;flex-direction:row;align-items:flex-start;gap:1rem}thead.svelte-b848yl .secondary-token-table-header.svelte-b848yl{text-align:inherit;font-size:var(--onboard-font-size-7, var(--font-size-7))}.token-icon.svelte-b848yl.svelte-b848yl{width:30%;font-weight:700;font-size:var(--onboard-font-size-6, var(--font-size-6));color:var(--text-color)}.icon-name-container.svelte-b848yl.svelte-b848yl{display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:0.5rem}.icon.svelte-b848yl.svelte-b848yl{width:1rem;height:1rem}img.svelte-b848yl.svelte-b848yl{height:100%;width:100%}.token-balance.svelte-b848yl.svelte-b848yl{width:70%;font-weight:200;font-size:var(--onboard-font-size-6, var(--font-size-6));color:var(--text-color)}");
}

function get_each_context$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (66:8) {#if token && token.name && token.balance}
function create_if_block$3(ctx) {
	let tr;
	let td0;
	let div;
	let t0;
	let t1_value = /*token*/ ctx[1].name.toUpperCase() + "";
	let t1;
	let t2;
	let td1;

	let t3_value = (/*token*/ ctx[1].balance.length > 7
	? /*token*/ ctx[1].balance.slice(0, 7)
	: /*token*/ ctx[1].balance) + "";

	let t3;
	let t4;

	function select_block_type(ctx, dirty) {
		if (/*token*/ ctx[1].icon) return create_if_block_1$2;
		return create_else_block_1;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	return {
		c() {
			tr = (0,index_323aef78.j)("tr");
			td0 = (0,index_323aef78.j)("td");
			div = (0,index_323aef78.j)("div");
			if_block.c();
			t0 = (0,index_323aef78.G)();
			t1 = (0,index_323aef78.t)(t1_value);
			t2 = (0,index_323aef78.G)();
			td1 = (0,index_323aef78.j)("td");
			t3 = (0,index_323aef78.t)(t3_value);
			t4 = (0,index_323aef78.G)();
			(0,index_323aef78.k)(div, "class", "icon-name-container svelte-b848yl");
			(0,index_323aef78.k)(td0, "class", "token-icon svelte-b848yl");
			(0,index_323aef78.k)(td1, "class", "token-balance svelte-b848yl");
			(0,index_323aef78.k)(tr, "class", "token-row svelte-b848yl");
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, tr, anchor);
			(0,index_323aef78.m)(tr, td0);
			(0,index_323aef78.m)(td0, div);
			if_block.m(div, null);
			(0,index_323aef78.m)(div, t0);
			(0,index_323aef78.m)(div, t1);
			(0,index_323aef78.m)(tr, t2);
			(0,index_323aef78.m)(tr, td1);
			(0,index_323aef78.m)(td1, t3);
			(0,index_323aef78.m)(tr, t4);
		},
		p(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(div, t0);
				}
			}

			if (dirty & /*secondaryTokens*/ 1 && t1_value !== (t1_value = /*token*/ ctx[1].name.toUpperCase() + "")) (0,index_323aef78.v)(t1, t1_value);

			if (dirty & /*secondaryTokens*/ 1 && t3_value !== (t3_value = (/*token*/ ctx[1].balance.length > 7
			? /*token*/ ctx[1].balance.slice(0, 7)
			: /*token*/ ctx[1].balance) + "")) (0,index_323aef78.v)(t3, t3_value);
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(tr);
			if_block.d();
		}
	};
}

// (82:16) {:else}
function create_else_block_1(ctx) {
	let div;

	return {
		c() {
			div = (0,index_323aef78.j)("div");
			(0,index_323aef78.k)(div, "class", "icon svelte-b848yl");
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, div, anchor);
		},
		p: index_323aef78.n,
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(div);
		}
	};
}

// (70:16) {#if token.icon}
function create_if_block_1$2(ctx) {
	let await_block_anchor;
	let promise;

	let info = {
		ctx,
		current: null,
		token: null,
		hasCatch: false,
		pending: create_pending_block,
		then: create_then_block,
		catch: create_catch_block,
		value: 4
	};

	(0,index_323aef78._)(promise = /*token*/ ctx[1].icon, info);

	return {
		c() {
			await_block_anchor = (0,index_323aef78.e)();
			info.block.c();
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, await_block_anchor, anchor);
			info.block.m(target, info.anchor = anchor);
			info.mount = () => await_block_anchor.parentNode;
			info.anchor = await_block_anchor;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			info.ctx = ctx;

			if (dirty & /*secondaryTokens*/ 1 && promise !== (promise = /*token*/ ctx[1].icon) && (0,index_323aef78._)(promise, info)) ; else {
				(0,index_323aef78.$)(info, ctx, dirty);
			}
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(await_block_anchor);
			info.block.d(detaching);
			info.token = null;
			info = null;
		}
	};
}

// (1:0) <script lang="ts">import { _ }
function create_catch_block(ctx) {
	return {
		c: index_323aef78.n,
		m: index_323aef78.n,
		p: index_323aef78.n,
		i: index_323aef78.n,
		o: index_323aef78.n,
		d: index_323aef78.n
	};
}

// (71:53)                      <div in:fade|local class="icon">                       {#if isSVG(iconLoaded)}
function create_then_block(ctx) {
	let div;
	let show_if;
	let div_intro;

	function select_block_type_1(ctx, dirty) {
		if (dirty & /*secondaryTokens*/ 1) show_if = null;
		if (show_if == null) show_if = !!(0,index_323aef78.a0)(/*iconLoaded*/ ctx[4]);
		if (show_if) return create_if_block_2$2;
		return create_else_block$1;
	}

	let current_block_type = select_block_type_1(ctx, -1);
	let if_block = current_block_type(ctx);

	return {
		c() {
			div = (0,index_323aef78.j)("div");
			if_block.c();
			(0,index_323aef78.k)(div, "class", "icon svelte-b848yl");
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, div, anchor);
			if_block.m(div, null);
		},
		p(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type_1(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(div, null);
				}
			}
		},
		i(local) {
			if (local) {
				if (!div_intro) {
					(0,index_323aef78.U)(() => {
						div_intro = (0,index_323aef78.V)(div, index_323aef78.X, {});
						div_intro.start();
					});
				}
			}
		},
		o: index_323aef78.n,
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(div);
			if_block.d();
		}
	};
}

// (76:22) {:else}
function create_else_block$1(ctx) {
	let img;
	let img_src_value;

	return {
		c() {
			img = (0,index_323aef78.j)("img");
			if (!(0,index_323aef78.a1)(img.src, img_src_value = /*iconLoaded*/ ctx[4])) (0,index_323aef78.k)(img, "src", img_src_value);
			(0,index_323aef78.k)(img, "alt", "logo");
			(0,index_323aef78.k)(img, "class", "svelte-b848yl");
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, img, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*secondaryTokens*/ 1 && !(0,index_323aef78.a1)(img.src, img_src_value = /*iconLoaded*/ ctx[4])) {
				(0,index_323aef78.k)(img, "src", img_src_value);
			}
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(img);
		}
	};
}

// (73:22) {#if isSVG(iconLoaded)}
function create_if_block_2$2(ctx) {
	let html_tag;
	let raw_value = /*iconLoaded*/ ctx[4] + "";
	let html_anchor;

	return {
		c() {
			html_tag = new index_323aef78.a2(false);
			html_anchor = (0,index_323aef78.e)();
			html_tag.a = html_anchor;
		},
		m(target, anchor) {
			html_tag.m(raw_value, target, anchor);
			(0,index_323aef78.b)(target, html_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*secondaryTokens*/ 1 && raw_value !== (raw_value = /*iconLoaded*/ ctx[4] + "")) html_tag.p(raw_value);
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(html_anchor);
			if (detaching) html_tag.d();
		}
	};
}

// (1:0) <script lang="ts">import { _ }
function create_pending_block(ctx) {
	return {
		c: index_323aef78.n,
		m: index_323aef78.n,
		p: index_323aef78.n,
		i: index_323aef78.n,
		o: index_323aef78.n,
		d: index_323aef78.n
	};
}

// (65:6) {#each secondaryTokens as token}
function create_each_block$1(ctx) {
	let if_block_anchor;
	let if_block = /*token*/ ctx[1] && /*token*/ ctx[1].name && /*token*/ ctx[1].balance && create_if_block$3(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = (0,index_323aef78.e)();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			(0,index_323aef78.b)(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (/*token*/ ctx[1] && /*token*/ ctx[1].name && /*token*/ ctx[1].balance) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block$3(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) (0,index_323aef78.d)(if_block_anchor);
		}
	};
}

function create_fragment$4(ctx) {
	let div;
	let table;
	let thead;
	let t1;
	let tbody;
	let each_value = /*secondaryTokens*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
	}

	return {
		c() {
			div = (0,index_323aef78.j)("div");
			table = (0,index_323aef78.j)("table");
			thead = (0,index_323aef78.j)("thead");
			thead.innerHTML = `<tr class="svelte-b848yl"><th colspan="3" class="secondary-token-table-header svelte-b848yl">Token Balances:</th></tr>`;
			t1 = (0,index_323aef78.G)();
			tbody = (0,index_323aef78.j)("tbody");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			(0,index_323aef78.k)(thead, "class", "svelte-b848yl");
			(0,index_323aef78.k)(table, "class", "balance-change-table table-radius svelte-b848yl");
			(0,index_323aef78.k)(div, "class", "secondary-token-container svelte-b848yl");
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, div, anchor);
			(0,index_323aef78.m)(div, table);
			(0,index_323aef78.m)(table, thead);
			(0,index_323aef78.m)(table, t1);
			(0,index_323aef78.m)(table, tbody);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(tbody, null);
				}
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*secondaryTokens, isSVG*/ 1) {
				each_value = /*secondaryTokens*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$1(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block$1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(tbody, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: index_323aef78.n,
		o: index_323aef78.n,
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(div);
			(0,index_323aef78.B)(each_blocks, detaching);
		}
	};
}

function instance$4($$self, $$props, $$invalidate) {
	let { secondaryTokens } = $$props;

	$$self.$$set = $$props => {
		if ('secondaryTokens' in $$props) $$invalidate(0, secondaryTokens = $$props.secondaryTokens);
	};

	return [secondaryTokens];
}

class SecondaryTokenTable extends index_323aef78.S {
	constructor(options) {
		super();
		(0,index_323aef78.i)(this, options, instance$4, create_fragment$4, index_323aef78.s, { secondaryTokens: 0 }, add_css$4);
	}
}

/* src/views/account-center/AccountCenterPanel.svelte generated by Svelte v3.59.2 */

function add_css$3(target) {
	(0,index_323aef78.a)(target, "svelte-177u10y", ".outer-container.svelte-177u10y{--background-color:var(--w3o-background-color);--text-color:var(--w3o-text-color);--border-color:var(--w3o-border-color, var(--gray-500));--action-color:var(--w3o-action-color, var(--primary-500));--border-radius:var(--w3o-border-radius, 1rem);--account-center-network-selector-color:var(--text-color, white);width:100%;overflow:hidden;pointer-events:auto;border:1px solid transparent;background:var(\n      --account-center-maximized-upper-background,\n      var(--background-color)\n    );border-color:var(--border-color);border-radius:var(--account-center-border-radius, var(--border-radius))}.wallets-section.svelte-177u10y{width:100%;color:var(--text-color, var(--gray-100));background:var(--background-color, var(--gray-700))}.p5.svelte-177u10y{padding:var(--onboard-spacing-5, var(--spacing-5))}.wallets.svelte-177u10y{width:100%;margin-bottom:0.5rem}.actions.svelte-177u10y{color:var(\n      --account-center-maximized-upper-action-color,\n      var(--action-color)\n    );padding-left:2px}.action-container.svelte-177u10y{padding:0.25rem 12px 0.25rem 0.5rem;border-radius:0.5rem;transition:background-color 150ms ease-in-out}.action-container.svelte-177u10y:hover{background-color:var(\n      --account-center-maximized-upper-action-background-hover,\n      rgba(146, 155, 237, 0.2)\n    )}.plus-icon.svelte-177u10y{width:20px}.arrow-forward.svelte-177u10y{width:20px}.mt.svelte-177u10y{margin-top:0.25rem}.action-text.svelte-177u10y{font-size:var(--onboard-font-size-6, var(--font-size-6));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));margin-left:0.5rem}.background-blue.svelte-177u10y{background:var(\n      --account-center-maximized-network-section-background,\n      var(--onboard-primary-100, var(--primary-100))\n    )}.background-gray.svelte-177u10y{background:var(--onboard-gray-100, var(--gray-100))}.background-yellow.svelte-177u10y{background:var(--onboard-warning-100, var(--warning-100))}.network-container.svelte-177u10y{background:var(--background-color);border-top:1px solid var(--border-color);width:100%;display:flex;flex-direction:column;align-items:flex-start;padding:0.75rem;gap:0.5rem;border-radius:var(\n      --account-center-border-radius,\n      var(--onboard-border-radius-3, var(--border-radius-3))\n    );color:var(\n      --account-center-maximized-network-text-color,\n      var(--account-center-maximized-network-section, inherit)\n    )}.network-section.svelte-177u10y{flex-direction:row;align-items:flex-start;padding:0px;gap:16px}.network-selector-container.svelte-177u10y{width:100%}.protect.svelte-177u10y{flex-direction:row;padding:0.25rem 0.375rem 0;gap:0.375rem;width:100%}.shield.svelte-177u10y{width:20px;height:20px;display:flex;justify-content:center}.protect-text.svelte-177u10y{font-size:var(--onboard-font-size-6, var(--font-size-6));color:var(\n      --account-center-maximized-upper-action-color,\n      var(--action-color)\n    );line-height:1.75rem;display:flex;align-items:center}.network-selector-container.svelte-177u10y{margin-left:1rem;width:100%}.network-selector-label.svelte-177u10y{font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3))}.app-info-container.svelte-177u10y{color:var(--text-color, var(--gray-700));background:var(\n      --account-center-maximized-info-section-background-color,\n      var(\n        --account-center-maximized-info-section,\n        var(--background-color, #fff)\n      )\n    );border-top:1px solid var(--border-color);border-radius:var(--account-center-border-radius, inherit);display:flex;flex-direction:column;align-items:flex-start;padding:0px}.app-info-header.svelte-177u10y{width:100%;flex-direction:column;align-items:flex-start;padding:0.75rem;gap:0.5rem;border-bottom:1px solid var(--border-color)}.app-icon-name.svelte-177u10y{display:flex;align-items:center;flex-direction:row;gap:0.75rem}.app-name.svelte-177u10y{font-size:1rem;font-weight:600;line-height:1rem;margin-bottom:0.25rem;color:var(--account-center-maximized-app-name-color, inherit)}.app-description.svelte-177u10y{margin:0;font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));color:var(--account-center-maximized-app-info-color, inherit);display:flex;flex-direction:row;align-items:flex-start;padding:0px 0.25rem;gap:1rem}.app-info.svelte-177u10y{width:100%;font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));color:var(--account-center-maximized-app-info-color, inherit);border-bottom:1px solid var(--border-color);display:flex;flex-direction:column;align-items:flex-start;padding:0.5rem 1rem;gap:0.25rem}.app-info-heading.svelte-177u10y{font-weight:700;color:var(--account-center-maximized-app-info-color, inherit)}.w100.svelte-177u10y{width:100%}a.svelte-177u10y{font-weight:700}.powered-by-container.svelte-177u10y{color:var(--text-color);padding:0.75rem}");
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[29] = list[i];
	child_ctx[31] = i;
	return child_ctx;
}

// (303:0) {#if disconnectConfirmModal}
function create_if_block_10(ctx) {
	let disconnectallconfirm;
	let current;

	disconnectallconfirm = new DisconnectAllConfirm({
			props: {
				onClose: /*func*/ ctx[22],
				onConfirm: /*disconnectAllWallets*/ ctx[13]
			}
		});

	return {
		c() {
			(0,index_323aef78.F)(disconnectallconfirm.$$.fragment);
		},
		m(target, anchor) {
			(0,index_323aef78.I)(disconnectallconfirm, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const disconnectallconfirm_changes = {};
			if (dirty[0] & /*disconnectConfirmModal*/ 4) disconnectallconfirm_changes.onClose = /*func*/ ctx[22];
			disconnectallconfirm.$set(disconnectallconfirm_changes);
		},
		i(local) {
			if (current) return;
			(0,index_323aef78.x)(disconnectallconfirm.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,index_323aef78.A)(disconnectallconfirm.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,index_323aef78.K)(disconnectallconfirm, detaching);
		}
	};
}

// (309:0) {#if enableTransactionProtection}
function create_if_block_9(ctx) {
	let enabletransactionprotectionmodal;
	let current;

	enabletransactionprotectionmodal = new EnableTransactionProtectionModal({
			props: {
				onDismiss: /*func_1*/ ctx[23],
				onEnable: /*func_2*/ ctx[24],
				infoLink: /*$accountCenter$*/ ctx[9].transactionProtectionInfoLink || index_323aef78.a5
			}
		});

	return {
		c() {
			(0,index_323aef78.F)(enabletransactionprotectionmodal.$$.fragment);
		},
		m(target, anchor) {
			(0,index_323aef78.I)(enabletransactionprotectionmodal, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const enabletransactionprotectionmodal_changes = {};
			if (dirty[0] & /*enableTransactionProtection*/ 16) enabletransactionprotectionmodal_changes.onDismiss = /*func_1*/ ctx[23];
			if (dirty[0] & /*$accountCenter$*/ 512) enabletransactionprotectionmodal_changes.infoLink = /*$accountCenter$*/ ctx[9].transactionProtectionInfoLink || index_323aef78.a5;
			enabletransactionprotectionmodal.$set(enabletransactionprotectionmodal_changes);
		},
		i(local) {
			if (current) return;
			(0,index_323aef78.x)(enabletransactionprotectionmodal.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,index_323aef78.A)(enabletransactionprotectionmodal.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,index_323aef78.K)(enabletransactionprotectionmodal, detaching);
		}
	};
}

// (318:0) {#if expanded}
function create_if_block$2(ctx) {
	let div12;
	let div11;
	let div2;
	let div0;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let t0;
	let div1;
	let t1;
	let div8;
	let div7;
	let div3;
	let walletappbadge;
	let t2;
	let t3;
	let div6;
	let div4;
	let t4_value = /*$_*/ ctx[10]('accountCenter.currentNetwork', { default: index_323aef78.C.accountCenter.currentNetwork }) + "";
	let t4;
	let t5;
	let div5;
	let networkselector;
	let t6;
	let t7;
	let div10;
	let t8;
	let t9;
	let div9;
	let a;
	let div12_transition;
	let current;
	let mounted;
	let dispose;
	let each_value = /*$wallets$*/ ctx[1];
	const get_key = ctx => /*wallet*/ ctx[29].label;

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	let if_block0 = /*device*/ ctx[17].type === 'desktop' && create_if_block_8(ctx);

	walletappbadge = new index_323aef78.W({
			props: {
				size: 32,
				padding: 4,
				background: "custom",
				color: !/*validAppChain*/ ctx[5]
				? '#FFAF00'
				: !/*validAppChain*/ ctx[5].icon ? '#EFF1FC' : undefined,
				customBackgroundColor: /*validAppChain*/ ctx[5]
				? /*validAppChain*/ ctx[5].color || /*defaultChainStyles*/ ctx[7] && /*defaultChainStyles*/ ctx[7].color || index_323aef78.a6.color
				: '#FFE7B3',
				border: "transparent",
				radius: 8,
				icon: /*validAppChain*/ ctx[5]
				? /*validAppChain*/ ctx[5].icon || /*defaultChainStyles*/ ctx[7] && /*defaultChainStyles*/ ctx[7].icon || index_323aef78.a6.icon
				: warningIcon
			}
		});

	let if_block1 = /*validAppChain*/ ctx[5] && create_if_block_7();

	networkselector = new NetworkSelector({
			props: {
				chains: /*appChains*/ ctx[14],
				colorVar: "--account-center-maximized-network-selector-color",
				bold: true,
				selectIcon: caretLightIcon,
				parentCSSId: "maximized_ac"
			}
		});

	let if_block2 = !/*$accountCenter$*/ ctx[9].hideTransactionProtectionBtn && (/*primaryWalletOnMainnet*/ ctx[6] || /*validAppChain*/ ctx[5] && /*validAppChain*/ ctx[5].protectedRpcUrl) && create_if_block_6(ctx);
	let if_block3 = /*$appMetadata$*/ ctx[11] && create_if_block_2$1(ctx);
	let if_block4 = /*secondaryTokens*/ ctx[8] && /*secondaryTokens*/ ctx[8].length && create_if_block_1$1(ctx);

	return {
		c() {
			div12 = (0,index_323aef78.j)("div");
			div11 = (0,index_323aef78.j)("div");
			div2 = (0,index_323aef78.j)("div");
			div0 = (0,index_323aef78.j)("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t0 = (0,index_323aef78.G)();
			div1 = (0,index_323aef78.j)("div");
			if (if_block0) if_block0.c();
			t1 = (0,index_323aef78.G)();
			div8 = (0,index_323aef78.j)("div");
			div7 = (0,index_323aef78.j)("div");
			div3 = (0,index_323aef78.j)("div");
			(0,index_323aef78.F)(walletappbadge.$$.fragment);
			t2 = (0,index_323aef78.G)();
			if (if_block1) if_block1.c();
			t3 = (0,index_323aef78.G)();
			div6 = (0,index_323aef78.j)("div");
			div4 = (0,index_323aef78.j)("div");
			t4 = (0,index_323aef78.t)(t4_value);
			t5 = (0,index_323aef78.G)();
			div5 = (0,index_323aef78.j)("div");
			(0,index_323aef78.F)(networkselector.$$.fragment);
			t6 = (0,index_323aef78.G)();
			if (if_block2) if_block2.c();
			t7 = (0,index_323aef78.G)();
			div10 = (0,index_323aef78.j)("div");
			if (if_block3) if_block3.c();
			t8 = (0,index_323aef78.G)();
			if (if_block4) if_block4.c();
			t9 = (0,index_323aef78.G)();
			div9 = (0,index_323aef78.j)("div");
			a = (0,index_323aef78.j)("a");
			(0,index_323aef78.k)(div0, "class", "wallets svelte-177u10y");
			(0,index_323aef78.k)(div1, "class", "actions flex flex-column items-start svelte-177u10y");
			(0,index_323aef78.k)(div2, "class", "p5 svelte-177u10y");
			(0,index_323aef78.k)(div3, "class", "relative flex");
			(0,index_323aef78.k)(div4, "class", "network-selector-label svelte-177u10y");
			(0,index_323aef78.k)(div5, "class", "flex items-center");
			(0,index_323aef78.T)(div5, "width", "100%");
			(0,index_323aef78.k)(div6, "class", "network-selector-container svelte-177u10y");
			(0,index_323aef78.k)(div7, "class", "network-section flex items-center svelte-177u10y");
			(0,index_323aef78.k)(div8, "class", "network-container svelte-177u10y");
			(0,index_323aef78.H)(div8, "background-blue", /*validAppChain*/ ctx[5] && /*validAppChain*/ ctx[5].icon || /*defaultChainStyles*/ ctx[7]);
			(0,index_323aef78.H)(div8, "background-yellow", !/*validAppChain*/ ctx[5]);
			(0,index_323aef78.H)(div8, "background-gray", /*validAppChain*/ ctx[5] && !/*defaultChainStyles*/ ctx[7]);
			(0,index_323aef78.k)(a, "href", "https://blocknative.com");
			(0,index_323aef78.k)(a, "target", "_blank");
			(0,index_323aef78.k)(a, "rel", "noopener noreferrer");
			(0,index_323aef78.k)(a, "class", "flex justify-center items-center powered-by-container svelte-177u10y");
			(0,index_323aef78.k)(div9, "class", "w100 svelte-177u10y");
			(0,index_323aef78.k)(div10, "class", "app-info-container svelte-177u10y");
			(0,index_323aef78.k)(div11, "class", "wallets-section svelte-177u10y");
			(0,index_323aef78.k)(div12, "class", "outer-container svelte-177u10y");
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, div12, anchor);
			(0,index_323aef78.m)(div12, div11);
			(0,index_323aef78.m)(div11, div2);
			(0,index_323aef78.m)(div2, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div0, null);
				}
			}

			(0,index_323aef78.m)(div2, t0);
			(0,index_323aef78.m)(div2, div1);
			if (if_block0) if_block0.m(div1, null);
			(0,index_323aef78.m)(div11, t1);
			(0,index_323aef78.m)(div11, div8);
			(0,index_323aef78.m)(div8, div7);
			(0,index_323aef78.m)(div7, div3);
			(0,index_323aef78.I)(walletappbadge, div3, null);
			(0,index_323aef78.m)(div3, t2);
			if (if_block1) if_block1.m(div3, null);
			(0,index_323aef78.m)(div7, t3);
			(0,index_323aef78.m)(div7, div6);
			(0,index_323aef78.m)(div6, div4);
			(0,index_323aef78.m)(div4, t4);
			(0,index_323aef78.m)(div6, t5);
			(0,index_323aef78.m)(div6, div5);
			(0,index_323aef78.I)(networkselector, div5, null);
			(0,index_323aef78.m)(div8, t6);
			if (if_block2) if_block2.m(div8, null);
			(0,index_323aef78.m)(div11, t7);
			(0,index_323aef78.m)(div11, div10);
			if (if_block3) if_block3.m(div10, null);
			(0,index_323aef78.m)(div10, t8);
			if (if_block4) if_block4.m(div10, null);
			(0,index_323aef78.m)(div10, t9);
			(0,index_323aef78.m)(div10, div9);
			(0,index_323aef78.m)(div9, a);
			a.innerHTML = index_323aef78.a7;
			current = true;

			if (!mounted) {
				dispose = [
					(0,index_323aef78.p)(div5, "click", /*click_handler*/ ctx[21]),
					(0,index_323aef78.p)(div12, "click", (0,index_323aef78.J)(function () {
						if ((0,index_323aef78.Z)(/*hideWalletRowMenu*/ ctx[3])) /*hideWalletRowMenu*/ ctx[3].apply(this, arguments);
					}))
				];

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty[0] & /*$wallets$, hideWalletRowMenu*/ 10) {
				each_value = /*$wallets$*/ ctx[1];
				(0,index_323aef78.y)();
				each_blocks = (0,index_323aef78.u)(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div0, index_323aef78.a8, create_each_block, null, get_each_context);
				(0,index_323aef78.z)();
			}

			if (/*device*/ ctx[17].type === 'desktop') if_block0.p(ctx, dirty);
			const walletappbadge_changes = {};

			if (dirty[0] & /*validAppChain*/ 32) walletappbadge_changes.color = !/*validAppChain*/ ctx[5]
			? '#FFAF00'
			: !/*validAppChain*/ ctx[5].icon ? '#EFF1FC' : undefined;

			if (dirty[0] & /*validAppChain, defaultChainStyles*/ 160) walletappbadge_changes.customBackgroundColor = /*validAppChain*/ ctx[5]
			? /*validAppChain*/ ctx[5].color || /*defaultChainStyles*/ ctx[7] && /*defaultChainStyles*/ ctx[7].color || index_323aef78.a6.color
			: '#FFE7B3';

			if (dirty[0] & /*validAppChain, defaultChainStyles*/ 160) walletappbadge_changes.icon = /*validAppChain*/ ctx[5]
			? /*validAppChain*/ ctx[5].icon || /*defaultChainStyles*/ ctx[7] && /*defaultChainStyles*/ ctx[7].icon || index_323aef78.a6.icon
			: warningIcon;

			walletappbadge.$set(walletappbadge_changes);

			if (/*validAppChain*/ ctx[5]) {
				if (if_block1) {
					if (dirty[0] & /*validAppChain*/ 32) {
						(0,index_323aef78.x)(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_7();
					if_block1.c();
					(0,index_323aef78.x)(if_block1, 1);
					if_block1.m(div3, null);
				}
			} else if (if_block1) {
				(0,index_323aef78.y)();

				(0,index_323aef78.A)(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				(0,index_323aef78.z)();
			}

			if ((!current || dirty[0] & /*$_*/ 1024) && t4_value !== (t4_value = /*$_*/ ctx[10]('accountCenter.currentNetwork', { default: index_323aef78.C.accountCenter.currentNetwork }) + "")) (0,index_323aef78.v)(t4, t4_value);

			if (!/*$accountCenter$*/ ctx[9].hideTransactionProtectionBtn && (/*primaryWalletOnMainnet*/ ctx[6] || /*validAppChain*/ ctx[5] && /*validAppChain*/ ctx[5].protectedRpcUrl)) {
				if (if_block2) {
					if_block2.p(ctx, dirty);
				} else {
					if_block2 = create_if_block_6(ctx);
					if_block2.c();
					if_block2.m(div8, null);
				}
			} else if (if_block2) {
				if_block2.d(1);
				if_block2 = null;
			}

			if (!current || dirty[0] & /*validAppChain, defaultChainStyles*/ 160) {
				(0,index_323aef78.H)(div8, "background-blue", /*validAppChain*/ ctx[5] && /*validAppChain*/ ctx[5].icon || /*defaultChainStyles*/ ctx[7]);
			}

			if (!current || dirty[0] & /*validAppChain*/ 32) {
				(0,index_323aef78.H)(div8, "background-yellow", !/*validAppChain*/ ctx[5]);
			}

			if (!current || dirty[0] & /*validAppChain, defaultChainStyles*/ 160) {
				(0,index_323aef78.H)(div8, "background-gray", /*validAppChain*/ ctx[5] && !/*defaultChainStyles*/ ctx[7]);
			}

			if (/*$appMetadata$*/ ctx[11]) {
				if (if_block3) {
					if_block3.p(ctx, dirty);

					if (dirty[0] & /*$appMetadata$*/ 2048) {
						(0,index_323aef78.x)(if_block3, 1);
					}
				} else {
					if_block3 = create_if_block_2$1(ctx);
					if_block3.c();
					(0,index_323aef78.x)(if_block3, 1);
					if_block3.m(div10, t8);
				}
			} else if (if_block3) {
				(0,index_323aef78.y)();

				(0,index_323aef78.A)(if_block3, 1, 1, () => {
					if_block3 = null;
				});

				(0,index_323aef78.z)();
			}

			if (/*secondaryTokens*/ ctx[8] && /*secondaryTokens*/ ctx[8].length) {
				if (if_block4) {
					if_block4.p(ctx, dirty);

					if (dirty[0] & /*secondaryTokens*/ 256) {
						(0,index_323aef78.x)(if_block4, 1);
					}
				} else {
					if_block4 = create_if_block_1$1(ctx);
					if_block4.c();
					(0,index_323aef78.x)(if_block4, 1);
					if_block4.m(div10, t9);
				}
			} else if (if_block4) {
				(0,index_323aef78.y)();

				(0,index_323aef78.A)(if_block4, 1, 1, () => {
					if_block4 = null;
				});

				(0,index_323aef78.z)();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				(0,index_323aef78.x)(each_blocks[i]);
			}

			(0,index_323aef78.x)(walletappbadge.$$.fragment, local);
			(0,index_323aef78.x)(if_block1);
			(0,index_323aef78.x)(networkselector.$$.fragment, local);
			(0,index_323aef78.x)(if_block3);
			(0,index_323aef78.x)(if_block4);

			if (local) {
				(0,index_323aef78.U)(() => {
					if (!current) return;

					if (!div12_transition) div12_transition = (0,index_323aef78.a9)(
						div12,
						index_323aef78.ab,
						{
							duration: 600,
							y: /*position*/ ctx[16].includes('bottom') ? 56 : -76,
							easing: index_323aef78.aa,
							opacity: 0
						},
						true
					);

					div12_transition.run(1);
				});
			}

			current = true;
		},
		o(local) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				(0,index_323aef78.A)(each_blocks[i]);
			}

			(0,index_323aef78.A)(walletappbadge.$$.fragment, local);
			(0,index_323aef78.A)(if_block1);
			(0,index_323aef78.A)(networkselector.$$.fragment, local);
			(0,index_323aef78.A)(if_block3);
			(0,index_323aef78.A)(if_block4);

			if (local) {
				if (!div12_transition) div12_transition = (0,index_323aef78.a9)(
					div12,
					index_323aef78.ab,
					{
						duration: 600,
						y: /*position*/ ctx[16].includes('bottom') ? 56 : -76,
						easing: index_323aef78.aa,
						opacity: 0
					},
					false
				);

				div12_transition.run(0);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(div12);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}

			if (if_block0) if_block0.d();
			(0,index_323aef78.K)(walletappbadge);
			if (if_block1) if_block1.d();
			(0,index_323aef78.K)(networkselector);
			if (if_block2) if_block2.d();
			if (if_block3) if_block3.d();
			if (if_block4) if_block4.d();
			if (detaching && div12_transition) div12_transition.end();
			mounted = false;
			(0,index_323aef78.L)(dispose);
		}
	};
}

// (334:10) {#each $wallets$ as wallet, i (wallet.label)}
function create_each_block(key_1, ctx) {
	let first;
	let walletrow;
	let updating_hideMenu;
	let current;

	function walletrow_hideMenu_binding(value) {
		/*walletrow_hideMenu_binding*/ ctx[25](value);
	}

	let walletrow_props = {
		wallet: /*wallet*/ ctx[29],
		primary: /*i*/ ctx[31] === 0
	};

	if (/*hideWalletRowMenu*/ ctx[3] !== void 0) {
		walletrow_props.hideMenu = /*hideWalletRowMenu*/ ctx[3];
	}

	walletrow = new WalletRow({ props: walletrow_props });
	index_323aef78.g.push(() => (0,index_323aef78.ac)(walletrow, 'hideMenu', walletrow_hideMenu_binding));

	return {
		key: key_1,
		first: null,
		c() {
			first = (0,index_323aef78.e)();
			(0,index_323aef78.F)(walletrow.$$.fragment);
			this.first = first;
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, first, anchor);
			(0,index_323aef78.I)(walletrow, target, anchor);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			const walletrow_changes = {};
			if (dirty[0] & /*$wallets$*/ 2) walletrow_changes.wallet = /*wallet*/ ctx[29];
			if (dirty[0] & /*$wallets$*/ 2) walletrow_changes.primary = /*i*/ ctx[31] === 0;

			if (!updating_hideMenu && dirty[0] & /*hideWalletRowMenu*/ 8) {
				updating_hideMenu = true;
				walletrow_changes.hideMenu = /*hideWalletRowMenu*/ ctx[3];
				(0,index_323aef78.ad)(() => updating_hideMenu = false);
			}

			walletrow.$set(walletrow_changes);
		},
		i(local) {
			if (current) return;
			(0,index_323aef78.x)(walletrow.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,index_323aef78.A)(walletrow.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(first);
			(0,index_323aef78.K)(walletrow, detaching);
		}
	};
}

// (345:10) {#if device.type === 'desktop'}
function create_if_block_8(ctx) {
	let div1;
	let div0;
	let t0;
	let span0;

	let t1_value = /*$_*/ ctx[10]('accountCenter.connectAnotherWallet', {
		default: index_323aef78.C.accountCenter.connectAnotherWallet
	}) + "";

	let t1;
	let t2;
	let div3;
	let div2;
	let t3;
	let span1;

	let t4_value = /*$_*/ ctx[10]('accountCenter.disconnectAllWallets', {
		default: index_323aef78.C.accountCenter.disconnectAllWallets
	}) + "";

	let t4;
	let mounted;
	let dispose;

	return {
		c() {
			div1 = (0,index_323aef78.j)("div");
			div0 = (0,index_323aef78.j)("div");
			t0 = (0,index_323aef78.G)();
			span0 = (0,index_323aef78.j)("span");
			t1 = (0,index_323aef78.t)(t1_value);
			t2 = (0,index_323aef78.G)();
			div3 = (0,index_323aef78.j)("div");
			div2 = (0,index_323aef78.j)("div");
			t3 = (0,index_323aef78.G)();
			span1 = (0,index_323aef78.j)("span");
			t4 = (0,index_323aef78.t)(t4_value);
			(0,index_323aef78.k)(div0, "class", "plus-icon flex items-center justify-center svelte-177u10y");
			(0,index_323aef78.k)(span0, "class", "action-text svelte-177u10y");
			(0,index_323aef78.k)(div1, "class", "action-container flex items-center pointer svelte-177u10y");
			(0,index_323aef78.k)(div2, "class", "arrow-forward flex items-center justify-center svelte-177u10y");
			(0,index_323aef78.k)(span1, "class", "action-text svelte-177u10y");
			(0,index_323aef78.k)(div3, "class", "action-container flex items-center mt pointer svelte-177u10y");
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, div1, anchor);
			(0,index_323aef78.m)(div1, div0);
			div0.innerHTML = plusCircleIcon;
			(0,index_323aef78.m)(div1, t0);
			(0,index_323aef78.m)(div1, span0);
			(0,index_323aef78.m)(span0, t1);
			(0,index_323aef78.b)(target, t2, anchor);
			(0,index_323aef78.b)(target, div3, anchor);
			(0,index_323aef78.m)(div3, div2);
			div2.innerHTML = arrowForwardIcon;
			(0,index_323aef78.m)(div3, t3);
			(0,index_323aef78.m)(div3, span1);
			(0,index_323aef78.m)(span1, t4);

			if (!mounted) {
				dispose = [
					(0,index_323aef78.p)(div1, "click", /*click_handler_1*/ ctx[26]),
					(0,index_323aef78.p)(div3, "click", /*click_handler_2*/ ctx[27])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty[0] & /*$_*/ 1024 && t1_value !== (t1_value = /*$_*/ ctx[10]('accountCenter.connectAnotherWallet', {
				default: index_323aef78.C.accountCenter.connectAnotherWallet
			}) + "")) (0,index_323aef78.v)(t1, t1_value);

			if (dirty[0] & /*$_*/ 1024 && t4_value !== (t4_value = /*$_*/ ctx[10]('accountCenter.disconnectAllWallets', {
				default: index_323aef78.C.accountCenter.disconnectAllWallets
			}) + "")) (0,index_323aef78.v)(t4, t4_value);
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(div1);
			if (detaching) (0,index_323aef78.d)(t2);
			if (detaching) (0,index_323aef78.d)(div3);
			mounted = false;
			(0,index_323aef78.L)(dispose);
		}
	};
}

// (413:12) {#if validAppChain}
function create_if_block_7(ctx) {
	let div;
	let successstatusicon;
	let current;
	successstatusicon = new index_323aef78.R({ props: { size: 14 } });

	return {
		c() {
			div = (0,index_323aef78.j)("div");
			(0,index_323aef78.F)(successstatusicon.$$.fragment);
			(0,index_323aef78.T)(div, "right", "-5px");
			(0,index_323aef78.T)(div, "bottom", "-5px");
			(0,index_323aef78.k)(div, "class", "drop-shadow absolute");
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, div, anchor);
			(0,index_323aef78.I)(successstatusicon, div, null);
			current = true;
		},
		i(local) {
			if (current) return;
			(0,index_323aef78.x)(successstatusicon.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,index_323aef78.A)(successstatusicon.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(div);
			(0,index_323aef78.K)(successstatusicon);
		}
	};
}

// (442:8) {#if !$accountCenter$.hideTransactionProtectionBtn && (primaryWalletOnMainnet || (validAppChain && validAppChain.protectedRpcUrl))}
function create_if_block_6(ctx) {
	let div1;
	let div0;
	let t0;
	let span;

	let t1_value = /*$_*/ ctx[10]('accountCenter.enableTransactionProtection', {
		default: index_323aef78.C.accountCenter.enableTransactionProtection
	}) + "";

	let t1;
	let mounted;
	let dispose;

	return {
		c() {
			div1 = (0,index_323aef78.j)("div");
			div0 = (0,index_323aef78.j)("div");
			t0 = (0,index_323aef78.G)();
			span = (0,index_323aef78.j)("span");
			t1 = (0,index_323aef78.t)(t1_value);
			(0,index_323aef78.k)(div0, "class", "shield svelte-177u10y");
			(0,index_323aef78.k)(span, "class", "protect-text svelte-177u10y");
			(0,index_323aef78.k)(div1, "class", "protect action-container flex items-center pointer svelte-177u10y");
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, div1, anchor);
			(0,index_323aef78.m)(div1, div0);
			div0.innerHTML = shieldIcon;
			(0,index_323aef78.m)(div1, t0);
			(0,index_323aef78.m)(div1, span);
			(0,index_323aef78.m)(span, t1);

			if (!mounted) {
				dispose = (0,index_323aef78.p)(div1, "click", /*click_handler_3*/ ctx[28]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty[0] & /*$_*/ 1024 && t1_value !== (t1_value = /*$_*/ ctx[10]('accountCenter.enableTransactionProtection', {
				default: index_323aef78.C.accountCenter.enableTransactionProtection
			}) + "")) (0,index_323aef78.v)(t1, t1_value);
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(div1);
			mounted = false;
			dispose();
		}
	};
}

// (461:8) {#if $appMetadata$}
function create_if_block_2$1(ctx) {
	let div3;
	let div1;
	let walletappbadge;
	let t0;
	let div0;
	let t1_value = (/*$appMetadata$*/ ctx[11] && /*$appMetadata$*/ ctx[11].name || 'App Name') + "";
	let t1;
	let t2;
	let div2;
	let t3_value = (/*$appMetadata$*/ ctx[11] && /*$appMetadata$*/ ctx[11].description || 'This app has not added a description.') + "";
	let t3;
	let t4;
	let if_block_anchor;
	let current;

	walletappbadge = new index_323aef78.W({
			props: {
				size: 32,
				padding: 4,
				background: "white",
				border: "black",
				radius: 8,
				icon: /*$appMetadata$*/ ctx[11] && /*$appMetadata$*/ ctx[11].icon || index_323aef78.ae
			}
		});

	let if_block = (/*$appMetadata$*/ ctx[11].gettingStartedGuide || /*$appMetadata$*/ ctx[11].explore) && create_if_block_3(ctx);

	return {
		c() {
			div3 = (0,index_323aef78.j)("div");
			div1 = (0,index_323aef78.j)("div");
			(0,index_323aef78.F)(walletappbadge.$$.fragment);
			t0 = (0,index_323aef78.G)();
			div0 = (0,index_323aef78.j)("div");
			t1 = (0,index_323aef78.t)(t1_value);
			t2 = (0,index_323aef78.G)();
			div2 = (0,index_323aef78.j)("div");
			t3 = (0,index_323aef78.t)(t3_value);
			t4 = (0,index_323aef78.G)();
			if (if_block) if_block.c();
			if_block_anchor = (0,index_323aef78.e)();
			(0,index_323aef78.k)(div0, "class", "app-name svelte-177u10y");
			(0,index_323aef78.k)(div1, "class", "relative flex app-icon-name svelte-177u10y");
			(0,index_323aef78.k)(div2, "class", "app-description svelte-177u10y");
			(0,index_323aef78.k)(div3, "class", "flex items-start app-info-header svelte-177u10y");
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, div3, anchor);
			(0,index_323aef78.m)(div3, div1);
			(0,index_323aef78.I)(walletappbadge, div1, null);
			(0,index_323aef78.m)(div1, t0);
			(0,index_323aef78.m)(div1, div0);
			(0,index_323aef78.m)(div0, t1);
			(0,index_323aef78.m)(div3, t2);
			(0,index_323aef78.m)(div3, div2);
			(0,index_323aef78.m)(div2, t3);
			(0,index_323aef78.b)(target, t4, anchor);
			if (if_block) if_block.m(target, anchor);
			(0,index_323aef78.b)(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const walletappbadge_changes = {};
			if (dirty[0] & /*$appMetadata$*/ 2048) walletappbadge_changes.icon = /*$appMetadata$*/ ctx[11] && /*$appMetadata$*/ ctx[11].icon || index_323aef78.ae;
			walletappbadge.$set(walletappbadge_changes);
			if ((!current || dirty[0] & /*$appMetadata$*/ 2048) && t1_value !== (t1_value = (/*$appMetadata$*/ ctx[11] && /*$appMetadata$*/ ctx[11].name || 'App Name') + "")) (0,index_323aef78.v)(t1, t1_value);
			if ((!current || dirty[0] & /*$appMetadata$*/ 2048) && t3_value !== (t3_value = (/*$appMetadata$*/ ctx[11] && /*$appMetadata$*/ ctx[11].description || 'This app has not added a description.') + "")) (0,index_323aef78.v)(t3, t3_value);

			if (/*$appMetadata$*/ ctx[11].gettingStartedGuide || /*$appMetadata$*/ ctx[11].explore) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_3(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i(local) {
			if (current) return;
			(0,index_323aef78.x)(walletappbadge.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,index_323aef78.A)(walletappbadge.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(div3);
			(0,index_323aef78.K)(walletappbadge);
			if (detaching) (0,index_323aef78.d)(t4);
			if (if_block) if_block.d(detaching);
			if (detaching) (0,index_323aef78.d)(if_block_anchor);
		}
	};
}

// (485:10) {#if $appMetadata$.gettingStartedGuide || $appMetadata$.explore}
function create_if_block_3(ctx) {
	let div1;
	let div0;
	let t0_value = /*$_*/ ctx[10]('accountCenter.appInfo', { default: index_323aef78.C.accountCenter.appInfo }) + "";
	let t0;
	let t1;
	let t2;
	let if_block0 = /*$appMetadata$*/ ctx[11].gettingStartedGuide && create_if_block_5(ctx);
	let if_block1 = /*$appMetadata$*/ ctx[11].explore && create_if_block_4(ctx);

	return {
		c() {
			div1 = (0,index_323aef78.j)("div");
			div0 = (0,index_323aef78.j)("div");
			t0 = (0,index_323aef78.t)(t0_value);
			t1 = (0,index_323aef78.G)();
			if (if_block0) if_block0.c();
			t2 = (0,index_323aef78.G)();
			if (if_block1) if_block1.c();
			(0,index_323aef78.k)(div0, "class", "app-info-heading svelte-177u10y");
			(0,index_323aef78.k)(div1, "class", "app-info svelte-177u10y");
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, div1, anchor);
			(0,index_323aef78.m)(div1, div0);
			(0,index_323aef78.m)(div0, t0);
			(0,index_323aef78.m)(div1, t1);
			if (if_block0) if_block0.m(div1, null);
			(0,index_323aef78.m)(div1, t2);
			if (if_block1) if_block1.m(div1, null);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*$_*/ 1024 && t0_value !== (t0_value = /*$_*/ ctx[10]('accountCenter.appInfo', { default: index_323aef78.C.accountCenter.appInfo }) + "")) (0,index_323aef78.v)(t0, t0_value);

			if (/*$appMetadata$*/ ctx[11].gettingStartedGuide) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_5(ctx);
					if_block0.c();
					if_block0.m(div1, t2);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (/*$appMetadata$*/ ctx[11].explore) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_4(ctx);
					if_block1.c();
					if_block1.m(div1, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(div1);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
		}
	};
}

// (493:14) {#if $appMetadata$.gettingStartedGuide}
function create_if_block_5(ctx) {
	let div1;
	let div0;
	let t0_value = /*$_*/ ctx[10]('accountCenter.learnMore', { default: index_323aef78.C.accountCenter.learnMore }) + "";
	let t0;
	let t1;
	let a;

	let t2_value = /*$_*/ ctx[10]('accountCenter.gettingStartedGuide', {
		default: index_323aef78.C.accountCenter.gettingStartedGuide
	}) + "";

	let t2;
	let a_href_value;

	return {
		c() {
			div1 = (0,index_323aef78.j)("div");
			div0 = (0,index_323aef78.j)("div");
			t0 = (0,index_323aef78.t)(t0_value);
			t1 = (0,index_323aef78.G)();
			a = (0,index_323aef78.j)("a");
			t2 = (0,index_323aef78.t)(t2_value);
			(0,index_323aef78.k)(a, "href", a_href_value = /*$appMetadata$*/ ctx[11].gettingStartedGuide);
			(0,index_323aef78.k)(a, "target", "_blank");
			(0,index_323aef78.k)(a, "rel", "noreferrer noopener");
			(0,index_323aef78.k)(a, "class", "svelte-177u10y");
			(0,index_323aef78.k)(div1, "class", "flex justify-between items-center w100 svelte-177u10y");
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, div1, anchor);
			(0,index_323aef78.m)(div1, div0);
			(0,index_323aef78.m)(div0, t0);
			(0,index_323aef78.m)(div1, t1);
			(0,index_323aef78.m)(div1, a);
			(0,index_323aef78.m)(a, t2);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*$_*/ 1024 && t0_value !== (t0_value = /*$_*/ ctx[10]('accountCenter.learnMore', { default: index_323aef78.C.accountCenter.learnMore }) + "")) (0,index_323aef78.v)(t0, t0_value);

			if (dirty[0] & /*$_*/ 1024 && t2_value !== (t2_value = /*$_*/ ctx[10]('accountCenter.gettingStartedGuide', {
				default: index_323aef78.C.accountCenter.gettingStartedGuide
			}) + "")) (0,index_323aef78.v)(t2, t2_value);

			if (dirty[0] & /*$appMetadata$*/ 2048 && a_href_value !== (a_href_value = /*$appMetadata$*/ ctx[11].gettingStartedGuide)) {
				(0,index_323aef78.k)(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(div1);
		}
	};
}

// (512:14) {#if $appMetadata$.explore}
function create_if_block_4(ctx) {
	let div1;
	let div0;
	let t0_value = /*$_*/ ctx[10]('accountCenter.smartContracts', { default: index_323aef78.C.accountCenter.smartContracts }) + "";
	let t0;
	let t1;
	let a;
	let t2_value = /*$_*/ ctx[10]('accountCenter.explore', { default: index_323aef78.C.accountCenter.explore }) + "";
	let t2;
	let a_href_value;

	return {
		c() {
			div1 = (0,index_323aef78.j)("div");
			div0 = (0,index_323aef78.j)("div");
			t0 = (0,index_323aef78.t)(t0_value);
			t1 = (0,index_323aef78.G)();
			a = (0,index_323aef78.j)("a");
			t2 = (0,index_323aef78.t)(t2_value);
			(0,index_323aef78.k)(a, "href", a_href_value = /*$appMetadata$*/ ctx[11].explore);
			(0,index_323aef78.k)(a, "target", "_blank");
			(0,index_323aef78.k)(a, "rel", "noreferrer noopener");
			(0,index_323aef78.k)(a, "class", "svelte-177u10y");
			(0,index_323aef78.k)(div1, "class", "flex justify-between items-center w100 svelte-177u10y");
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, div1, anchor);
			(0,index_323aef78.m)(div1, div0);
			(0,index_323aef78.m)(div0, t0);
			(0,index_323aef78.m)(div1, t1);
			(0,index_323aef78.m)(div1, a);
			(0,index_323aef78.m)(a, t2);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*$_*/ 1024 && t0_value !== (t0_value = /*$_*/ ctx[10]('accountCenter.smartContracts', { default: index_323aef78.C.accountCenter.smartContracts }) + "")) (0,index_323aef78.v)(t0, t0_value);
			if (dirty[0] & /*$_*/ 1024 && t2_value !== (t2_value = /*$_*/ ctx[10]('accountCenter.explore', { default: index_323aef78.C.accountCenter.explore }) + "")) (0,index_323aef78.v)(t2, t2_value);

			if (dirty[0] & /*$appMetadata$*/ 2048 && a_href_value !== (a_href_value = /*$appMetadata$*/ ctx[11].explore)) {
				(0,index_323aef78.k)(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(div1);
		}
	};
}

// (533:8) {#if secondaryTokens && secondaryTokens.length}
function create_if_block_1$1(ctx) {
	let secondarytokentable;
	let current;

	secondarytokentable = new SecondaryTokenTable({
			props: {
				secondaryTokens: /*secondaryTokens*/ ctx[8]
			}
		});

	return {
		c() {
			(0,index_323aef78.F)(secondarytokentable.$$.fragment);
		},
		m(target, anchor) {
			(0,index_323aef78.I)(secondarytokentable, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const secondarytokentable_changes = {};
			if (dirty[0] & /*secondaryTokens*/ 256) secondarytokentable_changes.secondaryTokens = /*secondaryTokens*/ ctx[8];
			secondarytokentable.$set(secondarytokentable_changes);
		},
		i(local) {
			if (current) return;
			(0,index_323aef78.x)(secondarytokentable.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,index_323aef78.A)(secondarytokentable.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,index_323aef78.K)(secondarytokentable, detaching);
		}
	};
}

function create_fragment$3(ctx) {
	let t0;
	let t1;
	let if_block2_anchor;
	let current;
	let if_block0 = /*disconnectConfirmModal*/ ctx[2] && create_if_block_10(ctx);
	let if_block1 = /*enableTransactionProtection*/ ctx[4] && create_if_block_9(ctx);
	let if_block2 = /*expanded*/ ctx[0] && create_if_block$2(ctx);

	return {
		c() {
			if (if_block0) if_block0.c();
			t0 = (0,index_323aef78.G)();
			if (if_block1) if_block1.c();
			t1 = (0,index_323aef78.G)();
			if (if_block2) if_block2.c();
			if_block2_anchor = (0,index_323aef78.e)();
		},
		m(target, anchor) {
			if (if_block0) if_block0.m(target, anchor);
			(0,index_323aef78.b)(target, t0, anchor);
			if (if_block1) if_block1.m(target, anchor);
			(0,index_323aef78.b)(target, t1, anchor);
			if (if_block2) if_block2.m(target, anchor);
			(0,index_323aef78.b)(target, if_block2_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (/*disconnectConfirmModal*/ ctx[2]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty[0] & /*disconnectConfirmModal*/ 4) {
						(0,index_323aef78.x)(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_10(ctx);
					if_block0.c();
					(0,index_323aef78.x)(if_block0, 1);
					if_block0.m(t0.parentNode, t0);
				}
			} else if (if_block0) {
				(0,index_323aef78.y)();

				(0,index_323aef78.A)(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				(0,index_323aef78.z)();
			}

			if (/*enableTransactionProtection*/ ctx[4]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[0] & /*enableTransactionProtection*/ 16) {
						(0,index_323aef78.x)(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_9(ctx);
					if_block1.c();
					(0,index_323aef78.x)(if_block1, 1);
					if_block1.m(t1.parentNode, t1);
				}
			} else if (if_block1) {
				(0,index_323aef78.y)();

				(0,index_323aef78.A)(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				(0,index_323aef78.z)();
			}

			if (/*expanded*/ ctx[0]) {
				if (if_block2) {
					if_block2.p(ctx, dirty);

					if (dirty[0] & /*expanded*/ 1) {
						(0,index_323aef78.x)(if_block2, 1);
					}
				} else {
					if_block2 = create_if_block$2(ctx);
					if_block2.c();
					(0,index_323aef78.x)(if_block2, 1);
					if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
				}
			} else if (if_block2) {
				(0,index_323aef78.y)();

				(0,index_323aef78.A)(if_block2, 1, 1, () => {
					if_block2 = null;
				});

				(0,index_323aef78.z)();
			}
		},
		i(local) {
			if (current) return;
			(0,index_323aef78.x)(if_block0);
			(0,index_323aef78.x)(if_block1);
			(0,index_323aef78.x)(if_block2);
			current = true;
		},
		o(local) {
			(0,index_323aef78.A)(if_block0);
			(0,index_323aef78.A)(if_block1);
			(0,index_323aef78.A)(if_block2);
			current = false;
		},
		d(detaching) {
			if (if_block0) if_block0.d(detaching);
			if (detaching) (0,index_323aef78.d)(t0);
			if (if_block1) if_block1.d(detaching);
			if (detaching) (0,index_323aef78.d)(t1);
			if (if_block2) if_block2.d(detaching);
			if (detaching) (0,index_323aef78.d)(if_block2_anchor);
		}
	};
}

function instance$3($$self, $$props, $$invalidate) {
	let primaryWallet;
	let connectedChain;
	let secondaryTokens;
	let validAppChain;
	let defaultChainStyles;
	let primaryWalletOnMainnet;
	let $wallets$;
	let $accountCenter$;
	let $_;
	let $appMetadata$;
	(0,index_323aef78.c)($$self, index_323aef78.w, $$value => $$invalidate(1, $wallets$ = $$value));
	(0,index_323aef78.c)($$self, runtime_esm._, $$value => $$invalidate(10, $_ = $$value));
	let { expanded } = $$props;
	const accountCenter$ = index_323aef78.a3.select('accountCenter').pipe((0,startWith/* startWith */.Z)(index_323aef78.a3.get().accountCenter), (0,shareReplay/* shareReplay */.t)(1));
	(0,index_323aef78.c)($$self, accountCenter$, value => $$invalidate(9, $accountCenter$ = value));

	function disconnectAllWallets() {
		$wallets$.forEach(({ label }) => (0,index_323aef78.P)({ label }));
	}

	const { chains: appChains } = index_323aef78.a3.get();
	let disconnectConfirmModal = false;
	let hideWalletRowMenu;
	let enableTransactionProtection = false;
	const appMetadata$ = index_323aef78.a3.select('appMetadata').pipe((0,startWith/* startWith */.Z)(index_323aef78.a3.get().appMetadata), (0,shareReplay/* shareReplay */.t)(1));
	(0,index_323aef78.c)($$self, appMetadata$, value => $$invalidate(11, $appMetadata$ = value));
	const { position } = index_323aef78.a3.get().accountCenter;
	const { device } = index_323aef78.af;

	const enableProtectionRPC = async () => {
		if (!validAppChain) return;

		try {
			await (0,index_323aef78.ag)(primaryWallet.provider, validAppChain, validAppChain.protectedRpcUrl || index_323aef78.ah);
			$$invalidate(4, enableTransactionProtection = false);
		} catch(error) {
			const { code } = error;
			console.log(error, code);
		}
	};

	function click_handler(event) {
		index_323aef78.ai.call(this, $$self, event);
	}

	const func = () => $$invalidate(2, disconnectConfirmModal = false);
	const func_1 = () => $$invalidate(4, enableTransactionProtection = false);
	const func_2 = () => enableProtectionRPC();

	function walletrow_hideMenu_binding(value) {
		hideWalletRowMenu = value;
		$$invalidate(3, hideWalletRowMenu);
	}

	const click_handler_1 = () => (0,index_323aef78.aj)();
	const click_handler_2 = () => $$invalidate(2, disconnectConfirmModal = true);
	const click_handler_3 = () => $$invalidate(4, enableTransactionProtection = true);

	$$self.$$set = $$props => {
		if ('expanded' in $$props) $$invalidate(0, expanded = $$props.expanded);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*$wallets$*/ 2) {
			$$invalidate(19, [primaryWallet] = $wallets$, primaryWallet);
		}

		if ($$self.$$.dirty[0] & /*primaryWallet*/ 524288) {
			$$invalidate(20, [connectedChain] = primaryWallet ? primaryWallet.chains : [], connectedChain);
		}

		if ($$self.$$.dirty[0] & /*primaryWallet*/ 524288) {
			$$invalidate(8, secondaryTokens = primaryWallet && primaryWallet.accounts.length && primaryWallet.accounts[0].secondaryTokens);
		}

		if ($$self.$$.dirty[0] & /*connectedChain*/ 1048576) {
			$$invalidate(5, validAppChain = appChains.find(({ id, namespace }) => connectedChain
			? id === connectedChain.id && namespace === connectedChain.namespace
			: false));
		}

		if ($$self.$$.dirty[0] & /*connectedChain*/ 1048576) {
			$$invalidate(7, defaultChainStyles = (0,index_323aef78.a4)(connectedChain && connectedChain.id));
		}

		if ($$self.$$.dirty[0] & /*connectedChain*/ 1048576) {
			$$invalidate(6, primaryWalletOnMainnet = connectedChain && connectedChain.id === '0x1');
		}
	};

	return [
		expanded,
		$wallets$,
		disconnectConfirmModal,
		hideWalletRowMenu,
		enableTransactionProtection,
		validAppChain,
		primaryWalletOnMainnet,
		defaultChainStyles,
		secondaryTokens,
		$accountCenter$,
		$_,
		$appMetadata$,
		accountCenter$,
		disconnectAllWallets,
		appChains,
		appMetadata$,
		position,
		device,
		enableProtectionRPC,
		primaryWallet,
		connectedChain,
		click_handler,
		func,
		func_1,
		func_2,
		walletrow_hideMenu_binding,
		click_handler_1,
		click_handler_2,
		click_handler_3
	];
}

class AccountCenterPanel extends index_323aef78.S {
	constructor(options) {
		super();
		(0,index_323aef78.i)(this, options, instance$3, create_fragment$3, index_323aef78.s, { expanded: 0 }, add_css$3, [-1, -1]);
	}
}

/* src/views/account-center/AcctCenterTriggerLarge.svelte generated by Svelte v3.59.2 */

function add_css$2(target) {
	(0,index_323aef78.a)(target, "svelte-1xsvwqj", ".ac-trigger.svelte-1xsvwqj{--background-color:var(\n      --account-center-minimized-background,\n      var(--w3o-background-color, white)\n    );--text-color:var(--w3o-text-color, var(--gray-700));--border-color:var(\n      --account-center-border,\n      var(--w3o-border-color, var(--onboard-gray-200, var(--gray-200)))\n    );--border-radius:var(\n      --account-center-border-radius,\n      var(--w3o-border-radius, 1rem)\n    );cursor:pointer;pointer-events:auto;width:100%;padding:0.5rem;border:1px solid;background:var(--background-color);color:var(--text-color);border-color:var(--border-color);border-radius:var(--border-radius);box-shadow:var(\n      --account-center-box-shadow,\n      var(--onboard-shadow-3, var(--shadow-3))\n    );z-index:var(--account-center-z-index, 1)}.inner-row.svelte-1xsvwqj{display:flex;flex-flow:row nowrap;align-items:center;gap:0.5rem;padding:0 0.25rem}.wallet-info.svelte-1xsvwqj{display:flex;flex:1;flex-flow:column;height:2.5rem;overflow:hidden}.address.svelte-1xsvwqj{font-weight:600;line-height:1.25rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--account-center-minimized-address-color, inherit)}.balance.svelte-1xsvwqj{font-weight:400;line-height:1.25rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:0.6;color:var(--account-center-minimized-balance-color, inherit)}.chain-icon-container.svelte-1xsvwqj{margin-right:4px}.container.svelte-1xsvwqj{border:1px solid transparent;border-radius:16px;padding:1px;transition:border-color 250ms ease-in-out, backround 250ms ease-in-out;max-width:128px;cursor:default}.drop-shadow.svelte-1xsvwqj{filter:drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.2))}");
}

// (168:6) {#if firstAddressBalance}
function create_if_block$1(ctx) {
	let div;

	let t0_value = (/*firstAddressBalance*/ ctx[5].length > 7
	? /*firstAddressBalance*/ ctx[5].slice(0, 7)
	: /*firstAddressBalance*/ ctx[5]) + "";

	let t0;
	let t1;
	let t2;
	let div_intro;

	return {
		c() {
			div = (0,index_323aef78.j)("div");
			t0 = (0,index_323aef78.t)(t0_value);
			t1 = (0,index_323aef78.G)();
			t2 = (0,index_323aef78.t)(/*firstAddressAsset*/ ctx[2]);
			(0,index_323aef78.k)(div, "class", "balance svelte-1xsvwqj");
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, div, anchor);
			(0,index_323aef78.m)(div, t0);
			(0,index_323aef78.m)(div, t1);
			(0,index_323aef78.m)(div, t2);
		},
		p(ctx, dirty) {
			if (dirty & /*firstAddressBalance*/ 32 && t0_value !== (t0_value = (/*firstAddressBalance*/ ctx[5].length > 7
			? /*firstAddressBalance*/ ctx[5].slice(0, 7)
			: /*firstAddressBalance*/ ctx[5]) + "")) (0,index_323aef78.v)(t0, t0_value);

			if (dirty & /*firstAddressAsset*/ 4) (0,index_323aef78.v)(t2, /*firstAddressAsset*/ ctx[2]);
		},
		i(local) {
			if (local) {
				if (!div_intro) {
					(0,index_323aef78.U)(() => {
						div_intro = (0,index_323aef78.V)(div, index_323aef78.X, {});
						div_intro.start();
					});
				}
			}
		},
		o: index_323aef78.n,
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(div);
		}
	};
}

function create_fragment$2(ctx) {
	let div11;
	let div10;
	let div3;
	let div0;
	let walletappbadge0;
	let t0;
	let div1;
	let walletappbadge1;
	let t1;
	let div2;
	let successstatusicon;
	let t2;
	let div5;
	let div4;

	let t3_value = (/*ensName*/ ctx[8]
	? (0,index_323aef78.D)(/*ensName*/ ctx[8])
	: /*unsName*/ ctx[7]
		? (0,index_323aef78.D)(/*unsName*/ ctx[7])
		: /*shortenedFirstAddress*/ ctx[6]) + "";

	let t3;
	let t4;
	let t5;
	let div9;
	let div8;
	let div7;
	let div6;
	let walletappbadge2;
	let t6;
	let networkselector;
	let div8_style_value;
	let div11_intro;
	let div11_outro;
	let current;
	let mounted;
	let dispose;

	walletappbadge0 = new index_323aef78.W({
			props: {
				size: 32,
				padding: 4,
				background: 'white',
				border: "darkGreen",
				radius: 8,
				icon: /*$appMetadata$*/ ctx[9] && /*$appMetadata$*/ ctx[9].icon || index_323aef78.ae
			}
		});

	walletappbadge1 = new index_323aef78.W({
			props: {
				size: 32,
				padding: 4,
				background: "green",
				border: "darkGreen",
				radius: 8,
				icon: /*primaryWallet*/ ctx[1]
				? /*primaryWallet*/ ctx[1].icon
				: ''
			}
		});

	successstatusicon = new index_323aef78.R({ props: { size: 14 } });
	let if_block = /*firstAddressBalance*/ ctx[5] && create_if_block$1(ctx);

	walletappbadge2 = new index_323aef78.W({
			props: {
				size: 22,
				padding: 4,
				background: "custom",
				color: !/*validAppChain*/ ctx[4]
				? `var(
                    --account-center-chain-warning,
                    var(--onboard-warning-500, var(--warning-500))
                  )`
				: !/*validAppChain*/ ctx[4].icon
					? `var(--onboard-primary-100, var(--primary-100))`
					: undefined,
				customBackgroundColor: /*validAppChain*/ ctx[4]
				? /*validAppChain*/ ctx[4].color || /*defaultChainStyles*/ ctx[3] && /*defaultChainStyles*/ ctx[3].color || index_323aef78.a6.color
				: `var(--onboard-warning-200, var(--warning-200))`,
				border: "transparent",
				radius: 25,
				icon: /*validAppChain*/ ctx[4]
				? /*validAppChain*/ ctx[4].icon || /*defaultChainStyles*/ ctx[3] && /*defaultChainStyles*/ ctx[3].icon || index_323aef78.a6.icon
				: warningIcon
			}
		});

	networkselector = new NetworkSelector({
			props: {
				chains: /*chains*/ ctx[11],
				colorVar: "--account-center-minimized-network-selector-color",
				selectIcon: caretIcon,
				parentCSSId: "minimized_ac"
			}
		});

	return {
		c() {
			div11 = (0,index_323aef78.j)("div");
			div10 = (0,index_323aef78.j)("div");
			div3 = (0,index_323aef78.j)("div");
			div0 = (0,index_323aef78.j)("div");
			(0,index_323aef78.F)(walletappbadge0.$$.fragment);
			t0 = (0,index_323aef78.G)();
			div1 = (0,index_323aef78.j)("div");
			(0,index_323aef78.F)(walletappbadge1.$$.fragment);
			t1 = (0,index_323aef78.G)();
			div2 = (0,index_323aef78.j)("div");
			(0,index_323aef78.F)(successstatusicon.$$.fragment);
			t2 = (0,index_323aef78.G)();
			div5 = (0,index_323aef78.j)("div");
			div4 = (0,index_323aef78.j)("div");
			t3 = (0,index_323aef78.t)(t3_value);
			t4 = (0,index_323aef78.G)();
			if (if_block) if_block.c();
			t5 = (0,index_323aef78.G)();
			div9 = (0,index_323aef78.j)("div");
			div8 = (0,index_323aef78.j)("div");
			div7 = (0,index_323aef78.j)("div");
			div6 = (0,index_323aef78.j)("div");
			(0,index_323aef78.F)(walletappbadge2.$$.fragment);
			t6 = (0,index_323aef78.G)();
			(0,index_323aef78.F)(networkselector.$$.fragment);
			(0,index_323aef78.k)(div0, "class", "drop-shadow svelte-1xsvwqj");
			(0,index_323aef78.T)(div1, "margin-left", "-0.5rem");
			(0,index_323aef78.k)(div1, "class", "drop-shadow svelte-1xsvwqj");
			(0,index_323aef78.T)(div2, "right", "-4px");
			(0,index_323aef78.T)(div2, "bottom", "-4px");
			(0,index_323aef78.k)(div2, "class", "drop-shadow absolute svelte-1xsvwqj");
			(0,index_323aef78.k)(div3, "class", "flex relative");
			(0,index_323aef78.k)(div4, "class", "address svelte-1xsvwqj");
			(0,index_323aef78.k)(div5, "class", "wallet-info svelte-1xsvwqj");
			(0,index_323aef78.k)(div6, "class", "chain-icon-container svelte-1xsvwqj");
			(0,index_323aef78.k)(div7, "class", "flex items-center");
			(0,index_323aef78.k)(div8, "class", "container shadow-1 flex items-center svelte-1xsvwqj");

			(0,index_323aef78.k)(div8, "style", div8_style_value = `border-color: var(${/*validAppChain*/ ctx[4]
			? '--onboard-primary-200, var(--primary-200)'
			: '--onboard-warning-500, var(--warning-500)'}); background-color: var(${/*validAppChain*/ ctx[4]
			? '--account-center-minimized-chain-select-background, var(--primary-100)'
			: '--account-center-minimized-chain-select-background-warning, var(--warning-100)'})`);

			(0,index_323aef78.k)(div9, "class", "network");
			(0,index_323aef78.k)(div10, "class", "inner-row svelte-1xsvwqj");
			(0,index_323aef78.k)(div11, "class", "ac-trigger svelte-1xsvwqj");
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, div11, anchor);
			(0,index_323aef78.m)(div11, div10);
			(0,index_323aef78.m)(div10, div3);
			(0,index_323aef78.m)(div3, div0);
			(0,index_323aef78.I)(walletappbadge0, div0, null);
			(0,index_323aef78.m)(div3, t0);
			(0,index_323aef78.m)(div3, div1);
			(0,index_323aef78.I)(walletappbadge1, div1, null);
			(0,index_323aef78.m)(div3, t1);
			(0,index_323aef78.m)(div3, div2);
			(0,index_323aef78.I)(successstatusicon, div2, null);
			(0,index_323aef78.m)(div10, t2);
			(0,index_323aef78.m)(div10, div5);
			(0,index_323aef78.m)(div5, div4);
			(0,index_323aef78.m)(div4, t3);
			(0,index_323aef78.m)(div5, t4);
			if (if_block) if_block.m(div5, null);
			(0,index_323aef78.m)(div10, t5);
			(0,index_323aef78.m)(div10, div9);
			(0,index_323aef78.m)(div9, div8);
			(0,index_323aef78.m)(div8, div7);
			(0,index_323aef78.m)(div7, div6);
			(0,index_323aef78.I)(walletappbadge2, div6, null);
			(0,index_323aef78.m)(div7, t6);
			(0,index_323aef78.I)(networkselector, div7, null);
			current = true;

			if (!mounted) {
				dispose = [
					(0,index_323aef78.p)(div8, "click", (0,index_323aef78.J)(/*click_handler*/ ctx[15])),
					(0,index_323aef78.p)(div11, "click", (0,index_323aef78.J)(function () {
						if ((0,index_323aef78.Z)(/*toggle*/ ctx[0])) /*toggle*/ ctx[0].apply(this, arguments);
					}))
				];

				mounted = true;
			}
		},
		p(new_ctx, [dirty]) {
			ctx = new_ctx;
			const walletappbadge0_changes = {};
			if (dirty & /*$appMetadata$*/ 512) walletappbadge0_changes.icon = /*$appMetadata$*/ ctx[9] && /*$appMetadata$*/ ctx[9].icon || index_323aef78.ae;
			walletappbadge0.$set(walletappbadge0_changes);
			const walletappbadge1_changes = {};

			if (dirty & /*primaryWallet*/ 2) walletappbadge1_changes.icon = /*primaryWallet*/ ctx[1]
			? /*primaryWallet*/ ctx[1].icon
			: '';

			walletappbadge1.$set(walletappbadge1_changes);

			if ((!current || dirty & /*ensName, unsName, shortenedFirstAddress*/ 448) && t3_value !== (t3_value = (/*ensName*/ ctx[8]
			? (0,index_323aef78.D)(/*ensName*/ ctx[8])
			: /*unsName*/ ctx[7]
				? (0,index_323aef78.D)(/*unsName*/ ctx[7])
				: /*shortenedFirstAddress*/ ctx[6]) + "")) (0,index_323aef78.v)(t3, t3_value);

			if (/*firstAddressBalance*/ ctx[5]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*firstAddressBalance*/ 32) {
						(0,index_323aef78.x)(if_block, 1);
					}
				} else {
					if_block = create_if_block$1(ctx);
					if_block.c();
					(0,index_323aef78.x)(if_block, 1);
					if_block.m(div5, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			const walletappbadge2_changes = {};

			if (dirty & /*validAppChain*/ 16) walletappbadge2_changes.color = !/*validAppChain*/ ctx[4]
			? `var(
                    --account-center-chain-warning,
                    var(--onboard-warning-500, var(--warning-500))
                  )`
			: !/*validAppChain*/ ctx[4].icon
				? `var(--onboard-primary-100, var(--primary-100))`
				: undefined;

			if (dirty & /*validAppChain, defaultChainStyles*/ 24) walletappbadge2_changes.customBackgroundColor = /*validAppChain*/ ctx[4]
			? /*validAppChain*/ ctx[4].color || /*defaultChainStyles*/ ctx[3] && /*defaultChainStyles*/ ctx[3].color || index_323aef78.a6.color
			: `var(--onboard-warning-200, var(--warning-200))`;

			if (dirty & /*validAppChain, defaultChainStyles*/ 24) walletappbadge2_changes.icon = /*validAppChain*/ ctx[4]
			? /*validAppChain*/ ctx[4].icon || /*defaultChainStyles*/ ctx[3] && /*defaultChainStyles*/ ctx[3].icon || index_323aef78.a6.icon
			: warningIcon;

			walletappbadge2.$set(walletappbadge2_changes);

			if (!current || dirty & /*validAppChain*/ 16 && div8_style_value !== (div8_style_value = `border-color: var(${/*validAppChain*/ ctx[4]
			? '--onboard-primary-200, var(--primary-200)'
			: '--onboard-warning-500, var(--warning-500)'}); background-color: var(${/*validAppChain*/ ctx[4]
			? '--account-center-minimized-chain-select-background, var(--primary-100)'
			: '--account-center-minimized-chain-select-background-warning, var(--warning-100)'})`)) {
				(0,index_323aef78.k)(div8, "style", div8_style_value);
			}
		},
		i(local) {
			if (current) return;
			(0,index_323aef78.x)(walletappbadge0.$$.fragment, local);
			(0,index_323aef78.x)(walletappbadge1.$$.fragment, local);
			(0,index_323aef78.x)(successstatusicon.$$.fragment, local);
			(0,index_323aef78.x)(if_block);
			(0,index_323aef78.x)(walletappbadge2.$$.fragment, local);
			(0,index_323aef78.x)(networkselector.$$.fragment, local);

			if (local) {
				(0,index_323aef78.U)(() => {
					if (!current) return;
					if (div11_outro) div11_outro.end(1);
					div11_intro = (0,index_323aef78.V)(div11, index_323aef78.X, { duration: 250 });
					div11_intro.start();
				});
			}

			current = true;
		},
		o(local) {
			(0,index_323aef78.A)(walletappbadge0.$$.fragment, local);
			(0,index_323aef78.A)(walletappbadge1.$$.fragment, local);
			(0,index_323aef78.A)(successstatusicon.$$.fragment, local);
			(0,index_323aef78.A)(walletappbadge2.$$.fragment, local);
			(0,index_323aef78.A)(networkselector.$$.fragment, local);
			if (div11_intro) div11_intro.invalidate();
			div11_outro = (0,index_323aef78.ak)(div11, index_323aef78.X, { duration: 100 });
			current = false;
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(div11);
			(0,index_323aef78.K)(walletappbadge0);
			(0,index_323aef78.K)(walletappbadge1);
			(0,index_323aef78.K)(successstatusicon);
			if (if_block) if_block.d();
			(0,index_323aef78.K)(walletappbadge2);
			(0,index_323aef78.K)(networkselector);
			if (detaching && div11_outro) div11_outro.end();
			mounted = false;
			(0,index_323aef78.L)(dispose);
		}
	};
}

function instance$2($$self, $$props, $$invalidate) {
	let primaryWallet;
	let firstAccount;
	let ensName;
	let unsName;
	let shortenedFirstAddress;
	let firstAddressAsset;
	let firstAddressBalance;
	let primaryChain;
	let validAppChain;
	let defaultChainStyles;
	let $wallets$;
	let $appMetadata$;
	(0,index_323aef78.c)($$self, index_323aef78.w, $$value => $$invalidate(14, $wallets$ = $$value));
	let { toggle } = $$props;
	const appMetadata$ = index_323aef78.a3.select('appMetadata').pipe((0,startWith/* startWith */.Z)(index_323aef78.a3.get().appMetadata), (0,shareReplay/* shareReplay */.t)(1));
	(0,index_323aef78.c)($$self, appMetadata$, value => $$invalidate(9, $appMetadata$ = value));
	const chains = index_323aef78.a3.get().chains;

	function click_handler(event) {
		index_323aef78.ai.call(this, $$self, event);
	}

	$$self.$$set = $$props => {
		if ('toggle' in $$props) $$invalidate(0, toggle = $$props.toggle);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$wallets$*/ 16384) {
			$$invalidate(1, [primaryWallet] = $wallets$, primaryWallet);
		}

		if ($$self.$$.dirty & /*primaryWallet*/ 2) {
			$$invalidate(13, [firstAccount] = primaryWallet ? primaryWallet.accounts : [], firstAccount);
		}

		if ($$self.$$.dirty & /*firstAccount*/ 8192) {
			$$invalidate(8, ensName = firstAccount && firstAccount.ens && (0,index_323aef78.D)(firstAccount.ens.name));
		}

		if ($$self.$$.dirty & /*firstAccount*/ 8192) {
			$$invalidate(7, unsName = firstAccount && firstAccount.uns && (0,index_323aef78.D)(firstAccount.uns.name));
		}

		if ($$self.$$.dirty & /*firstAccount*/ 8192) {
			$$invalidate(6, shortenedFirstAddress = firstAccount ? (0,index_323aef78.E)(firstAccount.address) : '');
		}

		if ($$self.$$.dirty & /*firstAccount*/ 8192) {
			$$invalidate(
				2,
				[firstAddressAsset] = firstAccount && firstAccount.balance
				? Object.keys(firstAccount.balance)
				: [],
				firstAddressAsset
			);
		}

		if ($$self.$$.dirty & /*firstAccount, firstAddressAsset*/ 8196) {
			$$invalidate(5, firstAddressBalance = firstAccount && firstAccount.balance
			? firstAccount.balance[firstAddressAsset]
			: null);
		}

		if ($$self.$$.dirty & /*primaryWallet*/ 2) {
			$$invalidate(12, primaryChain = primaryWallet && primaryWallet.chains[0]);
		}

		if ($$self.$$.dirty & /*primaryChain*/ 4096) {
			$$invalidate(4, validAppChain = chains.find(({ id, namespace }) => primaryChain
			? id === primaryChain.id && namespace === primaryChain.namespace
			: false));
		}

		if ($$self.$$.dirty & /*primaryChain*/ 4096) {
			$$invalidate(3, defaultChainStyles = (0,index_323aef78.a4)(primaryChain && primaryChain.id));
		}
	};

	return [
		toggle,
		primaryWallet,
		firstAddressAsset,
		defaultChainStyles,
		validAppChain,
		firstAddressBalance,
		shortenedFirstAddress,
		unsName,
		ensName,
		$appMetadata$,
		appMetadata$,
		chains,
		primaryChain,
		firstAccount,
		$wallets$,
		click_handler
	];
}

class AcctCenterTriggerLarge extends index_323aef78.S {
	constructor(options) {
		super();
		(0,index_323aef78.i)(this, options, instance$2, create_fragment$2, index_323aef78.s, { toggle: 0 }, add_css$2);
	}
}

/* src/views/account-center/AcctCenterTriggerSmall.svelte generated by Svelte v3.59.2 */

function add_css$1(target) {
	(0,index_323aef78.a)(target, "svelte-1o9vinu", ".ac-trigger.svelte-1o9vinu{--background-color:var(\n      --account-center-minimized-background,\n      var(--w3o-background-color, white)\n    );--text-color:var(--w3o-text-color, var(--gray-700));--border-color:var(\n      --account-center-border,\n      var(--w3o-border-color, var(--onboard-gray-200, var(--gray-200)))\n    );--border-radius:var(\n      --account-center-border-radius,\n      var(--w3o-border-radius, 1rem)\n    );position:relative;cursor:pointer;pointer-events:auto;min-width:80px;background:var(--background-color);color:var(--text-color);border:1px solid var(--border-color);border-radius:var(--border-radius);box-shadow:var(\n      --account-center-box-shadow,\n      var(--onboard-shadow-3, var(--shadow-3))\n    );z-index:var(--account-center-z-index, 1)}.wallet-square-wrapper.svelte-1o9vinu{position:relative;margin-left:-8px}.check-icon-wrapper.svelte-1o9vinu{position:absolute;right:-4px;bottom:-4px}.inner-row.svelte-1o9vinu{display:flex;flex-flow:row nowrap;width:80px;padding:0.75rem}.drop-shadow.svelte-1o9vinu{filter:drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.2))}");
}

function create_fragment$1(ctx) {
	let div5;
	let div4;
	let div0;
	let walletappbadge0;
	let t0;
	let div3;
	let div1;
	let walletappbadge1;
	let t1;
	let div2;
	let successstatusicon;
	let div5_style_value;
	let current;
	let mounted;
	let dispose;

	walletappbadge0 = new index_323aef78.W({
			props: {
				size: 32,
				padding: 4,
				background: 'white',
				border: "darkGreen",
				radius: 8,
				icon: /*$appMetadata$*/ ctx[3] && /*$appMetadata$*/ ctx[3].icon || index_323aef78.ae
			}
		});

	walletappbadge1 = new index_323aef78.W({
			props: {
				size: 32,
				padding: 4,
				background: "green",
				border: "darkGreen",
				radius: 8,
				icon: /*primaryWallet*/ ctx[1]
				? /*primaryWallet*/ ctx[1].icon
				: ''
			}
		});

	successstatusicon = new index_323aef78.R({ props: { size: 14 } });

	return {
		c() {
			div5 = (0,index_323aef78.j)("div");
			div4 = (0,index_323aef78.j)("div");
			div0 = (0,index_323aef78.j)("div");
			(0,index_323aef78.F)(walletappbadge0.$$.fragment);
			t0 = (0,index_323aef78.G)();
			div3 = (0,index_323aef78.j)("div");
			div1 = (0,index_323aef78.j)("div");
			(0,index_323aef78.F)(walletappbadge1.$$.fragment);
			t1 = (0,index_323aef78.G)();
			div2 = (0,index_323aef78.j)("div");
			(0,index_323aef78.F)(successstatusicon.$$.fragment);
			(0,index_323aef78.k)(div0, "class", "drop-shadow svelte-1o9vinu");
			(0,index_323aef78.k)(div1, "class", "drop-shadow svelte-1o9vinu");
			(0,index_323aef78.k)(div2, "class", "check-icon-wrapper drop-shadow svelte-1o9vinu");
			(0,index_323aef78.k)(div3, "class", "wallet-square-wrapper svelte-1o9vinu");
			(0,index_323aef78.k)(div4, "class", "inner-row svelte-1o9vinu");
			(0,index_323aef78.k)(div5, "class", "ac-trigger svelte-1o9vinu");

			(0,index_323aef78.k)(div5, "style", div5_style_value = /*$accountCenter$*/ ctx[2].position.includes('Left')
			? 'align-self: flex-start'
			: null);
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, div5, anchor);
			(0,index_323aef78.m)(div5, div4);
			(0,index_323aef78.m)(div4, div0);
			(0,index_323aef78.I)(walletappbadge0, div0, null);
			(0,index_323aef78.m)(div4, t0);
			(0,index_323aef78.m)(div4, div3);
			(0,index_323aef78.m)(div3, div1);
			(0,index_323aef78.I)(walletappbadge1, div1, null);
			(0,index_323aef78.m)(div3, t1);
			(0,index_323aef78.m)(div3, div2);
			(0,index_323aef78.I)(successstatusicon, div2, null);
			current = true;

			if (!mounted) {
				dispose = (0,index_323aef78.p)(div5, "click", (0,index_323aef78.J)(function () {
					if ((0,index_323aef78.Z)(/*toggle*/ ctx[0])) /*toggle*/ ctx[0].apply(this, arguments);
				}));

				mounted = true;
			}
		},
		p(new_ctx, [dirty]) {
			ctx = new_ctx;
			const walletappbadge0_changes = {};
			if (dirty & /*$appMetadata$*/ 8) walletappbadge0_changes.icon = /*$appMetadata$*/ ctx[3] && /*$appMetadata$*/ ctx[3].icon || index_323aef78.ae;
			walletappbadge0.$set(walletappbadge0_changes);
			const walletappbadge1_changes = {};

			if (dirty & /*primaryWallet*/ 2) walletappbadge1_changes.icon = /*primaryWallet*/ ctx[1]
			? /*primaryWallet*/ ctx[1].icon
			: '';

			walletappbadge1.$set(walletappbadge1_changes);

			if (!current || dirty & /*$accountCenter$*/ 4 && div5_style_value !== (div5_style_value = /*$accountCenter$*/ ctx[2].position.includes('Left')
			? 'align-self: flex-start'
			: null)) {
				(0,index_323aef78.k)(div5, "style", div5_style_value);
			}
		},
		i(local) {
			if (current) return;
			(0,index_323aef78.x)(walletappbadge0.$$.fragment, local);
			(0,index_323aef78.x)(walletappbadge1.$$.fragment, local);
			(0,index_323aef78.x)(successstatusicon.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,index_323aef78.A)(walletappbadge0.$$.fragment, local);
			(0,index_323aef78.A)(walletappbadge1.$$.fragment, local);
			(0,index_323aef78.A)(successstatusicon.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(div5);
			(0,index_323aef78.K)(walletappbadge0);
			(0,index_323aef78.K)(walletappbadge1);
			(0,index_323aef78.K)(successstatusicon);
			mounted = false;
			dispose();
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let primaryWallet;
	let $wallets$;
	let $accountCenter$;
	let $appMetadata$;
	(0,index_323aef78.c)($$self, index_323aef78.w, $$value => $$invalidate(6, $wallets$ = $$value));
	let { toggle } = $$props;
	const appMetadata$ = index_323aef78.a3.select('appMetadata').pipe((0,startWith/* startWith */.Z)(index_323aef78.a3.get().appMetadata), (0,shareReplay/* shareReplay */.t)(1));
	(0,index_323aef78.c)($$self, appMetadata$, value => $$invalidate(3, $appMetadata$ = value));
	const accountCenter$ = index_323aef78.a3.select('accountCenter').pipe((0,startWith/* startWith */.Z)(index_323aef78.a3.get().accountCenter), (0,shareReplay/* shareReplay */.t)(1));
	(0,index_323aef78.c)($$self, accountCenter$, value => $$invalidate(2, $accountCenter$ = value));

	$$self.$$set = $$props => {
		if ('toggle' in $$props) $$invalidate(0, toggle = $$props.toggle);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$wallets$*/ 64) {
			$$invalidate(1, [primaryWallet] = $wallets$, primaryWallet);
		}
	};

	return [
		toggle,
		primaryWallet,
		$accountCenter$,
		$appMetadata$,
		appMetadata$,
		accountCenter$,
		$wallets$
	];
}

class AcctCenterTriggerSmall extends index_323aef78.S {
	constructor(options) {
		super();
		(0,index_323aef78.i)(this, options, instance$1, create_fragment$1, index_323aef78.s, { toggle: 0 }, add_css$1);
	}
}

/* src/views/account-center/Index.svelte generated by Svelte v3.59.2 */

function add_css(target) {
	(0,index_323aef78.a)(target, "svelte-1nua59o", ".ac-container.svelte-1nua59o{display:flex;flex-flow:column;align-items:flex-end;gap:0.5rem}");
}

// (37:2) {#if $accountCenter$.position.includes('bottom')}
function create_if_block_2(ctx) {
	let accountcenterpanel;
	let current;
	accountcenterpanel = new AccountCenterPanel({ props: { expanded: /*expanded*/ ctx[0] } });

	return {
		c() {
			(0,index_323aef78.F)(accountcenterpanel.$$.fragment);
		},
		m(target, anchor) {
			(0,index_323aef78.I)(accountcenterpanel, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const accountcenterpanel_changes = {};
			if (dirty & /*expanded*/ 1) accountcenterpanel_changes.expanded = /*expanded*/ ctx[0];
			accountcenterpanel.$set(accountcenterpanel_changes);
		},
		i(local) {
			if (current) return;
			(0,index_323aef78.x)(accountcenterpanel.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,index_323aef78.A)(accountcenterpanel.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,index_323aef78.K)(accountcenterpanel, detaching);
		}
	};
}

// (42:2) {:else}
function create_else_block(ctx) {
	let triggerlarge;
	let current;
	triggerlarge = new AcctCenterTriggerLarge({ props: { toggle: /*toggle*/ ctx[4] } });

	return {
		c() {
			(0,index_323aef78.F)(triggerlarge.$$.fragment);
		},
		m(target, anchor) {
			(0,index_323aef78.I)(triggerlarge, target, anchor);
			current = true;
		},
		p: index_323aef78.n,
		i(local) {
			if (current) return;
			(0,index_323aef78.x)(triggerlarge.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,index_323aef78.A)(triggerlarge.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,index_323aef78.K)(triggerlarge, detaching);
		}
	};
}

// (40:2) {#if $accountCenter$.minimal}
function create_if_block_1(ctx) {
	let triggersmall;
	let current;
	triggersmall = new AcctCenterTriggerSmall({ props: { toggle: /*toggle*/ ctx[4] } });

	return {
		c() {
			(0,index_323aef78.F)(triggersmall.$$.fragment);
		},
		m(target, anchor) {
			(0,index_323aef78.I)(triggersmall, target, anchor);
			current = true;
		},
		p: index_323aef78.n,
		i(local) {
			if (current) return;
			(0,index_323aef78.x)(triggersmall.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,index_323aef78.A)(triggersmall.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,index_323aef78.K)(triggersmall, detaching);
		}
	};
}

// (45:2) {#if $accountCenter$.position.includes('top')}
function create_if_block(ctx) {
	let accountcenterpanel;
	let current;
	accountcenterpanel = new AccountCenterPanel({ props: { expanded: /*expanded*/ ctx[0] } });

	return {
		c() {
			(0,index_323aef78.F)(accountcenterpanel.$$.fragment);
		},
		m(target, anchor) {
			(0,index_323aef78.I)(accountcenterpanel, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const accountcenterpanel_changes = {};
			if (dirty & /*expanded*/ 1) accountcenterpanel_changes.expanded = /*expanded*/ ctx[0];
			accountcenterpanel.$set(accountcenterpanel_changes);
		},
		i(local) {
			if (current) return;
			(0,index_323aef78.x)(accountcenterpanel.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,index_323aef78.A)(accountcenterpanel.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,index_323aef78.K)(accountcenterpanel, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let show_if_1 = /*$accountCenter$*/ ctx[1].position.includes('bottom');
	let t0;
	let current_block_type_index;
	let if_block1;
	let t1;
	let show_if = /*$accountCenter$*/ ctx[1].position.includes('top');
	let current;
	let mounted;
	let dispose;
	let if_block0 = show_if_1 && create_if_block_2(ctx);
	const if_block_creators = [create_if_block_1, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*$accountCenter$*/ ctx[1].minimal) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	let if_block2 = show_if && create_if_block(ctx);

	return {
		c() {
			div = (0,index_323aef78.j)("div");
			if (if_block0) if_block0.c();
			t0 = (0,index_323aef78.G)();
			if_block1.c();
			t1 = (0,index_323aef78.G)();
			if (if_block2) if_block2.c();
			(0,index_323aef78.k)(div, "class", "ac-container svelte-1nua59o");
		},
		m(target, anchor) {
			(0,index_323aef78.b)(target, div, anchor);
			if (if_block0) if_block0.m(div, null);
			(0,index_323aef78.m)(div, t0);
			if_blocks[current_block_type_index].m(div, null);
			(0,index_323aef78.m)(div, t1);
			if (if_block2) if_block2.m(div, null);
			current = true;

			if (!mounted) {
				dispose = (0,index_323aef78.p)(window, "click", /*minimize*/ ctx[3]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*$accountCenter$*/ 2) show_if_1 = /*$accountCenter$*/ ctx[1].position.includes('bottom');

			if (show_if_1) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty & /*$accountCenter$*/ 2) {
						(0,index_323aef78.x)(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					(0,index_323aef78.x)(if_block0, 1);
					if_block0.m(div, t0);
				}
			} else if (if_block0) {
				(0,index_323aef78.y)();

				(0,index_323aef78.A)(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				(0,index_323aef78.z)();
			}

			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				(0,index_323aef78.y)();

				(0,index_323aef78.A)(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				(0,index_323aef78.z)();
				if_block1 = if_blocks[current_block_type_index];

				if (!if_block1) {
					if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block1.c();
				} else {
					if_block1.p(ctx, dirty);
				}

				(0,index_323aef78.x)(if_block1, 1);
				if_block1.m(div, t1);
			}

			if (dirty & /*$accountCenter$*/ 2) show_if = /*$accountCenter$*/ ctx[1].position.includes('top');

			if (show_if) {
				if (if_block2) {
					if_block2.p(ctx, dirty);

					if (dirty & /*$accountCenter$*/ 2) {
						(0,index_323aef78.x)(if_block2, 1);
					}
				} else {
					if_block2 = create_if_block(ctx);
					if_block2.c();
					(0,index_323aef78.x)(if_block2, 1);
					if_block2.m(div, null);
				}
			} else if (if_block2) {
				(0,index_323aef78.y)();

				(0,index_323aef78.A)(if_block2, 1, 1, () => {
					if_block2 = null;
				});

				(0,index_323aef78.z)();
			}
		},
		i(local) {
			if (current) return;
			(0,index_323aef78.x)(if_block0);
			(0,index_323aef78.x)(if_block1);
			(0,index_323aef78.x)(if_block2);
			current = true;
		},
		o(local) {
			(0,index_323aef78.A)(if_block0);
			(0,index_323aef78.A)(if_block1);
			(0,index_323aef78.A)(if_block2);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,index_323aef78.d)(div);
			if (if_block0) if_block0.d();
			if_blocks[current_block_type_index].d();
			if (if_block2) if_block2.d();
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $accountCenter$;
	let expanded = false;
	const accountCenter$ = index_323aef78.a3.select('accountCenter').pipe((0,startWith/* startWith */.Z)(index_323aef78.a3.get().accountCenter), (0,shareReplay/* shareReplay */.t)(1));
	(0,index_323aef78.c)($$self, accountCenter$, value => $$invalidate(1, $accountCenter$ = value));
	(0,index_323aef78.al)(minimize);

	function minimize() {
		if ($accountCenter$.expanded) {
			(0,index_323aef78.am)({ expanded: false });
			$$invalidate(0, expanded = false);
		}
	}

	function toggle() {
		(0,index_323aef78.am)({ expanded: !$accountCenter$.expanded });
		$$invalidate(0, expanded = !expanded);
	}

	return [expanded, $accountCenter$, accountCenter$, minimize, toggle];
}

class Index extends index_323aef78.S {
	constructor(options) {
		super();
		(0,index_323aef78.i)(this, options, instance, create_fragment, index_323aef78.s, {}, add_css);
	}
}


//# sourceMappingURL=Index-a4a1058e.js.map


/***/ })

}]);
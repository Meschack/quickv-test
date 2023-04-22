;(() => {
  var t = {
      2065: (t, e, a) => {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.AbstractInputValidator = void 0)
        const i = a(1823)
        e.AbstractInputValidator = class {
          constructor(t, e = !0) {
            ;(this.emitEvent = e),
              (this.feedbackElement = null),
              (this.rules = []),
              (this.messages = {}),
              (this._errors = []),
              (this.name = ''),
              (this.showMessage = 'first'),
              (this.showMessages = ['first', 'full', 'last']),
              (this.validClass = ''),
              (this.invalidClass = 'is-invalid'),
              (this.events = ['blur', 'input', 'change']),
              this.setInputElement(t),
              this.setInputRules(),
              this.setInputName(),
              this.setFeedbackElement(),
              this.setShowMessage(),
              this.setClass(),
              this.getElementQvMessages(),
              this.setEvent()
          }
          setInputRules() {
            var t
            let e =
              null !== (t = this.inputElement.dataset.qvRules) && void 0 !== t
                ? t
                : ''
            return e && (this.rules = e.split('|')), this
          }
          setEvent() {
            let t = this.inputElement.dataset.qvEvents
            'file' == this.inputElement.type && (t = 'focus|change'),
              t && (this.events = t.split('|'))
          }
          setInputElement(t) {
            if (!(t instanceof HTMLElement)) {
              const e = document.querySelector(t)
              e && (t = e)
            }
            if (!(t instanceof HTMLElement))
              throw new Error(
                "The 'inputElement' parameter must be of type HTMLElement."
              )
            this.inputElement = t
          }
          init() {
            return (
              this.events.forEach((t) => {
                this.inputElement.addEventListener(t, () => {
                  this.validate()
                })
              }),
              this
            )
          }
          setInputName() {
            let t = this.inputElement.name
            if (
              (this.inputElement.dataset.qvName &&
                (t = this.inputElement.dataset.qvName),
              null == t || ('string' == typeof t && t.length < 0))
            )
              throw new Error('The input name could not be empty or null')
            this.name = t
          }
          set errors(t) {
            ;(this._errors = t ? t.get(this.name) : []),
              this.setErrorsMessages()
          }
          setFeedbackElement() {
            let t = this.inputElement.parentElement,
              e = null
            for (; t && !e; )
              (e = t.querySelector(`[data-qv-feedback='${this.name}']`)),
                (t = t.parentElement)
            this.feedbackElement = e
          }
          setErrorsMessages() {
            if (
              (this.feedbackElement,
              HTMLElement,
              this.feedbackElement instanceof HTMLElement &&
                Array.isArray(this._errors))
            ) {
              let t = this._errors[0]
              'full' == this.showMessage
                ? (t = this._errors.join('<br>'))
                : 'last' == this.showMessage &&
                  this._errors.length > 0 &&
                  (t = this._errors[this._errors.length - 1]),
                (this.feedbackElement.innerHTML = null != t ? t : '')
            }
          }
          setShowMessage() {
            var t
            ;(this.showMessage =
              null !== (t = this.inputElement.dataset.qvShow) && void 0 !== t
                ? t
                : 'first'),
              (this.showMessage = this.showMessages.includes(this.showMessage)
                ? this.showMessage
                : 'first')
          }
          setClass() {
            var t, e
            ;(this.invalidClass =
              null !== (t = this.inputElement.dataset.qvInvalidClass) &&
              void 0 !== t
                ? t
                : this.invalidClass),
              (this.validClass =
                null !== (e = this.inputElement.dataset.qvValidClass) &&
                void 0 !== e
                  ? e
                  : this.validClass)
          }
          setValidationClass(t) {
            const e = (t) => {
                t.length > 0 && this.inputElement.classList.remove(t)
              },
              a = (t) => {
                t.length > 0 && this.inputElement.classList.add(t)
              }
            t
              ? (this.invalidClass.split(' ').forEach(e),
                this.validClass.split(' ').forEach(a),
                this.inputElement.setAttribute('data-qv-valid', '1'))
              : (this.validClass.split(' ').forEach(e),
                this.invalidClass.split(' ').forEach(a),
                this.inputElement.setAttribute('data-qv-valid', '0'))
          }
          getElementQvMessages() {
            const t = this.inputElement.dataset.qvMessages
            let e = {}
            for (let a = 0; a < this.rules.length; a++) {
              const r = null == t ? void 0 : t.split('|').map((t) => t.trim()),
                u = void 0 !== r ? r[a] : '',
                n = (0, i.getRule)(this.rules[a]).ruleName
              'string' == typeof u &&
                u.length > 0 &&
                (e[`${n}.${this.name}`] = u)
            }
            this.messages = e
          }
        }
      },
      8808: function (t, e, a) {
        'use strict'
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t }
          }
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.Quickv = void 0)
        const r = a(3389),
          u = a(7285),
          n = i(a(9449))
        e.Quickv = class {
          constructor() {
            this.lang = 'en'
          }
          init() {
            var t, e
            document.querySelectorAll('form').forEach((t) => {
              new u.QvForm(t).init()
            })
            const a = document.querySelector('html')
            a &&
              (this.lang =
                null !==
                  (e =
                    null !== (t = a.getAttribute('lang')) && void 0 !== t
                      ? t
                      : a.getAttribute('data-qv-lang')) && void 0 !== e
                  ? e
                  : this.lang),
              n.default.useLang(this.lang)
          }
          rule(t, e, a) {
            r.Qvalidator.ruleStatic(t, e, a)
          }
          static staticRule(t, e, a) {
            r.Qvalidator.ruleStatic(t, e, a)
          }
        }
      },
      7285: (t, e, a) => {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.QvForm = void 0)
        const i = a(3389),
          r = a(2653)
        e.QvForm = class {
          constructor(t) {
            this.setContainer(t)
          }
          setContainer(t) {
            if (!(t instanceof HTMLElement)) {
              const e = document.querySelector(t)
              e && (t = e)
            }
            if (!(t instanceof HTMLElement))
              throw new Error(
                "The 'container' parameter must be of type HTMLElement."
              )
            this.container = t
            const e = this.container.querySelector('[data-qv-submit]')
            e && (this.submitButton = e)
          }
          init() {
            this.disableButton(),
              this.container
                .querySelectorAll('[data-qv-rules]')
                .forEach((t) => {
                  new r.QvInput(t).init()
                }),
              this.handle(),
              this.onSubmit()
          }
          disableButton() {
            this.submitButton &&
              this.submitButton.setAttribute('disabled', 'true')
          }
          enableButton() {
            this.submitButton && this.submitButton.removeAttribute('disabled')
          }
          handle() {
            const t = () => {
              this.isValid() ? this.enableButton() : this.disableButton()
            }
            ;['change', 'qv-change'].forEach((e) => {
              this.container.addEventListener(e, (e) => {
                e.stopPropagation(), t()
              })
            })
          }
          isValid() {
            return [
              ...this.container.querySelectorAll('[data-qv-rules]'),
            ].every((t) => new r.QvInput(t).valid())
          }
          onSubmit() {
            this.container.addEventListener('submit', (t) => {
              this.container
                .querySelectorAll('[data-qv-rules]')
                .forEach((t) => {
                  new r.QvInput(t, !1).validate()
                }),
                this.isValid() || t.preventDefault()
            })
          }
          rule(t, e, a) {
            i.Qvalidator.ruleStatic(t, e, a)
          }
        }
      },
      2653: (t, e, a) => {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.QvInput = void 0)
        const i = a(3389),
          r = a(3957),
          u = a(2065)
        class n extends u.AbstractInputValidator {
          constructor(t, e = !0) {
            super(t, e)
          }
          emitChangeEvent() {
            this.emitEvent &&
              this.inputElement.dispatchEvent(
                new CustomEvent('qv-change', {
                  detail: {
                    rules: this.rules,
                    input: {},
                    element: this.inputElement,
                  },
                  bubbles: !0,
                })
              )
          }
          valid() {
            const t = {},
              e = {}
            'file' != this.inputElement.type.toLowerCase()
              ? (t[this.name] = this.inputElement.value)
              : (t[this.name] = this.inputElement.files),
              (e[this.name] = this.rules)
            const a = new r.QvMessages(this.messages)
            return (
              (this.validator = i.Qvalidator.make(e, t, a)),
              this.validator.isValid()
            )
          }
          fails() {
            return !this.valid()
          }
          validate() {
            this.setValidationClass(this.valid()),
              (this.errors = this.validator.getMessages()),
              this.emitChangeEvent()
          }
          rule(t, e, a) {
            i.Qvalidator.ruleStatic(t, e, a)
          }
        }
        e.QvInput = n
      },
      3740: (t, e) => {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.QUICKV_MESSAGES = void 0),
          (e.QUICKV_MESSAGES = {
            minlength: 'This field is too short',
            maxlength: 'This field is too long',
            number: 'This field must be a number',
          })
      },
      3957: (t, e) => {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.QvMessages = void 0),
          (e.QvMessages = class {
            constructor(t) {
              this.bag = t
            }
            getMessages() {
              return this.bag
            }
          })
      },
      3389: function (t, e, a) {
        'use strict'
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t }
          }
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.Qvalidator = void 0)
        const r = i(a(9449)),
          u = a(3740),
          n = a(7489)
        class s {
          constructor() {
            this.validated = {}
          }
          static make(t, e, a) {
            const i = new s()
            let u
            i.setRules(), a && (u = a.getMessages())
            const n = new r.default(e, t, u)
            return n.fails() && (i.errors = n.errors), i
          }
          fails() {
            return !!this.errors
          }
          getMessages() {
            return this.errors
          }
          getValidated() {
            return this.validated
          }
          isValid() {
            return !this.fails()
          }
          setRules() {
            for (let t in s.rulesBag)
              if (s.messagessBag.hasOwnProperty(t)) {
                const e = s.messagessBag[t],
                  a = s.rulesBag[t]
                r.default.register(t, a, e)
              }
          }
          rule(t, e, a) {
            r.default.register(t, e, a)
          }
          static ruleStatic(t, e, a) {
            r.default.register(t, e, a)
          }
        }
        ;(s.rulesBag = n.QUICKV_RULES),
          (s.messagessBag = u.QUICKV_MESSAGES),
          (e.Qvalidator = s)
      },
      7489: (t, e, a) => {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.QUICKV_RULES = void 0)
        const i = a(4779),
          r = a(6808)
        e.QUICKV_RULES = {
          minlength: i.minlength,
          maxlength: i.maxlength,
          number: r.isNumber,
        }
      },
      4779: (t, e) => {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.url = e.is_string = e.maxlength = e.minlength = e.isFile = void 0),
          (e.isFile = (t) =>
            '[object File]' === Object.prototype.toString.call(t) ||
            '[object Blob]' === Object.prototype.toString.call(t)),
          (e.minlength = (t, e) =>
            !!t &&
            (Array.isArray(t) || 'string' == typeof t
              ? t.length >= e
              : 'object' == typeof t && Object.values(t).length >= e)),
          (e.maxlength = (t, e) =>
            !t ||
            (Array.isArray(t) || 'string' == typeof t
              ? t.length <= e
              : 'object' != typeof t || Object.keys(t).length <= e)),
          (e.is_string = (t) => 'string' == typeof t),
          (e.url = (t) => /^(ftp|http|https):\/\/[^ "]+$/.test(t))
      },
      6808: (t, e) => {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.isNumber = void 0),
          (e.isNumber = (t) =>
            '' !== t &&
            null !== t &&
            ('0' === t ||
              0 === t ||
              '1' === t ||
              1 === t ||
              (!isNaN(Number(t)) &&
                'boolean' != typeof t &&
                'object' != typeof t)))
      },
      1823: (t, e) => {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.ensureRuleMessages = e.ensureRuleBag = e.getRule = void 0),
          (e.getRule = (t) => {
            const e = t.match(/^(\w+):(.+)$/)
            if (e) return { ruleName: e[1], params: e[2].split(',') }
            {
              const [e, ...a] = t.split(':')
              return { ruleName: e, params: a }
            }
          }),
          (e.ensureRuleBag = function (t) {
            for (const e in t)
              if ('function' != typeof t[e])
                throw new Error(`Invalid callback for rule '${e}'`)
            return {}
          }),
          (e.ensureRuleMessages = function (t) {
            for (const e in t)
              if ('string' != typeof t[e])
                throw new Error(`Invalid message for rule '${e}'`)
            return {}
          })
      },
      6601: (t) => {
        function e(t, e) {
          ;(this.onResolvedAll = e),
            (this.onFailedOne = t),
            (this.resolvers = {}),
            (this.resolversCount = 0),
            (this.passed = []),
            (this.failed = []),
            (this.firing = !1)
        }
        ;(e.prototype = {
          add: function (t) {
            var e = this.resolversCount
            return (this.resolvers[e] = t), this.resolversCount++, e
          },
          resolve: function (t) {
            var e = this.resolvers[t]
            !0 === e.passes
              ? this.passed.push(e)
              : !1 === e.passes && (this.failed.push(e), this.onFailedOne(e)),
              this.fire()
          },
          isAllResolved: function () {
            return (
              this.passed.length + this.failed.length === this.resolversCount
            )
          },
          fire: function () {
            this.firing &&
              this.isAllResolved() &&
              this.onResolvedAll(0 === this.failed.length)
          },
          enableFiring: function () {
            this.firing = !0
          },
        }),
          (t.exports = e)
      },
      6319: (t) => {
        t.exports = {
          replacements: {
            between: function (t, e) {
              var a = e.getParameters()
              return this._replacePlaceholders(e, t, { min: a[0], max: a[1] })
            },
            digits_between: function (t, e) {
              var a = e.getParameters()
              return this._replacePlaceholders(e, t, { min: a[0], max: a[1] })
            },
            required_if: function (t, e) {
              var a = e.getParameters()
              return this._replacePlaceholders(e, t, {
                other: this._getAttributeName(a[0]),
                value: a[1],
              })
            },
            required_unless: function (t, e) {
              var a = e.getParameters()
              return this._replacePlaceholders(e, t, {
                other: this._getAttributeName(a[0]),
                value: a[1],
              })
            },
            required_with: function (t, e) {
              var a = e.getParameters()
              return this._replacePlaceholders(e, t, {
                field: this._getAttributeName(a[0]),
              })
            },
            required_with_all: function (t, e) {
              var a = e.getParameters(),
                i = this._getAttributeName.bind(this)
              return this._replacePlaceholders(e, t, {
                fields: a.map(i).join(', '),
              })
            },
            required_without: function (t, e) {
              var a = e.getParameters()
              return this._replacePlaceholders(e, t, {
                field: this._getAttributeName(a[0]),
              })
            },
            required_without_all: function (t, e) {
              var a = e.getParameters(),
                i = this._getAttributeName.bind(this)
              return this._replacePlaceholders(e, t, {
                fields: a.map(i).join(', '),
              })
            },
            after: function (t, e) {
              var a = e.getParameters()
              return this._replacePlaceholders(e, t, {
                after: this._getAttributeName(a[0]),
              })
            },
            before: function (t, e) {
              var a = e.getParameters()
              return this._replacePlaceholders(e, t, {
                before: this._getAttributeName(a[0]),
              })
            },
            after_or_equal: function (t, e) {
              var a = e.getParameters()
              return this._replacePlaceholders(e, t, {
                after_or_equal: this._getAttributeName(a[0]),
              })
            },
            before_or_equal: function (t, e) {
              var a = e.getParameters()
              return this._replacePlaceholders(e, t, {
                before_or_equal: this._getAttributeName(a[0]),
              })
            },
            same: function (t, e) {
              var a = e.getParameters()
              return this._replacePlaceholders(e, t, {
                same: this._getAttributeName(a[0]),
              })
            },
          },
          formatter: function (t) {
            return t.replace(/[_\[]/g, ' ').replace(/]/g, '')
          },
        }
      },
      3995: (t) => {
        var e = function () {
          this.errors = {}
        }
        ;(e.prototype = {
          constructor: e,
          add: function (t, e) {
            this.has(t) || (this.errors[t] = []),
              -1 === this.errors[t].indexOf(e) && this.errors[t].push(e)
          },
          get: function (t) {
            return this.has(t) ? this.errors[t] : []
          },
          first: function (t) {
            return !!this.has(t) && this.errors[t][0]
          },
          all: function () {
            return this.errors
          },
          has: function (t) {
            return !!this.errors.hasOwnProperty(t)
          },
        }),
          (t.exports = e)
      },
      8972: (t, e, a) => {
        var i = a(3367)
        a(437)
        var r = {
          messages: {},
          _set: function (t, e) {
            this.messages[t] = e
          },
          _setRuleMessage: function (t, e, a) {
            this._load(t),
              void 0 === a && (a = this.messages[t].def),
              (this.messages[t][e] = a)
          },
          _load: function (t) {
            if (!this.messages[t])
              try {
                var e = a(2060)('./' + t)
                this._set(t, e)
              } catch (t) {}
          },
          _get: function (t) {
            return this._load(t), this.messages[t]
          },
          _make: function (t) {
            return this._load(t), new i(t, this.messages[t])
          },
        }
        t.exports = r
      },
      8528: (t) => {
        t.exports = {
          accepted: 'الصفة :attribute يجب أن تكون مقبولة',
          after: 'الصفة :attribute يجب أن تكون بعد الصفة :after.',
          after_or_equal:
            'الصفة :attribute يجب أن تكون مساوية أو بعد الصفة :after_or_equal.',
          alpha: 'حقل الصفة  :attribute يجب أن تحتوي على أحرف فقط',
          alpha_dash:
            'حقل الصفة :attribute مسموح بأن يحتوي على حروف و أرقام و شرطة و شرطة منخفضة',
          alpha_num: 'حقل الصفة :attribute يجب أن يحتوي على أحرف و أرقام',
          before: 'الصفة :attribute يجب أن تكون قبل :before.',
          before_or_equal:
            'الصفة :attribute يجب أن تكون مساوية أو قبل الصفة :before_or_equal.',
          between: 'حقل الصفة :attribute يجب أن يكون بين :min و :max.',
          confirmed: 'تأكيد الصفة :attribute غير متطابق.',
          email: 'الصفة :attribute صيغتها غير صحيحة',
          date: 'الصفة :attribute صيغتها ليست تاريخ صحيح',
          def: 'الصفة :attribute تحتوي على أخطاء',
          digits: 'الصفة :attribute يجب أن تكون :digits أرقام.',
          digits_between:
            'يجب أن يحتوي :attribute بين :min و :max رقمًا/أرقام .',
          different:
            'الصفة :attribute و الصفة :different يجب أن تكونا مختلفتين',
          in: 'الصفة :attribute المختارة، غير صحيحة.',
          integer: 'الصفة :attribute يجب أن تكون عدد صحيح',
          hex: 'حقل الصفة :attribute يجب أن يحتوي على صيغة هكسيديسمل',
          min: {
            numeric: 'الصفة :attribute يجب أن تكون :min على الأقل',
            string: 'الصفة :attribute يجب أن تكون :min حرف على الأقل.',
          },
          max: {
            numeric: 'الصفة :attribute لا يمكن أن تكون أكبر من  :max.',
            string: 'الصفة :attribute يجب أن لا تكون أكثر من :max حرف.',
          },
          not_in: 'الصفة :attribute المختارة غير صحيحة.',
          numeric: 'الصفة :attribute يجب أن تكون رقما.',
          present:
            'حقل الصفة :attribute يجب أن يكون معرفا ، يمكن أن يكون فارغا.',
          required: 'حقل الصفة :attribute مطلوب.',
          required_if:
            'حقل الصفة :attribute مطلوب حين تكون قيمة الحقل :other تساوي :value.',
          required_unless:
            'حقل الصفة :attribute مطلوب حين تكون قيم الحقل :other لا تساوي :value.',
          required_with:
            'حقل الصفة :attribute مطلوب حين يكون الحقا :field غير فارغ.',
          required_with_all:
            'حقل الصفة :attribute مطلوب حين تكون الحقول :fields غير فارغة.',
          required_without:
            'حقل الصفة :attribute مطلوب حين يكون الحقل :field فارغا.',
          required_without_all:
            'حقل الصفة :attribute مطلوب حين تكون الحقول :fields فارغة.',
          same: 'حقل الصفة :attribute و حقل الصفة :same يجب أن يتطابقا.',
          size: {
            numeric: 'الصفة :attribute يجب أن تكون :size.',
            string: 'الصفة :attribute يجب أن تكون :size حرفا.',
          },
          string: 'الصفة :attribute يجب أن تكون نص.',
          url: 'الصفة :attribute صياغتها غير صحيحة.',
          regex: 'الصفة :attribute صياغتها غير صحيحة.',
          attributes: {
            username: 'اسم المستخدم',
            password: 'كلمة المرور',
            email: 'البريد الالكتروني',
            website: 'الموقع الالكتروني',
            firstname: 'الاسم الاول',
            lastname: 'الاسم الاخير',
            subject: 'الموضوع',
            city: 'المدينة',
            region: 'المنطقة',
            country: 'الدولة',
            street: 'الشارع',
            zipcode: 'الرمز البريدي',
            phone: 'رقم الهاتف',
            mobile: 'رقم الجوال',
          },
        }
      },
      8173: (t) => {
        t.exports = {
          accepted: ':attribute qəbul edilməlidir',
          active_url: ':attribute doğru URL deyil',
          after: ':attribute :date tarixindən sonra olmalıdır',
          after_or_equal:
            ':attribute :date tarixi ilə eyni və ya sonra olmalıdır',
          alpha: ':attribute yalnız hərflərdən ibarət ola bilər',
          alpha_dash:
            ':attribute yalnız hərf, rəqəm və tire simvolundan ibarət ola bilər',
          alpha_num: ':attribute yalnız hərf və rəqəmlərdən ibarət ola bilər',
          array: ':attribute massiv formatında olmalıdır',
          before: ':attribute :date tarixindən əvvəl olmalıdır',
          before_or_equal:
            ':attribute :date tarixindən əvvəl və ya bərabər olmalıdır',
          between: {
            numeric: ':attribute :min ilə :max arasında olmalıdır',
            file: ':attribute :min ilə :max KB ölçüsü intervalında olmalıdır',
            string: ':attribute :min ilə :max simvolu intervalında olmalıdır',
            array:
              ':attribute :min ilə :max intervalında hissədən ibarət olmalıdır',
          },
          boolean: ' :attribute doğru və ya yanlış ola bilər',
          confirmed: ' :attribute doğrulanması yanlışdır',
          date: ' :attribute tarix formatında olmalıdır',
          date_format: ' :attribute :format formatında olmalıdır',
          different: ' :attribute və :other fərqli olmalıdır',
          digits: ' :attribute :digits rəqəmli olmalıdır',
          digits_between:
            ' :attribute :min ilə :max rəqəmləri intervalında olmalıdır',
          dimensions: ' :attribute doğru şəkil ölçülərində deyil',
          distinct: ' :attribute dublikat qiymətlidir',
          email: ' :attribute doğru email formatında deyil',
          exists: ' seçilmiş :attribute yanlışdır',
          file: ' :attribute fayl formatında olmalıdır',
          filled: ' :attribute qiyməti olmalıdır',
          gt: {
            numeric: 'The :attribute must be greater than :value.',
            file: 'The :attribute must be greater than :value kilobytes.',
            string: 'The :attribute must be greater than :value characters.',
            array: 'The :attribute must have more than :value items.',
          },
          gte: {
            numeric: 'The :attribute must be greater than or equal :value.',
            file: 'The :attribute must be greater than or equal :value kilobytes.',
            string:
              'The :attribute must be greater than or equal :value characters.',
            array: 'The :attribute must have :value items or more.',
          },
          image: ' :attribute şəkil formatında olmalıdır',
          in: ' seçilmiş :attribute yanlışdır',
          in_array: ' :attribute :other qiymətləri arasında olmalıdır',
          integer: ' :attribute tam ədəd olmalıdır',
          hex: 'The :attribute field should have hexadecimal format',
          ip: ' :attribute İP adres formatında olmalıdır',
          ipv4: ' :attribute İPv4 adres formatında olmalıdır',
          ipv6: ' :attribute İPv6 adres formatında olmalıdır',
          json: ' :attribute JSON formatında olmalıdır',
          lt: {
            numeric: 'The :attribute must be less than :value.',
            file: 'The :attribute must be less than :value kilobytes.',
            string: 'The :attribute must be less than :value characters.',
            array: 'The :attribute must have less than :value items.',
          },
          lte: {
            numeric: 'The :attribute must be less than or equal :value.',
            file: 'The :attribute must be less than or equal :value kilobytes.',
            string:
              'The :attribute must be less than or equal :value characters.',
            array: 'The :attribute must not have more than :value items.',
          },
          max: {
            numeric: ' :attribute maksiumum :max rəqəmdən ibarət ola bilər',
            file: ' :attribute maksimum :max KB ölçüsündə ola bilər',
            string: ' :attribute maksimum :max simvoldan ibarət ola bilər',
            array: " :attribute maksimum :max hədd'dən ibarət ola bilər",
          },
          mimes: ' :attribute :values tipində fayl olmalıdır',
          mimetypes: ' :attribute :values tipində fayl olmalıdır',
          min: {
            numeric: ' :attribute minimum :min rəqəmdən ibarət ola bilər',
            file: ' :attribute minimum :min KB ölçüsündə ola bilər',
            string: ' :attribute minimum :min simvoldan ibarət ola bilər',
            array: " :attribute minimum :min hədd'dən ibarət ola bilər",
          },
          not_in: ' seçilmiş :attribute yanlışdır',
          numeric: ' :attribute rəqəmlərdən ibarət olmalıdır',
          present: ' :attribute iştirak etməlidir',
          regex: ' :attribute formatı yanlışdır',
          required: ' :attribute mütləqdir',
          required_if: ' :attribute (:other :value ikən) mütləqdir',
          required_unless:
            " :attribute (:other :values 'ə daxil ikən) mütləqdir",
          required_with: ' :attribute (:values var ikən) mütləqdir',
          required_with_all: ' :attribute (:values var ikən) mütləqdir',
          required_without: ' :attribute (:values yox ikən) mütləqdir',
          required_without_all: ' :attribute (:values yox ikən) mütləqdir',
          same: ' :attribute və :other eyni olmalıdır',
          size: {
            numeric: ' :attribute :size ölçüsündə olmalıdır',
            file: ' :attribute :size KB ölçüsündə olmalıdır',
            string: ' :attribute :size simvoldan ibarət olmalıdır',
            array: " :attribute :size hədd'dən ibarət olmalıdır",
          },
          string: ' :attribute hərf formatında olmalıdır',
          timezone: ' :attribute ərazi formatında olmalıdır',
          unique: ' :attribute artıq iştirak edib',
          uploaded: ' :attribute yüklənməsi mümkün olmadı',
          url: ' :attribute formatı yanlışdır',
        }
      },
      7931: (t) => {
        t.exports = {
          accepted: 'Вы павінны прыняць :attribute.',
          active_url: 'Поле :attribute утрымлівае несапраўдны URL.',
          after: 'У полі :attribute павінна быць дата пасля :date.',
          after_or_equal:
            'The :attribute must be a date after or equal to :date.',
          alpha: 'Поле :attribute можа мець толькі літары.',
          alpha_dash:
            'Поле :attribute можа мець толькі літары, лічбы і злучок.',
          alpha_num: 'Поле :attribute можа мець толькі літары і лічбы.',
          array: 'Поле :attribute павінна быць масівам.',
          before: 'У полі :attribute павінна быць дата да :date.',
          before_or_equal:
            'The :attribute must be a date before or equal to :date.',
          between: {
            numeric: 'Поле :attribute павінна быць паміж :min і :max.',
            file: 'Памер файла ў поле :attribute павінен быць паміж :min і :max кілабайт.',
            string:
              'Колькасць сiмвалаў у поле :attribute павінна быць паміж :min і :max.',
            array:
              'Колькасць элементаў у поле :attribute павінна быць паміж :min і :max.',
          },
          boolean: 'Поле :attribute павінна мець значэнне лагічнага тыпу.',
          confirmed: 'Поле :attribute не супадае з пацвярджэннем.',
          date: "Поле :attribute не з'яўляецца датай.",
          date_format: 'Поле :attribute не адпавядае фармату :format.',
          different: 'Палі :attribute і :other павінны адрознівацца.',
          digits: 'Даўжыня лічбавага поля :attribute павінна быць :digits.',
          digits_between:
            'Даўжыня лічбавага поля :attribute павінна быць паміж :min і :max.',
          dimensions: 'The :attribute has invalid image dimensions.',
          distinct: 'The :attribute field has a duplicate value.',
          email: 'Поле :attribute павінна быць сапраўдным электронным адрасам.',
          file: 'The :attribute must be a file.',
          filled: 'Поле :attribute абавязкова для запаўнення.',
          exists: 'Выбранае значэнне для :attribute некарэктна.',
          gt: {
            numeric: 'The :attribute must be greater than :value.',
            file: 'The :attribute must be greater than :value kilobytes.',
            string: 'The :attribute must be greater than :value characters.',
            array: 'The :attribute must have more than :value items.',
          },
          gte: {
            numeric: 'The :attribute must be greater than or equal :value.',
            file: 'The :attribute must be greater than or equal :value kilobytes.',
            string:
              'The :attribute must be greater than or equal :value characters.',
            array: 'The :attribute must have :value items or more.',
          },
          hex: 'The :attribute field should have hexadecimal format',
          image: 'Поле :attribute павінна быць малюнкам.',
          in: 'Выбранае значэнне для :attribute памылкова.',
          in_array: 'The :attribute field does not exist in :other.',
          integer: 'Поле :attribute павінна быць цэлым лікам.',
          ip: 'Поле :attribute дпавінна быць сапраўдным IP-адрасам.',
          ipv4: 'The :attribute must be a valid IPv4 address.',
          ipv6: 'The :attribute must be a valid IPv6 address.',
          json: 'Поле :attribute павінна быць JSON радком.',
          lt: {
            numeric: 'The :attribute must be less than :value.',
            file: 'The :attribute must be less than :value kilobytes.',
            string: 'The :attribute must be less than :value characters.',
            array: 'The :attribute must have less than :value items.',
          },
          lte: {
            numeric: 'The :attribute must be less than or equal :value.',
            file: 'The :attribute must be less than or equal :value kilobytes.',
            string:
              'The :attribute must be less than or equal :value characters.',
            array: 'The :attribute must not have more than :value items.',
          },
          max: {
            numeric: 'Поле :attribute не можа быць больш :max.',
            file: 'Памер файла ў поле :attribute не можа быць больш :max кілабайт).',
            string:
              'Колькасць сiмвалаў у поле :attribute не можа перавышаць :max.',
            array:
              'Колькасць элементаў у поле :attribute не можа перавышаць :max.',
          },
          mimes:
            'Поле :attribute павінна быць файлам аднаго з наступных тыпаў: :values.',
          mimetypes:
            'Поле :attribute павінна быць файлам аднаго з наступных тыпаў: :values.',
          min: {
            numeric: 'Поле :attribute павінна быць не менш :min.',
            file: 'Памер файла ў полее :attribute павінен быць не менш :min кілабайт.',
            string:
              'Колькасць сiмвалаў у поле :attribute павінна быць не менш :min.',
            array:
              'Колькасць элементаў у поле :attribute павінна быць не менш :min.',
          },
          not_in: 'Выбранае значэнне для :attribute памылкова.',
          not_regex: 'The :attribute format is invalid.',
          numeric: 'Поле :attribute павінна быць лікам.',
          present: 'The :attribute field must be present.',
          regex: 'Поле :attribute мае памылковы фармат.',
          required: 'Поле :attribute абавязкова для запаўнення.',
          required_if:
            'Поле :attribute абавязкова для запаўнення, калі :other раўняецца :value.',
          required_unless:
            'Поле :attribute абавязкова для запаўнення, калі :other не раўняецца :values.',
          required_with:
            'Поле :attribute абавязкова для запаўнення, калі :values ўказана.',
          required_with_all:
            'Поле :attribute абавязкова для запаўнення, калі :values ўказана.',
          required_without:
            'Поле :attribute абавязкова для запаўнення, калі :values не ўказана.',
          required_without_all:
            'Поле :attribute абавязкова для запаўнення, калі ні адно з :values не ўказана.',
          same: 'Значэнне :attribute павінна супадаць з :other.',
          size: {
            numeric: 'Поле :attribute павінна быць :size.',
            file: 'Размер файла в поле :attribute павінен быць :size кілабайт.',
            string: 'Колькасць сiмвалаў у поле :attribute павінна быць :size.',
            array: 'Колькасць элементаў у поле :attribute павінна быць :size.',
          },
          string: 'Поле :attribute павінна быць радком.',
          timezone: 'Поле :attribute павінна быць сапраўдным гадзінным поясам.',
          unique: 'Такое значэнне поля :attribute ўжо існуе.',
          uploaded: 'The :attribute failed to upload.',
          url: 'Поле :attribute мае памылковы фармат.',
        }
      },
      3188: (t) => {
        t.exports = {
          accepted: 'Трябва да приемете :attribute.',
          active_url: 'Полето :attribute не е валиден URL адрес.',
          after: 'Полето :attribute трябва да бъде дата след :date.',
          after_or_equal:
            'Полето :attribute трябва да бъде дата след или равна на :date.',
          alpha: 'Полето :attribute трябва да съдържа само букви.',
          alpha_dash:
            'Полето :attribute трябва да съдържа само букви, цифри, долна черта и тире.',
          alpha_num: 'Полето :attribute трябва да съдържа само букви и цифри.',
          array: 'Полето :attribute трябва да бъде масив.',
          before: 'Полето :attribute трябва да бъде дата преди :date.',
          before_or_equal:
            'Полето :attribute трябва да бъде дата преди или равна на :date.',
          between: {
            numeric: 'Полето :attribute трябва да бъде между :min и :max.',
            file: 'Полето :attribute трябва да бъде между :min и :max килобайта.',
            string: 'Полето :attribute трябва да бъде между :min и :max знака.',
            array:
              'Полето :attribute трябва да има между :min - :max елемента.',
          },
          boolean: 'Полето :attribute трябва да съдържа Да или Не',
          confirmed: 'Полето :attribute не е потвърдено.',
          date: 'Полето :attribute не е валидна дата.',
          date_format: 'Полето :attribute не е във формат :format.',
          different: 'Полетата :attribute и :other трябва да са различни.',
          digits: 'Полето :attribute трябва да има :digits цифри.',
          digits_between:
            'Полето :attribute трябва да има между :min и :max цифри.',
          dimensions: 'Невалидни размери за снимка :attribute.',
          distinct: 'Данните в полето :attribute се дублират.',
          email: 'Полето :attribute е в невалиден формат.',
          exists: 'Избранато поле :attribute вече съществува.',
          file: 'Полето :attribute трябва да бъде файл.',
          filled: 'Полето :attribute е задължително.',
          gt: {
            numeric: 'The :attribute must be greater than :value.',
            file: 'The :attribute must be greater than :value kilobytes.',
            string: 'The :attribute must be greater than :value characters.',
            array: 'The :attribute must have more than :value items.',
          },
          gte: {
            numeric: 'The :attribute must be greater than or equal :value.',
            file: 'The :attribute must be greater than or equal :value kilobytes.',
            string:
              'The :attribute must be greater than or equal :value characters.',
            array: 'The :attribute must have :value items or more.',
          },
          hex: 'The :attribute field should have hexadecimal format',
          image: 'Полето :attribute трябва да бъде изображение.',
          in: 'Избраното поле :attribute е невалидно.',
          in_array: 'Полето :attribute не съществува в :other.',
          integer: 'Полето :attribute трябва да бъде цяло число.',
          ip: 'Полето :attribute трябва да бъде IP адрес.',
          ipv4: 'Полето :attribute трябва да бъде IPv4 адрес.',
          ipv6: 'Полето :attribute трябва да бъде IPv6 адрес.',
          json: 'Полето :attribute трябва да бъде JSON низ.',
          lt: {
            numeric: 'The :attribute must be less than :value.',
            file: 'The :attribute must be less than :value kilobytes.',
            string: 'The :attribute must be less than :value characters.',
            array: 'The :attribute must have less than :value items.',
          },
          lte: {
            numeric: 'The :attribute must be less than or equal :value.',
            file: 'The :attribute must be less than or equal :value kilobytes.',
            string:
              'The :attribute must be less than or equal :value characters.',
            array: 'The :attribute must not have more than :value items.',
          },
          max: {
            numeric: 'Полето :attribute трябва да бъде по-малко от :max.',
            file: 'Полето :attribute трябва да бъде по-малко от :max килобайта.',
            string: 'Полето :attribute трябва да бъде по-малко от :max знака.',
            array: 'Полето :attribute трябва да има по-малко от :max елемента.',
          },
          mimes: 'Полето :attribute трябва да бъде файл от тип: :values.',
          mimetypes: 'Полето :attribute трябва да бъде файл от тип: :values.',
          min: {
            numeric: 'Полето :attribute трябва да бъде минимум :min.',
            file: 'Полето :attribute трябва да бъде минимум :min килобайта.',
            string: 'Полето :attribute трябва да бъде минимум :min знака.',
            array: 'Полето :attribute трябва има минимум :min елемента.',
          },
          not_in: 'Избраното поле :attribute е невалидно.',
          not_regex: 'The :attribute format is invalid.',
          numeric: 'Полето :attribute трябва да бъде число.',
          present: 'Полето :attribute трябва да съествува.',
          regex: 'Полето :attribute е в невалиден формат.',
          required: 'Полето :attribute е задължително.',
          required_if: 'Полето :attribute се изисква, когато :other е :value.',
          required_unless:
            'Полето :attribute се изисква, освен ако :other не е в :values.',
          required_with:
            'Полето :attribute се изисква, когато :values има стойност.',
          required_with_all:
            'Полето :attribute е задължително, когато :values имат стойност.',
          required_without:
            'Полето :attribute се изисква, когато :values няма стойност.',
          required_without_all:
            'Полето :attribute се изисква, когато никое от полетата :values няма стойност.',
          same: 'Полетата :attribute и :other трябва да съвпадат.',
          size: {
            numeric: 'Полето :attribute трябва да бъде :size.',
            file: 'Полето :attribute трябва да бъде :size килобайта.',
            string: 'Полето :attribute трябва да бъде :size знака.',
            array: 'Полето :attribute трябва да има :size елемента.',
          },
          string: 'Полето :attribute трябва да бъде знаков низ.',
          timezone: 'Полето :attribute трябва да съдържа валидна часова зона.',
          unique: 'Полето :attribute вече съществува.',
          uploaded: 'Неуспешно качване на :attribute.',
          url: 'Полето :attribute е в невалиден формат.',
        }
      },
      842: (t) => {
        t.exports = {
          accepted: 'Polje :attribute mora biti prihvaćeno.',
          active_url: 'Polje :attribute nije validan URL.',
          after: 'Polje :attribute mora biti datum poslije :date.',
          after_or_equal:
            'The :attribute must be a date after or equal to :date.',
          alpha: 'Polje :attribute može sadržati samo slova.',
          alpha_dash:
            'Polje :attribute može sadržati samo slova, brojeve i povlake.',
          alpha_num: 'Polje :attribute može sadržati samo slova i brojeve.',
          attributes: {},
          array: 'Polje :attribute mora biti niz.',
          before: 'Polje :attribute mora biti datum prije :date.',
          before_or_equal:
            'The :attribute must be a date before or equal to :date.',
          between: {
            numeric: 'Polje :attribute mora biti izmedju :min - :max.',
            file: 'Fajl :attribute mora biti izmedju :min - :max kilobajta.',
            string: 'Polje :attribute mora biti izmedju :min - :max karaktera.',
            array: 'Polje :attribute mora biti između :min - :max karaktera.',
          },
          boolean: 'Polje :attribute mora biti tačno ili netačno',
          confirmed: 'Potvrda polja :attribute se ne poklapa.',
          date: 'Polje :attribute nema ispravan datum.',
          date_format: 'Polje :attribute nema odgovarajući format :format.',
          different: 'Polja :attribute i :other moraju biti različita.',
          digits: 'Polje :attribute mora da sadži :digits brojeve.',
          digits_between:
            'Polje :attribute mora biti između :min i :max broja.',
          dimensions: 'The :attribute has invalid image dimensions.',
          distinct: 'The :attribute field has a duplicate value.',
          email: 'Format polja :attribute mora biti validan email.',
          exists: 'Odabrano polje :attribute nije validno.',
          file: 'The :attribute must be a file.',
          filled: 'Polje :attribute je obavezno.',
          gt: {
            numeric: 'The :attribute must be greater than :value.',
            file: 'The :attribute must be greater than :value kilobytes.',
            string: 'The :attribute must be greater than :value characters.',
            array: 'The :attribute must have more than :value items.',
          },
          gte: {
            numeric: 'The :attribute must be greater than or equal :value.',
            file: 'The :attribute must be greater than or equal :value kilobytes.',
            string:
              'The :attribute must be greater than or equal :value characters.',
            array: 'The :attribute must have :value items or more.',
          },
          hex: 'The :attribute field should have hexadecimal format',
          image: 'Polje :attribute mora biti slika.',
          in: 'Odabrano polje :attribute nije validno.',
          in_array: 'The :attribute field does not exist in :other.',
          integer: 'Polje :attribute mora biti broj.',
          ip: 'Polje :attribute mora biti validna IP adresa.',
          ipv4: 'The :attribute must be a valid IPv4 address.',
          ipv6: 'The :attribute must be a valid IPv6 address.',
          json: 'The :attribute must be a valid JSON string.',
          lt: {
            numeric: 'The :attribute must be less than :value.',
            file: 'The :attribute must be less than :value kilobytes.',
            string: 'The :attribute must be less than :value characters.',
            array: 'The :attribute must have less than :value items.',
          },
          lte: {
            numeric: 'The :attribute must be less than or equal :value.',
            file: 'The :attribute must be less than or equal :value kilobytes.',
            string:
              'The :attribute must be less than or equal :value characters.',
            array: 'The :attribute must not have more than :value items.',
          },
          max: {
            numeric: 'Polje :attribute mora biti manje od :max.',
            file: 'Polje :attribute mora biti manje od :max kilobajta.',
            string: 'Polje :attribute mora sadržati manje od :max karaktera.',
            array: 'Polje :attribute mora sadržati manje od :max karaktera.',
          },
          mimes: 'Polje :attribute mora biti fajl tipa: :values.',
          mimetypes: 'Polje :attribute mora biti fajl tipa: :values.',
          min: {
            numeric: 'Polje :attribute mora biti najmanje :min.',
            file: 'Fajl :attribute mora biti najmanje :min kilobajta.',
            string: 'Polje :attribute mora sadržati najmanje :min karaktera.',
            array: 'Polje :attribute mora sadržati najmanje :min karaktera.',
          },
          not_in: 'Odabrani element polja :attribute nije validan.',
          not_regex: 'The :attribute format is invalid.',
          numeric: 'Polje :attribute mora biti broj.',
          present: 'The :attribute field must be present.',
          regex: 'Polje :attribute ima neispravan format.',
          required: 'Polje :attribute je obavezno.',
          required_if: 'Polje :attribute je obavezno kada :other je :value.',
          required_unless:
            'The :attribute field is required unless :other is in :values.',
          required_with:
            'Polje :attribute je obavezno kada je :values prikazano.',
          required_with_all:
            'Polje :attribute je obavezno kada je :values prikazano.',
          required_without:
            'Polje :attribute je obavezno kada :values nije prikazano.',
          required_without_all:
            'Polje :attribute je obavezno kada nijedno :values nije prikazano.',
          same: 'Polja :attribute i :other se moraju poklapati.',
          size: {
            numeric: 'Polje :attribute mora biti :size.',
            file: 'Fajl :attribute mora biti :size kilobajta.',
            string: 'Polje :attribute mora biti :size karaktera.',
            array: 'Polje :attribute mora biti :size karaktera.',
          },
          string: 'Polje :attribute mora sadrzavati slova.',
          timezone: 'Polje :attribute mora biti ispravna vremenska zona.',
          unique: 'Polje :attribute već postoji.',
          uploaded: 'The :attribute failed to upload.',
          url: 'Format polja :attribute nije validan.',
        }
      },
      6918: (t) => {
        t.exports = {
          accepted: 'El camp :attribute pot ser aceptat.',
          after: 'El camp :attribute pot ser una data posterior a :after.',
          alpha: 'El camp :attribute només pot contenir lletras.',
          alpha_dash:
            'El camp :attribute només pot contenir lletras, nombres y guions.',
          alpha_num: 'El camp :attribute només pot contenir lletras y nombres.',
          attributes: {},
          between: 'El camp :attribute té que estar entre :min - :max.',
          confirmed: 'La confirmació de :attribute no coincideix.',
          different: 'El camp :attribute y :other poden ser diferents.',
          digits: 'El camp :attribute pot tindre :digits dígitos.',
          digits_between:
            'El camp  :attribute ha de tenir entre :min i :max dígits.',
          email: 'El camp :attribute no es un correu válido.',
          in: 'El camp :attribute es invàlid.',
          integer: 'El camp :attribute pot ser un nombre enter.',
          hex: 'El camp :attribute hauria de tenir format hexadecimal',
          max: {
            numeric: 'El camp :attribute no pot ser mayor a :max.',
            string: 'El camp :attribute no pot ser mayor que :max caràcters.',
          },
          min: {
            numeric: 'La mida del camp :attribute pot ser de al menys :min.',
            string: 'El camp :attribute pot contenir al menys :min caràcters.',
          },
          not_in: 'El camp :attribute es invàlid.',
          numeric: 'El camp :attribute pot ser numéric.',
          present:
            'El camp de :attribute pot estar present (però pot estar buit).',
          regex: 'El format del camp :attribute es invàlid.',
          required: 'El camp :attribute es obligatori.',
          required_if:
            'El camp :attribute es obligatori quan :other es :value.',
          same: 'El camp :attribute y :other poden coincidir.',
          size: {
            numeric: 'La mida del camp :attribute pot ser :size.',
            string: 'El camp :attribute pot contenir :size caràcters.',
          },
          url: 'El format de :attribute es invàlid.',
        }
      },
      4590: (t) => {
        t.exports = {
          accepted: ':attribute musí být přijat.',
          active_url: ':attribute není platnou URL adresou.',
          after: ':attribute musí být datum po :date.',
          after_or_equal:
            'The :attribute must be a date after or equal to :date.',
          alpha: ':attribute může obsahovat pouze písmena.',
          alpha_dash:
            ':attribute může obsahovat pouze písmena, číslice, pomlčky a podtržítka. České znaky (á, é, í, ó, ú, ů, ž, š, č, ř, ď, ť, ň) nejsou podporovány.',
          alpha_num: ':attribute může obsahovat pouze písmena a číslice.',
          attributes: {},
          array: ':attribute musí být pole.',
          before: ':attribute musí být datum před :date.',
          before_or_equal:
            'The :attribute must be a date before or equal to :date.',
          between: {
            numeric: ':attribute musí být hodnota mezi :min a :max.',
            file: ':attribute musí být větší než :min a menší než :max Kilobytů.',
            string:
              ':attribute musí být delší než :min a kratší než :max znaků.',
            array:
              ':attribute musí obsahovat nejméně :min a nesmí obsahovat více než :max prvků.',
          },
          boolean: ':attribute musí být true nebo false',
          confirmed: ':attribute nebylo odsouhlaseno.',
          date: ':attribute musí být platné datum.',
          date_format: ':attribute není platný formát data podle :format.',
          different: ':attribute a :other se musí lišit.',
          digits: ':attribute musí být :digits pozic dlouhé.',
          digits_between:
            ':attribute musí být dlouhé nejméně :min a nejvíce :max pozic.',
          dimensions: ':attribute má neplatné rozměry.',
          distinct: ':attribute má duplicitní hodnotu.',
          email: ':attribute není platný formát.',
          exists: 'Zvolená hodnota pro :attribute není platná.',
          file: ':attribute musí být soubor.',
          filled: ':attribute musí být vyplněno.',
          gt: {
            numeric: 'The :attribute must be greater than :value.',
            file: 'The :attribute must be greater than :value kilobytes.',
            string: 'The :attribute must be greater than :value characters.',
            array: 'The :attribute must have more than :value items.',
          },
          gte: {
            numeric: 'The :attribute must be greater than or equal :value.',
            file: 'The :attribute must be greater than or equal :value kilobytes.',
            string:
              'The :attribute must be greater than or equal :value characters.',
            array: 'The :attribute must have :value items or more.',
          },
          hex: 'The :attribute field should have hexadecimal format',
          image: ':attribute musí být obrázek.',
          in: 'Zvolená hodnota pro :attribute je neplatná.',
          in_array: ':attribute není obsažen v :other.',
          integer: ':attribute musí být celé číslo.',
          ip: ':attribute musí být platnou IP adresou.',
          ipv4: 'The :attribute must be a valid IPv4 address.',
          ipv6: 'The :attribute must be a valid IPv6 address.',
          json: ':attribute musí být platný JSON řetězec.',
          lt: {
            numeric: 'The :attribute must be less than :value.',
            file: 'The :attribute must be less than :value kilobytes.',
            string: 'The :attribute must be less than :value characters.',
            array: 'The :attribute must have less than :value items.',
          },
          lte: {
            numeric: 'The :attribute must be less than or equal :value.',
            file: 'The :attribute must be less than or equal :value kilobytes.',
            string:
              'The :attribute must be less than or equal :value characters.',
            array: 'The :attribute must not have more than :value items.',
          },
          max: {
            numeric: ':attribute musí být nižší než :max.',
            file: ':attribute musí být menší než :max Kilobytů.',
            string: ':attribute musí být kratší než :max znaků.',
            array: ':attribute nesmí obsahovat více než :max prvků.',
          },
          mimes:
            ':attribute musí být jeden z následujících datových typů :values.',
          mimetypes:
            ':attribute musí být jeden z následujících datových typů :values.',
          min: {
            numeric: ':attribute musí být větší než :min.',
            file: ':attribute musí být větší než :min Kilobytů.',
            string: ':attribute musí být delší než :min znaků.',
            array: ':attribute musí obsahovat více než :min prvků.',
          },
          not_in: 'Zvolená hodnota pro :attribute je neplatná.',
          not_regex: 'The :attribute format is invalid.',
          numeric: ':attribute musí být číslo.',
          present: ':attribute musí být vyplněno.',
          regex: ':attribute nemá správný formát.',
          required: ':attribute musí být vyplněno.',
          required_if: ':attribute musí být vyplněno pokud :other je :value.',
          required_unless:
            ':attribute musí být vyplněno dokud :other je v :value.',
          required_with:
            ':attribute musí být vyplněno pokud :field je vyplněno.',
          required_with_all:
            ':attribute musí být vyplněno pokud :fields je zvoleno.',
          required_without:
            ':attribute musí být vyplněno pokud :field není vyplněno.',
          required_without_all:
            ':attribute musí být vyplněno pokud není žádné z :fields zvoleno.',
          same: ':attribute a :other se musí shodovat.',
          size: {
            numeric: ':attribute musí být přesně :size.',
            file: ':attribute musí mít přesně :size Kilobytů.',
            string: ':attribute musí být přesně :size znaků dlouhý.',
            array: ':attribute musí obsahovat právě :size prvků.',
          },
          string: ':attribute musí být řetězec znaků.',
          timezone: ':attribute musí být platná časová zóna.',
          unique: ':attribute musí být unikátní.',
          uploaded: 'Nahrávání :attribute se nezdařilo.',
          url: 'Formát :attribute je neplatný.',
        }
      },
      4475: (t) => {
        t.exports = {
          accepted: 'Rhaid derbyn :attribute.',
          active_url: 'Nid yw :attribute yn URL dilys.',
          after: 'Rhaid i :attribute fod yn ddyddiad sydd ar ôl :date.',
          after_or_equal:
            'The :attribute must be a date after or equal to :date.',
          alpha: "Dim ond llythrennau'n unig gall :attribute gynnwys.",
          alpha_dash:
            'Dim ond llythrennau, rhifau a dash yn unig gall :attribute gynnwys.',
          alpha_num:
            'Dim ond llythrennau a rhifau yn unig gall :attribute gynnwys.',
          attributes: {},
          array: 'Rhaid i :attribute fod yn array.',
          before: 'Rhaid i :attribute fod yn ddyddiad sydd cyn :date.',
          before_or_equal:
            'The :attribute must be a date before or equal to :date.',
          between: {
            numeric: 'Rhaid i :attribute fod rhwng :min a :max.',
            file: 'Rhaid i :attribute fod rhwng :min a :max kilobytes.',
            string: 'Rhaid i :attribute fod rhwng :min a :max nodyn.',
            array: 'Rhaid i :attribute fod rhwng :min a :max eitem.',
          },
          boolean: "Rhaid i'r maes :attribute fod yn wir neu gau.",
          confirmed: "Nid yw'r cadarnhad :attribute yn gyfwerth.",
          date: 'Nid yw :attribute yn ddyddiad dilys.',
          date_format: 'Nid yw :attribute yn y fformat :format.',
          different: 'Rhaid i :attribute a :other fod yn wahanol.',
          digits: 'Rhaid i :attribute fod yn :digits digid.',
          digits_between: 'Rhaid i :attribute fod rhwng :min a :max digid.',
          dimensions: 'The :attribute has invalid image dimensions.',
          distinct: 'The :attribute field has a duplicate value.',
          email: 'Rhaid i :attribute fod yn gyfeiriad ebost dilys.',
          file: 'The :attribute must be a file.',
          filled: 'Rhaid cynnwys :attribute.',
          exists: 'Nid yw :attribute yn ddilys.',
          gt: {
            numeric: 'The :attribute must be greater than :value.',
            file: 'The :attribute must be greater than :value kilobytes.',
            string: 'The :attribute must be greater than :value characters.',
            array: 'The :attribute must have more than :value items.',
          },
          gte: {
            numeric: 'The :attribute must be greater than or equal :value.',
            file: 'The :attribute must be greater than or equal :value kilobytes.',
            string:
              'The :attribute must be greater than or equal :value characters.',
            array: 'The :attribute must have :value items or more.',
          },
          hex: 'The :attribute field should have hexadecimal format',
          image: 'Rhaid i :attribute fod yn lun.',
          in: 'Nid yw :attribute yn ddilys.',
          in_array: 'The :attribute field does not exist in :other.',
          integer: 'Rhaid i :attribute fod yn integer.',
          ip: 'Rhaid i :attribute fod yn gyfeiriad IP dilys.',
          ipv4: 'The :attribute must be a valid IPv4 address.',
          ipv6: 'The :attribute must be a valid IPv6 address.',
          json: 'The :attribute must be a valid JSON string.',
          lt: {
            numeric: 'The :attribute must be less than :value.',
            file: 'The :attribute must be less than :value kilobytes.',
            string: 'The :attribute must be less than :value characters.',
            array: 'The :attribute must have less than :value items.',
          },
          lte: {
            numeric: 'The :attribute must be less than or equal :value.',
            file: 'The :attribute must be less than or equal :value kilobytes.',
            string:
              'The :attribute must be less than or equal :value characters.',
            array: 'The :attribute must not have more than :value items.',
          },
          max: {
            numeric: 'Ni chai :attribute fod yn fwy na :max.',
            file: 'Ni chai :attribute fod yn fwy na :max kilobytes.',
            string: 'Ni chai :attribute fod yn fwy na :max nodyn.',
            array: 'Ni chai :attribute fod yn fwy na :max eitem.',
          },
          mimes: "Rhaid i :attribute fod yn ffeil o'r math: :values.",
          mimetypes: "Rhaid i :attribute fod yn ffeil o'r math: :values.",
          min: {
            numeric: 'Rhaid i :attribute fod o leiaf :min.',
            file: 'Rhaid i :attribute fod o leiaf :min kilobytes.',
            string: 'Rhaid i :attribute fod o leiaf :min nodyn.',
            array: 'Rhaid i :attribute fod o leiaf :min eitem.',
          },
          not_in: 'Nid yw :attribute yn ddilys.',
          not_regex: 'The :attribute format is invalid.',
          numeric: 'Rhaid i :attribute fod yn rif.',
          present: 'The :attribute field must be present.',
          regex: 'Nid yw fformat :attribute yn ddilys.',
          required: 'Rhaid cynnwys :attribute.',
          required_if: 'Rhaid cynnwys :attribute pan mae :other yn :value.',
          required_unless:
            'The :attribute field is required unless :other is in :values.',
          required_with:
            'Rhaid cynnwys :attribute pan mae :values yn bresennol.',
          required_with_all:
            'Rhaid cynnwys :attribute pan mae :values yn bresennol.',
          required_without:
            'Rhaid cynnwys :attribute pan nad oes :values yn bresennol.',
          required_without_all:
            'Rhaid cynnwys :attribute pan nad oes :values yn bresennol.',
          same: 'Rhaid i :attribute a :other fod yn gyfwerth.',
          size: {
            numeric: 'Rhaid i :attribute fod yn :size.',
            file: 'Rhaid i :attribute fod yn :size kilobytes.',
            string: 'Rhaid i :attribute fod yn :size nodyn.',
            array: 'Rhaid i :attribute fod yn :size eitem.',
          },
          string: 'The :attribute must be a string.',
          timezone: 'Rhaid i :attribute fod yn timezone dilys.',
          unique: 'Mae :attribute eisoes yn bodoli.',
          uploaded: 'The :attribute failed to upload.',
          url: 'Nid yw fformat :attribute yn ddilys.',
        }
      },
      9210: (t) => {
        t.exports = {
          accepted: ':attribute skal accepteres.',
          after: ':attribute skal være en dato efter :after.',
          after_or_equal:
            ':attribute skal være en dato efter eller lig med :after_or_equal.',
          alpha: ':attribute må kun bestå af bogstaver.',
          alpha_dash:
            ':attribute må kun bestå af bogstaver, tal og bindestreger.',
          alpha_num: ':attribute må kun bestå af bogstaver og tal.',
          before: ':attribute skal være en dato før :before.',
          before_or_equal:
            ':attribute skal være en dato før eller lig med :before_or_equal.',
          between: ':attribute skal være mellem :min og :max.',
          confirmed: ':attribute er ikke det samme som bekræftelsesfeltet.',
          email: ':attribute skal være en gyldig email.',
          date: ':attribute er ikke en gyldig dato.',
          def: ':attribute attributen har fejl.',
          digits: ':attribute skal have :digits cifre.',
          digits_between: ':attribute skal have mellem :min og :max cifre.',
          different: ':attribute og :different skal være forskellige.',
          in: 'Det valgte :attribute er ugyldigt.',
          integer: ':attribute skal være et heltal.',
          hex: ':attribute skal have hexadecimalt format',
          min: {
            numeric: ':attribute skal være mindst :min.',
            string: ':attribute skal være mindst :min tegn.',
          },
          max: {
            numeric: ':attribute skal være højest :max.',
            string: ':attribute skal være højest :max tegn.',
          },
          not_in: 'Den valgte :attribute er ugyldig',
          numeric: ':attribute skal være et tal.',
          present: ':attribute skal være tilstede.',
          required: ':attribute skal udfyldes.',
          required_if: ':attribute skal udfyldes når :other er :value.',
          required_unless:
            ':attribute er påkrævet medmindre :other findes i :values.',
          required_with: ':attribute skal udfyldes når :field er udfyldt.',
          required_with_all: ':attribute skal udfyldes når :fields er udfyldt.',
          required_without:
            ':attribute skal udfyldes når :field ikke er udfyldt.',
          required_without_all:
            ':attribute skal udfyldes når ingen af :fields er udfyldt.',
          same: ':attribute og :same skal være ens.',
          size: {
            numeric: ':attribute skal være :size.',
            string: ':attribute skal være :size tegn lang.',
          },
          string: ':attribute skal være en streng.',
          url: ':attribute formatet er ugyldigt.',
          regex: ':attribute formatet er ugyldigt.',
          attributes: {},
        }
      },
      1245: (t) => {
        t.exports = {
          accepted: 'Das :attribute Feld muss akzeptiert werden.',
          after: 'Das :attribute muss ein Datum nach dem :after sein.',
          after_or_equal:
            'Das :attribute Datum muss kleiner oder gleich dem :after_or_equal sein.',
          alpha: 'Das :attribute Feld darf nur aus Buchstaben bestehen.',
          alpha_dash:
            'Das :attribute Feld darf nur aus Buchstaben, Zahlen, Binde- und Unterstrichen bestehen.',
          alpha_num:
            'Das :attribute Feld darf nur aus Buchstaben und Zahlen bestehen.',
          before: 'Das :attribute muss ein Datum vor dem :before sein.',
          before_or_equal:
            'Das :attribute Datum muss größer oder gleich dem :before_or_equal sein.',
          between: 'Das :attribute Feld muss zwischen :min und :max liegen.',
          confirmed:
            'Das :attribute Feld stimmt nicht mit der Bestätigung überein.',
          email: 'Das :attribute Format ist ungültig.',
          date: 'Das :attribute Feld muss ein gültiges Datum sein.',
          def: 'Das :attribute Feld hat Fehler.',
          digits: 'Das :attribute Feld muss :digits Stellen haben.',
          digits_between:
            'Das :attribute Feld muss zwischen :min und :max Stellen haben.',
          different:
            'Die Felder :attribute und :different müssen sich unterscheiden.',
          in: 'Der gewählte Wert für :attribute ist ungültig.',
          integer: 'Das :attribute Feld muss eine ganze Zahl sein.',
          hex: 'Das :attribute Feld sollte hexadezimal sein',
          min: {
            numeric: 'Das :attribute Feld muss mindestens :min sein.',
            string:
              'Das :attribute Feld muss mindestens :min Zeichen lang sein.',
          },
          max: {
            numeric: 'Das :attribute Feld darf maximal :max sein.',
            string: 'Das :attribute Feld darf maximal :max Zeichen haben.',
          },
          not_in: 'Der gewählte Wert für :attribute ist ungültig.',
          numeric: 'Das :attribute Feld muss eine Zahl sein.',
          present:
            'Das Feld :attribute muss vorhanden sein (kann aber leer sein).',
          required: 'Das :attribute Feld muss ausgefüllt sein.',
          required_if:
            'Das :attribute Feld muss ausgefüllt sein, wenn :other :value ist.',
          same: 'Die Felder :attribute und :same müssen übereinstimmen.',
          size: {
            numeric: 'Das :attribute Feld muss gleich :size sein.',
            string: 'Das :attribute Feld muss :size Zeichen lang sein.',
          },
          string: 'Das :attribute Feld muss ein Satz sein.',
          url: 'Das Format von :attribute ist ungültig.',
          regex: 'Das :attribute Format ist ungültig.',
          attributes: {},
        }
      },
      4630: (t) => {
        t.exports = {
          accepted: 'Το πεδίο :attribute πρέπει να γίνει αποδεκτό.',
          after:
            'Το πεδίο :attribute πρέπει να είναι μία ημερομηνία μετά από :after.',
          alpha: 'Το πεδίο :attribute μπορεί να περιέχει μόνο γράμματα.',
          alpha_dash:
            'Το πεδίο :attribute μπορεί να περιέχει μόνο γράμματα, αριθμούς, και παύλες.',
          alpha_num:
            'Το πεδίο :attribute μπορεί να περιέχει μόνο γράμματα και αριθμούς.',
          between: 'Το πεδίο :attribute πρέπει να είναι μεταξύ :min και :max.',
          confirmed: 'Η επιβεβαίωση του :attribute δεν ταιριάζει.',
          email:
            'Το πεδίο :attribute πρέπει να είναι μία έγκυρη διεύθυνση email.',
          date: 'Το πεδίο :attribute δεν είναι έγκυρη ημερομηνία.',
          def: 'Το πεδίο :attribute περιέχει σφάλματα.',
          digits: 'Το πεδίο :attribute πρέπει να είναι :digits ψηφία.',
          digits_between:
            'Το πεδίο :attribute πρέπει να είναι μεταξύ :min και :max ψηφία.',
          different:
            'Το πεδίο :attribute  και :different πρέπει να είναι διαφορετικά.',
          in: 'Το επιλεγμένο :attribute δεν είναι έγκυρο.',
          integer: 'Το πεδίο :attribute πρέπει να είναι ακέραιος.',
          hex: 'Το πεδίο :attribute πρέπει να είναι σε δεκαεξαδική μορφή.',
          min: {
            numeric: 'Το πεδίο :attribute πρέπει να είναι τουλάχιστον :min.',
            string:
              'Το πεδίο :attribute πρέπει να έχει τουλάχιστον :min χαρακτήρες.',
          },
          max: {
            numeric:
              'Το πεδίο :attribute δεν μπορεί να είναι μεγαλύτερο από :max.',
            string:
              'Το πεδίο :attribute δεν μπορεί να έχει περισσότερους από :max χαρακτήρες.',
          },
          not_in: 'Το επιλεγμένο :attribute δεν είναι αποδεκτό.',
          numeric: 'Το πεδίο :attribute πρέπει να είναι αριθμός.',
          present: 'The :attribute field must be present (but can be empty).',
          required: 'Το πεδίο :attribute είναι απαραίτητο.',
          required_if:
            'Το πεδίο :attribute είναι απαραίτητο όταν το πεδίο :other είναι :value.',
          same: 'Τα πεδία :attribute και :same πρέπει να είναι ίδια.',
          size: {
            numeric: 'Το πεδίο :attribute πρέπει να είναι :size.',
            string: 'Το πεδίο :attribute πρέπει να είναι :size χαρακτήρες.',
          },
          string: 'Το πεδίο :attribute πρέπει να είναι αλφαριθμητικό.',
          url: 'Το πεδίο :attribute δεν είναι έγκυρη διεύθυνση URL.',
          regex: 'Η μορφή του :attribute δεν είναι αποδεκτή.',
          attributes: {},
        }
      },
      437: (t) => {
        t.exports = {
          accepted: 'The :attribute must be accepted.',
          after: 'The :attribute must be after :after.',
          after_or_equal:
            'The :attribute must be equal or after :after_or_equal.',
          alpha:
            'The :attribute field must contain only alphabetic characters.',
          alpha_dash:
            'The :attribute field may only contain alpha-numeric characters, as well as dashes and underscores.',
          alpha_num: 'The :attribute field must be alphanumeric.',
          before: 'The :attribute must be before :before.',
          before_or_equal:
            'The :attribute must be equal or before :before_or_equal.',
          between: {
            numeric: 'The :attribute field must be between :min and :max.',
            string:
              'The :attribute field must be between :min and :max characters.',
          },
          confirmed: 'The :attribute confirmation does not match.',
          email: 'The :attribute format is invalid.',
          date: 'The :attribute is not a valid date format.',
          def: 'The :attribute attribute has errors.',
          digits: 'The :attribute must be :digits digits.',
          digits_between:
            'The :attribute field must be between :min and :max digits.',
          different: 'The :attribute and :different must be different.',
          in: 'The selected :attribute is invalid.',
          integer: 'The :attribute must be an integer.',
          hex: 'The :attribute field should have hexadecimal format',
          min: {
            numeric: 'The :attribute must be at least :min.',
            string: 'The :attribute must be at least :min characters.',
          },
          max: {
            numeric: 'The :attribute may not be greater than :max.',
            string: 'The :attribute may not be greater than :max characters.',
          },
          not_in: 'The selected :attribute is invalid.',
          numeric: 'The :attribute must be a number.',
          present: 'The :attribute field must be present (but can be empty).',
          required: 'The :attribute field is required.',
          required_if:
            'The :attribute field is required when :other is :value.',
          required_unless:
            'The :attribute field is required when :other is not :value.',
          required_with:
            'The :attribute field is required when :field is not empty.',
          required_with_all:
            'The :attribute field is required when :fields are not empty.',
          required_without:
            'The :attribute field is required when :field is empty.',
          required_without_all:
            'The :attribute field is required when :fields are empty.',
          same: 'The :attribute and :same fields must match.',
          size: {
            numeric: 'The :attribute must be :size.',
            string: 'The :attribute must be :size characters.',
          },
          string: 'The :attribute must be a string.',
          url: 'The :attribute format is invalid.',
          regex: 'The :attribute format is invalid.',
          attributes: {},
        }
      },
      5322: (t) => {
        t.exports = {
          accepted: 'El campo :attribute debe ser aceptado.',
          after: 'El campo :attribute debe ser una fecha posterior a :after.',
          alpha: 'El campo :attribute solo debe contener letras.',
          alpha_dash:
            'El campo :attribute solo debe contener letras, números y guiones.',
          alpha_num: 'El campo :attribute solo debe contener letras y números.',
          attributes: {},
          between: 'El campo :attribute tiene que estar entre :min - :max.',
          confirmed: 'La confirmación de :attribute no coincide.',
          different: 'El campo :attribute y :other deben ser diferentes.',
          digits: 'El campo :attribute debe tener :digits dígitos.',
          digits_between:
            'El campo :attribute debe tener entre :min y :max dígitos.',
          email: 'El campo :attribute no es un correo válido.',
          in: 'El campo :attribute es inválido.',
          integer: 'El campo :attribute debe ser un número entero.',
          hex: 'El campo :attribute debe tener formato hexadecimal.',
          max: {
            numeric: 'El campo :attribute no debe ser mayor a :max.',
            string:
              'El campo :attribute no debe ser mayor que :max caracteres.',
          },
          min: {
            numeric:
              'El tamaño del campo :attribute debe ser de al menos :min.',
            string:
              'El campo :attribute debe contener al menos :min caracteres.',
          },
          not_in: 'El campo :attribute es inválido.',
          numeric: 'El campo :attribute debe ser numérico.',
          present:
            'El campo de :attribute debe estar presente (pero puede estar vacío).',
          regex: 'El formato del campo :attribute es inválido.',
          required: 'El campo :attribute es obligatorio.',
          required_if:
            'El campo :attribute es obligatorio cuando :other es :value.',
          same: 'El campo :attribute y :other deben coincidir.',
          size: {
            numeric: 'El tamaño del campo :attribute debe ser :size.',
            string: 'El campo :attribute debe contener :size caracteres.',
          },
          url: 'El formato de :attribute es inválido.',
        }
      },
      279: (t) => {
        t.exports = {
          accepted: ':attribute tuleb aktsepteerida.',
          active_url: ':attribute ei ole kehtiv URL.',
          after: ':attribute peab olema kuupäev pärast :date.',
          after_or_equal:
            ':attribute peab olema kuupäev pärast või samastuma :date.',
          alpha: ':attribute võib sisaldada vaid tähemärke.',
          alpha_dash:
            ':attribute võib sisaldada vaid tähti, numbreid ja kriipse.',
          alpha_num: ':attribute võib sisaldada vaid tähti ja numbreid.',
          attributes: {},
          array: ':attribute peab olema massiiv.',
          before: ':attribute peab olema kuupäev enne :date.',
          before_or_equal:
            ':attribute peab olema kuupäev enne või samastuma :date.',
          between: {
            numeric: ':attribute peab olema :min ja :max vahel.',
            file: ':attribute peab olema :min ja :max kilobaidi vahel.',
            string: ':attribute peab olema :min ja :max tähemärgi vahel.',
            array: ':attribute peab olema :min ja :max kirje vahel.',
          },
          boolean: ':attribute väli peab olema tõene või väär.',
          confirmed: ':attribute kinnitus ei vasta.',
          date: ':attribute pole kehtiv kuupäev.',
          date_format: ':attribute ei vasta formaadile :format.',
          different: ':attribute ja :other peavad olema erinevad.',
          digits: ':attribute peab olema :digits numbrit.',
          digits_between: ':attribute peab olema :min ja :max numbri vahel.',
          dimensions: ':attribute on valed pildi suurused.',
          distinct: ':attribute väljal on topeltväärtus.',
          email: ':attribute peab olema kehtiv e-posti aadress.',
          exists: 'Valitud :attribute on vigane.',
          file: ':attribute peab olema fail.',
          filled: ':attribute väli on nõutav.',
          gt: {
            numeric: 'The :attribute must be greater than :value.',
            file: 'The :attribute must be greater than :value kilobytes.',
            string: 'The :attribute must be greater than :value characters.',
            array: 'The :attribute must have more than :value items.',
          },
          gte: {
            numeric: 'The :attribute must be greater than or equal :value.',
            file: 'The :attribute must be greater than or equal :value kilobytes.',
            string:
              'The :attribute must be greater than or equal :value characters.',
            array: 'The :attribute must have :value items or more.',
          },
          hex: 'The :attribute field should have hexadecimal format',
          image: ':attribute peab olema pilt.',
          in: 'Valitud :attribute on vigane.',
          in_array: ':attribute väli ei eksisteeri :other sees.',
          integer: ':attribute peab olema täisarv.',
          ip: ':attribute peab olema kehtiv IP aadress.',
          ipv4: ':attribute peab olema kehtiv IPv4 aadress.',
          ipv6: ':attribute peab olema kehtiv IPv6 aadress.',
          json: ':attribute peab olema kehtiv JSON string.',
          lt: {
            numeric: 'The :attribute must be less than :value.',
            file: 'The :attribute must be less than :value kilobytes.',
            string: 'The :attribute must be less than :value characters.',
            array: 'The :attribute must have less than :value items.',
          },
          lte: {
            numeric: 'The :attribute must be less than or equal :value.',
            file: 'The :attribute must be less than or equal :value kilobytes.',
            string:
              'The :attribute must be less than or equal :value characters.',
            array: 'The :attribute must not have more than :value items.',
          },
          max: {
            numeric: ':attribute ei tohi olla suurem kui :max.',
            file: ':attribute ei tohi olla suurem kui :max kilobaiti.',
            string: ':attribute ei tohi olla suurem kui :max tähemärki.',
            array: ':attribute ei tohi sisaldada rohkem kui :max kirjet.',
          },
          mimes: ':attribute peab olema :values tüüpi.',
          mimetypes: ':attribute peab olema :values tüüpi.',
          min: {
            numeric: ':attribute peab olema vähemalt :min.',
            file: ':attribute peab olema vähemalt :min kilobaiti.',
            string: ':attribute peab olema vähemalt :min tähemärki.',
            array: ':attribute peab olema vähemalt :min kirjet.',
          },
          not_in: 'Valitud :attribute on vigane.',
          not_regex: 'The :attribute format is invalid.',
          numeric: ':attribute peab olema number.',
          present: ':attribute väli peab olema esindatud.',
          regex: ':attribute vorming on vigane.',
          required: ':attribute väli on nõutud.',
          required_if: ':attribute väli on nõutud, kui :other on :value.',
          required_unless:
            ':attribute väli on nõutud, välja arvatud, kui :other on :values.',
          required_with: ':attribute väli on nõutud, kui :values on esindatud.',
          required_with_all:
            ':attribute väli on nõutud, kui :values on esindatud.',
          required_without:
            ':attribute väli on nõutud, kui :values ei ole esindatud.',
          required_without_all:
            ':attribute väli on nõutud, kui ükski :values pole esindatud.',
          same: ':attribute ja :other peavad sobima.',
          size: {
            numeric: ':attribute peab olema :size.',
            file: ':attribute peab olema :size kilobaiti.',
            string: ':attribute peab olema :size tähemärki.',
            array: ':attribute peab sisaldama :size kirjet.',
          },
          string: ':attribute peab olema string.',
          timezone: ':attribute peab olema kehtiv tsoon.',
          unique: ':attribute on juba hõivatud.',
          uploaded: ':attribute ei õnnestunud laadida.',
          url: ':attribute vorming on vigane.',
        }
      },
      5e3: (t) => {
        t.exports = {
          accepted: ':attribute onartua izan behar da.',
          active_url: ':attribute ez da baliozko URL bat.',
          after: ':attribute :date osteko data izan behar da.',
          after_or_equal:
            ':attribute :date osteko data edo data berdina izan behar da.',
          alpha: ':attribute hizkiak besterik ezin ditu izan.',
          alpha_dash:
            ':attribute hizkiak, zenbakiak eta marrak besterik ezin ditu izan.',
          alpha_num:
            ':attribute hizkiak eta zenbakiak besterik ezin ditu izan.',
          attributes: {},
          array: ':attribute bilduma izan behar da.',
          before: ':attribute :date aurreko data izan behar da.',
          before_or_equal:
            ':attribute :date aurreko data edo data berdina izan behar da.',
          between: {
            numeric: ':attribute :min eta :max artean egon behar da.',
            file: ':attribute-k :min eta :max kilobyte arteko pisua izan behar du.',
            string: ':attribute :min eta :max karaktere artean egon behar da.',
            array:
              ':attribute-k :min eta :max arteko ale kantitatea euki behar du.',
          },
          boolean: ':attribute-ren balioa egia edo gezurra izan behar da.',
          confirmed: ':attribute-ren konfirmazioa ez dator bat.',
          date: ':attribute ez da baliozko data.',
          date_format: ':attribute datak ez du :format formatua.',
          different: ':attribute eta :other ezberdinak izan behar dira.',
          digits: ':attribute-k :digits digitu euki behar ditu.',
          digits_between:
            ':attribute-k :min eta :max arteko digitu kantitatea euki behar du.',
          dimensions: ':attribute-k ez ditu irudi neurri aproposak.',
          distinct: ':attribute-k balio bikoiztua dauka.',
          email: ':attribute-k baliozko posta helbidea euki behar du.',
          exists: 'Hautatutako :attribute baliogabea da.',
          file: ':attribute fitxategi bat izan behar da.',
          filled: ':attribute-k balioren bat euki behar du.',
          gt: {
            numeric: 'The :attribute must be greater than :value.',
            file: 'The :attribute must be greater than :value kilobytes.',
            string: 'The :attribute must be greater than :value characters.',
            array: 'The :attribute must have more than :value items.',
          },
          gte: {
            numeric: 'The :attribute must be greater than or equal :value.',
            file: 'The :attribute must be greater than or equal :value kilobytes.',
            string:
              'The :attribute must be greater than or equal :value characters.',
            array: 'The :attribute must have :value items or more.',
          },
          hex: 'The :attribute field should have hexadecimal format',
          image: ':attribute irudi bat izan behar da.',
          in: 'Hautatutako :attribute baliogabea da.',
          in_array: ':attribute ez da :other-en existizen.',
          integer: ':attribute zenbaki osoa izan behar da.',
          ip: ':attribute baliozko IP helbidea izan behar da.',
          ipv4: ':attribute baliozko IPv4 helbidea izan behar da.',
          ipv6: ':attribute baliozko IPv6 helbidea izan behar da.',
          json: ':attribute-k baliozko JSON karaktere-katea euki behar du.',
          lt: {
            numeric: 'The :attribute must be less than :value.',
            file: 'The :attribute must be less than :value kilobytes.',
            string: 'The :attribute must be less than :value characters.',
            array: 'The :attribute must have less than :value items.',
          },
          lte: {
            numeric: 'The :attribute must be less than or equal :value.',
            file: 'The :attribute must be less than or equal :value kilobytes.',
            string:
              'The :attribute must be less than or equal :value characters.',
            array: 'The :attribute must not have more than :value items.',
          },
          max: {
            numeric: ':attribute ezin da :max baino handiagoa izan.',
            file: ':attribute-k ezin du :max kilobyte baino gehiagoko pisua euki.',
            string: ':attribute-k ezin du :max karaktere baino gehiago euki.',
            array: ':attribute-k ezin du :max ale baino gehiago euki.',
          },
          mimes: ':attribute :values motatako fitxategia izan behar da.',
          mimetypes: ':attribute :values motatako fitxategia izan behar da.',
          min: {
            numeric: ':attribute-k gutxienez :min-eko tamaina izan behar du.',
            file: ':attribute-k gutxienez :min kilobyteko pisua euki behar du.',
            string: ':attribute-k gutxienez :min karaktere euki behar ditu.',
            array: ':attribute-k gutxienez :min ale euki behar ditu.',
          },
          not_in: 'Hautatutako :attribute baliogabea da.',
          not_regex: 'The :attribute format is invalid.',
          numeric: ':attribute zenbaki bat izan behar da.',
          present: ':attribute bertan egon behar da.',
          regex: ':attribute-k ez dauka formatu egokirik.',
          required: ':attribute derrigorrezkoa da.',
          required_if: ':attribute derrigorrezkoa da :other :value denean.',
          required_unless:
            ':attribute derrigorrezkoa da :other :values-en egon ezean.',
          required_with:
            ':attribute derrigorrezkoa da :values bertan dagoenean.',
          required_with_all:
            ':attribute derrigorrezkoa da :values bertan dagoenean.',
          required_without:
            ':attribute derrigorrezkoa da :values bertan ez dagoenean.',
          required_without_all:
            ':attribute derrigorrezkoa da :values bertan ez dagoenean.',
          same: ':attribute eta :other bat etorri behar dira.',
          size: {
            numeric: ':attribute-k :size-eko tamaina izan behar du.',
            file: ':attribute-k :size kilobyteko pisua euki behar du.',
            string: ':attribute-k :size karaktere euki beha ditu.',
            array: ':attribute-k :size ale euki behar ditu.',
          },
          string: ':attribute karaktere-katea izan behar da.',
          timezone: ':attribute baliozko gunea izan behar da.',
          unique: ':attribute jadanik erregistratua izan da.',
          uploaded: ':attribute igotzerakoan huts egin du.',
          url: ':attribute-k ez dauka formatu egokirik.',
        }
      },
      2927: (t) => {
        t.exports = {
          accepted: 'فیلد :attribute می بایست تایید شود',
          alpha: 'فیلد :attribute می بایست فقط شامل حروف انگلیسی باشد',
          alpha_dash:
            'فیلد :attribute می بایست فقط شامل حروف انگلیسی و خط تیره و زیرخط باشد',
          alpha_num: 'فیلد :attribute می بایست فقط شامل حروف و اعداد باشد',
          between:
            'فیلد :attribute می بایست بزرگتر از :min و کوچکتر از :max باشد',
          confirmed: 'تطبیق فیلد :attribute صحیح نمی باشد',
          email: 'فرمت ایمیل وارد شده در :attribute صحیح نمی‌باشد',
          date: 'تاریخ درج شده در فیلد :attribute صحیح نیست',
          def: 'فیلد :attribute اشکال دارد',
          digits: 'فیلد :attribute می بایست شامل :digits رقم باشد',
          digits_between: ':attribute باید بین :min و :max رقم باشد.',
          different:
            'فیلد :attribute می بایست مقداری غیر از :different داشته باشد',
          in: 'فیلد :attribute انتخاب شده صحیح نمی باشد',
          integer: 'فیلد :attribute می بایست عددی باشد',
          hex: 'فیلد :attribute باید در فرمت مبنای ۱۶ باشد',
          min: {
            numeric: 'فیلد :attribute می بایست از :min بزرگتر باشد',
            string: 'فیلد :attribute بایستی حداقل :min کاراکتر طول داشته باشد',
          },
          max: {
            numeric: 'فیلد :attribute می بایست از :max کوچکتر باشد',
            string:
              'فیلد :attribute نباید بیشتر از :max کاراکتر طول داشته باشد',
          },
          not_in: 'فیلد :attribute انتخاب شده صحیح نمی باشد',
          numeric: 'فیلد :attribute می بایست عددی باشد',
          present: 'The :attribute field must be present (but can be empty).',
          required: 'فیلد :attribute الزامی است',
          required_if:
            'در صورت دادن :value به :other تکمیل فیلد :attribute الزامی است',
          same: 'فیلد :attribute می بایست با فیلد :same یکی باشد',
          size: {
            numeric: 'فیلد :attribute می بایست :size باشد',
            string: 'فیلد :attribute می بایست :size کاراکتر طول داشته باشد',
          },
          string: 'فیلد :attribute می بایست متنی باشد',
          url: 'آدرس فیلد :attribute صحیح نمی باشد',
          regex: 'فرمت آدرس :attribute صحیح نمی باشد',
          attributes: {},
        }
      },
      6496: (t) => {
        t.exports = {
          accepted: ':attribute on oltava hyväksytty.',
          after: ':attribute on oltava :after jälkeen.',
          after_or_equal:
            ':attribute täytyy olla sama kuin :after_or_equal tai sen jälkeen.',
          alpha: ':attribute kenttä saa sisältää ainoastaan kirjaimia.',
          alpha_dash:
            ':attribute kenttä saa sisältää ainoastaan kirjaimia tai numeroita, sekä pisteitä ja alaviivoja.',
          alpha_num:
            ':attribute kenttä saa sisältää ainoastaan kirjaimia tai numeroita.',
          before: ':attribute on oltava ennen kuin :before.',
          before_or_equal:
            ':attribute on oltava sama tai ennen kuin :before_or_equal.',
          between: ':attribute on oltava :min ja :max väliltä.',
          confirmed: ':attribute vahvistus ei täsmää.',
          email: ':attribute on väärässä muodossa.',
          date: ':attribute ei ole päivämäärä.',
          def: ':attribute sisältää virheitä.',
          digits: ':attribute on oltava :digits numeroa pitkä.',
          digits_between:
            'Kentän :attribute arvon tulee olla :min - :max numeroa.',
          different: ':attribute ei saa olla yhtä kuin :different.',
          in: 'Valittu :attribute ei kelpaa.',
          integer: ':attribute ei ole numero.',
          hex: ':attribute on oltava heksadesimaali.',
          min: {
            numeric: ':attribute on oltava vähintään :min.',
            string: ':attribute on oltava vähintään :min merkkiä pitkä.',
          },
          max: {
            numeric: ':attribute on oltava enintään :max.',
            string: ':attribute on oltava enintään :max merkkiä pitkä.',
          },
          not_in: 'Valittu :attribute ei kelpaa.',
          numeric: ':attribute on oltava numero.',
          present: ':attribute kenttä on oltava (mutta saa olla tyhjä).',
          required: ':attribute kenttä on pakollinen.',
          required_if:
            ':attribute kenttä on pakollinen, jos kenttä :other on :value.',
          required_unless:
            ':attribute kenttä on pakollinen, jos kenttä :other ei ole :value.',
          required_with:
            ':attribute kenttä on pakollinen, jos kenttä :field ei ole tyhjä.',
          required_with_all:
            ':attribute kenttä on pakollinen, jos kentät :fields eivät ole tyhjiä.',
          required_without:
            ':attribute kenttä on pakollinen, jos kenttä :field on tyhjä.',
          required_without_all:
            ':attribute kenttä on pakollinen, jos kentät :fields ovat tyhjiä.',
          same: ':attribute ja :same on oltava samat.',
          size: {
            numeric: ':attribute on oltava :size.',
            string: ':attribute on oltava :size merkkiä pitkä.',
          },
          string: ':attribute on oltava merkkijono.',
          url: ':attribute on väärässä muodossa.',
          regex: ':attribute on väärässä muodossa.',
          attributes: {},
        }
      },
      8899: (t) => {
        t.exports = {
          accepted: 'Le champ :attribute doit être accepté.',
          alpha:
            'Le champ :attribute ne peut contenir que des caractères alphabétiques.',
          alpha_dash:
            'Le champ :attribute ne peut contenir que des caractères alphanumériques, des tirets et des underscores.',
          alpha_num:
            'Le champ :attribute ne peut contenir que des caractères alphanumériques.',
          between:
            'La longueur du champ :attribute doit être comprise entre :min and :max.',
          confirmed: "Le champ :attribute n'est pas confirmé.",
          email: 'Le champ :attribute contient un format invalide.',
          def: 'Le champ :attribute contient un attribut erroné.',
          digits: 'Le champ :attribute doit être composé de :digits chiffres.',
          digits_between:
            'Le champ :attribute doit contenir entre :min et :max chiffres.',
          different:
            'Les champs :attribute et :different doivent être différents.',
          in: 'Le champ :attribute est invalide.',
          integer: 'Le champ :attribute doit être un entier.',
          hex: 'Le champ :attribute doit être au format hexadécimal.',
          min: {
            numeric: 'Le champ :attribute doit être supérieur à :min.',
            string:
              'Le champ :attribute doit contenir plus de :min caractères.',
          },
          max: {
            numeric: 'Le champ :attribute doit être inférieur à :max.',
            string:
              'Le champ :attribute doit contenir moins de :max caractères.',
          },
          not_in: 'Le champ :attribute est invalide.',
          numeric: 'Le champ :attribute doit être un chiffre.',
          present:
            'Le champ :attribute doit être présent (mais peut être vide).',
          required: 'Le champ :attribute est requis.',
          required_if:
            'Le champ :attribute est requis quand :other est :value.',
          same: 'Les champs :attribute et :same doivent correspondre.',
          size: {
            numeric: 'Le champ :attribute doit être égal à :size.',
            string: 'Le champ :attribute doit contenir :size caractères.',
          },
          url: 'Le format du champ :attribute est invalide.',
          regex: 'Le format du champ :attribute est invalide.',
          attributes: {},
        }
      },
      7494: (t) => {
        t.exports = {
          accepted: 'Polje :attribute mora biti prihvaćeno.',
          active_url: 'Polje :attribute nije ispravan URL.',
          after: 'Polje :attribute mora biti datum nakon :date.',
          after_or_equal:
            'Polje :attribute mora biti datum veći ili jednak :date.',
          alpha: 'Polje :attribute smije sadržavati samo slova.',
          alpha_dash:
            'Polje :attribute smije sadržavati samo slova, brojeve i crtice.',
          alpha_num: 'Polje :attribute smije sadržavati samo slova i brojeve.',
          attributes: {},
          array: 'Polje :attribute mora biti niz.',
          before: 'Polje :attribute mora biti datum prije :date.',
          before_or_equal:
            'Polje :attribute mora biti datum manji ili jednak :date.',
          between: {
            numeric: 'Polje :attribute mora biti između :min - :max.',
            file: 'Polje :attribute mora biti između :min - :max kilobajta.',
            string: 'Polje :attribute mora biti između :min - :max znakova.',
            array: 'Polje :attribute mora imati između :min - :max stavki.',
          },
          boolean: 'Polje :attribute mora biti false ili true.',
          confirmed: 'Potvrda polja :attribute se ne podudara.',
          date: 'Polje :attribute nije ispravan datum.',
          date_format: 'Polje :attribute ne podudara s formatom :format.',
          different: 'Polja :attribute i :other moraju biti različita.',
          digits: 'Polje :attribute mora sadržavati :digits znamenki.',
          digits_between:
            'Polje :attribute mora imati između :min i :max znamenki.',
          dimensions: 'Polje :attribute ima neispravne dimenzije slike.',
          distinct: 'Polje :attribute ima dupliciranu vrijednost.',
          email: 'Polje :attribute mora biti ispravna e-mail adresa.',
          exists: 'Odabrano polje :attribute nije ispravno.',
          file: 'Polje :attribute mora biti datoteka.',
          filled: 'Polje :attribute je obavezno.',
          gt: {
            numeric: 'Polje :attribute mora biti veće od :value.',
            file: 'Polje :attribute mora biti veće od :value kilobajta.',
            string: 'Polje :attribute mora biti veće od :value karaktera.',
            array: 'Polje :attribute mora biti veće od :value stavki.',
          },
          gte: {
            numeric: 'Polje :attribute mora biti veće ili jednako :value.',
            file: 'Polje :attribute mora biti veće ili jednako :value kilobajta.',
            string:
              'Polje :attribute mora biti veće ili jednako :value znakova.',
            array: 'Polje :attribute mora imati :value stavki ili više.',
          },
          hex: 'The :attribute field should have hexadecimal format',
          image: 'Polje :attribute mora biti slika.',
          in: 'Odabrano polje :attribute nije ispravno.',
          in_array: 'Polje :attribute ne postoji u :other.',
          integer: 'Polje :attribute mora biti broj.',
          ip: 'Polje :attribute mora biti ispravna IP adresa.',
          ipv4: 'Polje :attribute mora biti ispravna IPv4 adresa.',
          ipv6: 'Polje :attribute mora biti ispravna IPv6 adresa.',
          json: 'Polje :attribute mora biti ispravan JSON string.',
          lt: {
            numeric: 'Polje :attribute mora biti manje od :value.',
            file: 'Polje :attribute mora biti manje od :value kilobajta.',
            string: 'Polje :attribute mora biti manje od :value znakova.',
            array: 'Polje :attribute mora biti manje od :value stavki.',
          },
          lte: {
            numeric: 'Polje :attribute mora biti manje ili jednako :value.',
            file: 'Polje :attribute mora biti manje ili jednako :value kilobajta.',
            string:
              'Polje :attribute mora biti manje ili jednako :value znakova.',
            array: 'Polje :attribute ne smije imati više od :value stavki.',
          },
          max: {
            numeric: 'Polje :attribute mora biti manje od :max.',
            file: 'Polje :attribute mora biti manje od :max kilobajta.',
            string: 'Polje :attribute mora sadržavati manje od :max znakova.',
            array: 'Polje :attribute ne smije imati više od :max stavki.',
          },
          mimes: 'Polje :attribute mora biti datoteka tipa: :values.',
          mimetypes: 'Polje :attribute mora biti datoteka tipa: :values.',
          min: {
            numeric: 'Polje :attribute mora biti najmanje :min.',
            file: 'Polje :attribute mora biti najmanje :min kilobajta.',
            string: 'Polje :attribute mora sadržavati najmanje :min znakova.',
            array: 'Polje :attribute mora sadržavati najmanje :min stavki.',
          },
          not_in: 'Odabrano polje :attribute nije ispravno.',
          not_regex: 'Format polja :attribute je neispravan.',
          numeric: 'Polje :attribute mora biti broj.',
          present: 'Polje :attribute mora biti prisutno.',
          regex: 'Polje :attribute se ne podudara s formatom.',
          required: 'Polje :attribute je obavezno.',
          required_if:
            'Polje :attribute je obavezno kada polje :other sadrži :value.',
          required_unless:
            'Polje :attribute je obavezno osim :other je u :values.',
          required_with:
            'Polje :attribute je obavezno kada postoji polje :values.',
          required_with_all:
            'Polje :attribute je obavezno kada postje polja :values.',
          required_without:
            'Polje :attribute je obavezno kada ne postoji polje :values.',
          required_without_all:
            'Polje :attribute je obavezno kada nijedno od polja :values ne postoji.',
          same: 'Polja :attribute i :other se moraju podudarati.',
          size: {
            numeric: 'Polje :attribute mora biti :size.',
            file: 'Polje :attribute mora biti :size kilobajta.',
            string: 'Polje :attribute mora biti :size znakova.',
            array: 'Polje :attribute mora sadržavati :size stavki.',
          },
          string: 'Polje :attribute mora biti string.',
          timezone: 'Polje :attribute mora biti ispravna vremenska zona.',
          unique: 'Polje :attribute već postoji.',
          uploaded: 'Polje :attribute nije uspešno učitano.',
          url: 'Polje :attribute nije ispravnog formata.',
        }
      },
      8789: (t) => {
        t.exports = {
          accepted: 'A(z) :attribute el kell legyen fogadva!',
          active_url: 'A(z) :attribute nem érvényes url!',
          after: 'A(z) :attribute :date utáni dátum kell, hogy legyen!',
          after_or_equal:
            'A(z) :attribute nem lehet korábbi dátum, mint :date!',
          alpha: 'A(z) :attribute kizárólag betűket tartalmazhat!',
          alpha_dash:
            'A(z) :attribute kizárólag betűket, számokat és kötőjeleket tartalmazhat!',
          alpha_num:
            'A(z) :attribute kizárólag betűket és számokat tartalmazhat!',
          attributes: {},
          array: 'A(z) :attribute egy tömb kell, hogy legyen!',
          before: 'A(z) :attribute :date előtti dátum kell, hogy legyen!',
          before_or_equal:
            'A(z) :attribute nem lehet későbbi dátum, mint :date!',
          between: {
            numeric:
              'A(z) :attribute :min és :max közötti szám kell, hogy legyen!',
            file: 'A(z) :attribute mérete :min és :max kilobájt között kell, hogy legyen!',
            string:
              'A(z) :attribute hossza :min és :max karakter között kell, hogy legyen!',
            array:
              'A(z) :attribute :min - :max közötti elemet kell, hogy tartalmazzon!',
          },
          boolean: 'A(z) :attribute mező csak true vagy false értéket kaphat!',
          confirmed: 'A(z) :attribute nem egyezik a megerősítéssel.',
          date: 'A(z) :attribute nem érvényes dátum.',
          date_format:
            'A(z) :attribute nem egyezik az alábbi dátum formátummal :format!',
          different:
            'A(z) :attribute és :other értékei különbözőek kell, hogy legyenek!',
          digits: 'A(z) :attribute :digits számjegyű kell, hogy legyen!',
          digits_between:
            'A(z) :attribute értéke :min és :max közötti számjegy lehet!',
          dimensions: 'A(z) :attribute felbontása nem megfelelő.',
          distinct: 'A(z) :attribute értékének egyedinek kell lennie!',
          email: 'A(z) :attribute nem érvényes email formátum.',
          exists: 'A(z) :attribute már létezik.',
          file: 'A(z) :attribute fájl kell, hogy legyen!',
          filled: 'A(z) :attribute megadása kötelező!',
          gt: {
            numeric: 'A(z) :attribute nagyobb kell, hogy legyen, mint :value!',
            file: 'A(z) :attribute mérete nagyobb kell, hogy legyen, mint :value kilobájt.',
            string:
              'A(z) :attribute hosszabb kell, hogy legyen, mint :value karakter.',
            array:
              'A(z) :attribute több, mint :value elemet kell, hogy tartalmazzon.',
          },
          gte: {
            numeric:
              'A(z) :attribute nagyobb vagy egyenlő kell, hogy legyen, mint :value!',
            file: 'A(z) :attribute mérete nem lehet kevesebb, mint :value kilobájt.',
            string:
              'A(z) :attribute hossza nem lehet kevesebb, mint :value karakter.',
            array:
              'A(z) :attribute legalább :value elemet kell, hogy tartalmazzon.',
          },
          hex: 'The :attribute field should have hexadecimal format',
          image: 'A(z) :attribute képfájl kell, hogy legyen!',
          in: 'A kiválasztott :attribute érvénytelen.',
          in_array:
            'A(z) :attribute értéke nem található a(z) :other értékek között.',
          integer: 'A(z) :attribute értéke szám kell, hogy legyen!',
          ip: 'A(z) :attribute érvényes IP cím kell, hogy legyen!',
          ipv4: 'A(z) :attribute érvényes IPv4 cím kell, hogy legyen!',
          ipv6: 'A(z) :attribute érvényes IPv6 cím kell, hogy legyen!',
          json: 'A(z) :attribute érvényes JSON szöveg kell, hogy legyen!',
          lt: {
            numeric: 'A(z) :attribute kisebb kell, hogy legyen, mint :value!',
            file: 'A(z) :attribute mérete kisebb kell, hogy legyen, mint :value kilobájt.',
            string:
              'A(z) :attribute rövidebb kell, hogy legyen, mint :value karakter.',
            array:
              'A(z) :attribute kevesebb, mint :value elemet kell, hogy tartalmazzon.',
          },
          lte: {
            numeric:
              'A(z) :attribute kisebb vagy egyenlő kell, hogy legyen, mint :value!',
            file: 'A(z) :attribute mérete nem lehet több, mint :value kilobájt.',
            string:
              'A(z) :attribute hossza nem lehet több, mint :value karakter.',
            array:
              'A(z) :attribute legfeljebb :value elemet kell, hogy tartalmazzon.',
          },
          max: {
            numeric: 'A(z) :attribute értéke nem lehet nagyobb, mint :max!',
            file: 'A(z) :attribute mérete nem lehet több, mint :max kilobájt.',
            string:
              'A(z) :attribute hossza nem lehet több, mint :max karakter.',
            array:
              'A(z) :attribute legfeljebb :max elemet kell, hogy tartalmazzon.',
          },
          mimes:
            'A(z) :attribute kizárólag az alábbi fájlformátumok egyike lehet: :values.',
          mimetypes:
            'A(z) :attribute kizárólag az alábbi fájlformátumok egyike lehet: :values.',
          min: {
            numeric: 'A(z) :attribute értéke nem lehet kisebb, mint :min!',
            file: 'A(z) :attribute mérete nem lehet kevesebb, mint :min kilobájt.',
            string:
              'A(z) :attribute hossza nem lehet kevesebb, mint :min karakter.',
            array:
              'A(z) :attribute legalább :min elemet kell, hogy tartalmazzon.',
          },
          not_in: 'A(z) :attribute értéke érvénytelen.',
          not_regex: 'A(z) :attribute formátuma érvénytelen.',
          numeric: 'A(z) :attribute szám kell, hogy legyen!',
          present: 'A(z) :attribute mező nem található!',
          regex: 'A(z) :attribute formátuma érvénytelen.',
          required: 'A(z) :attribute megadása kötelező!',
          required_if:
            'A(z) :attribute megadása kötelező, ha a(z) :other értéke :value!',
          required_unless:
            'A(z) :attribute megadása kötelező, ha a(z) :other értéke nem :values!',
          required_with:
            'A(z) :attribute megadása kötelező, ha a(z) :values érték létezik.',
          required_with_all:
            'A(z) :attribute megadása kötelező, ha a(z) :values értékek léteznek.',
          required_without:
            'A(z) :attribute megadása kötelező, ha a(z) :values érték nem létezik.',
          required_without_all:
            'A(z) :attribute megadása kötelező, ha egyik :values érték sem létezik.',
          same: 'A(z) :attribute és :other mezőknek egyezniük kell!',
          size: {
            numeric: 'A(z) :attribute értéke :size kell, hogy legyen!',
            file: 'A(z) :attribute mérete :size kilobájt kell, hogy legyen!',
            string: 'A(z) :attribute hossza :size karakter kell, hogy legyen!',
            array: 'A(z) :attribute :size elemet kell tartalmazzon!',
          },
          string: 'A(z) :attribute szöveg kell, hogy legyen.',
          timezone: 'A(z) :attribute nem létező időzona.',
          unique: 'A(z) :attribute már foglalt.',
          uploaded: 'A(z) :attribute feltöltése sikertelen.',
          url: 'A(z) :attribute érvénytelen link.',
        }
      },
      2846: (t) => {
        t.exports = {
          accepted: ':attribute harus disetujui.',
          after: ':attribute harus setelah :after.',
          after_or_equal:
            ':attribute harus sama dengan atau setelah :after_or_equal.',
          alpha: ':attribute hanya boleh berisi huruf.',
          alpha_dash: ':attribute hanya boleh berisi huruf, - atau _.',
          alpha_num: ':attribute hanya boleh berisi huruf dan angka.',
          before: ':attribute harus sebelum :before.',
          before_or_equal:
            ':attribute harus sama dengan atau sebelum :before_or_equal.',
          between: ':attribute harus berisi antara :min dan :max.',
          confirmed: ':attribute konfirmasi tidak sama.',
          email: ':attribute harus berupa email.',
          date: ':attribute format tanggal tidak benar.',
          def: ':attribute attribute has errors.',
          digits: ':attribute harus :digits digit.',
          digits_between: 'Isian :attribute harus antara angka :min dan :max.',
          different: ':attribute dan :different harus berbeda.',
          in: ':attribute tidak benar.',
          integer: ':attribute harus berupa angka.',
          hex: ':attribute harus berformat heksadesimal',
          min: {
            numeric: ':attribute minimal :min.',
            string: ':attribute minimal :min karakter.',
          },
          max: {
            numeric: ':attribute harus lebih kecil :max.',
            string: ':attribute maksimal :max karakter.',
          },
          not_in: ':attribute tidak benar.',
          numeric: ':attribute harus berupa angka.',
          present: ':attribute harus ada (tapi boleh kosong).',
          required: ':attribute tidak boleh kosong.',
          required_if: ':attribute harus di isi jika :other berisi :value.',
          required_unless:
            ':attribute harus di isi jika :other tidak berisi :value.',
          required_with: ':attribute harus di isi jika :field tidak kosong.',
          required_with_all:
            ':attribute harus di isi jika :fields tidak kosong.',
          required_without: ':attribute harus di isi jika :field kosong.',
          required_without_all: ':attribute harus di isi jika :fields kosong.',
          same: ':attribute dan :same harus sama.',
          size: {
            numeric: ':attribute harus berisi :size.',
            string: ':attribute harus berisi :size karakter.',
          },
          string: ':attribute harus berupa string.',
          url: ':attribute harus berupa format url.',
          regex: ':attribute format tidak benar.',
          attributes: {},
        }
      },
      830: (t) => {
        t.exports = {
          accepted: 'Il campo :attribute deve essere accettato.',
          alpha:
            'Il campo :attribute deve contenere sono caratteri alfabetici.',
          alpha_dash:
            'Il campo :attribute può contenere solo caratteri alfanumerici oltre a trattini e trattini bassi.',
          alpha_num: 'Il campo :attribute deve essere alfanumerico.',
          between: 'Il campo :attribute deve essere compreso tra :min e :max.',
          confirmed: 'Il campo conferma :attribute non è uguale.',
          email: "Il formato dell'attributo :attribute non è valido.",
          def: 'Gli attributi del campo :attribute contengono degli errori.',
          digits: 'Il campo :attribute deve essere di :digits cifre.',
          digits_between:
            'Il campo :attribute deve essere tra :min e :max cifre.',
          different: 'Il campo :attribute e :different devo essere diversi.',
          in: 'Il valore del campo :attribute non è valido.',
          integer: 'Il campo :attribute deve essere un valore intero.',
          hex: 'Il campo :attribute deve essere in formato esadecimale',
          min: {
            numeric:
              'Il campo :attribute deve essere maggiore o uguale di :min.',
            string:
              'Il campo :attribute deve essere composto da almeno :min caratteri.',
          },
          max: {
            numeric: 'Il campo :attribute deve essere minore o uguale di :max.',
            string:
              'Il campo :attribute deve essere composto da massimo :max caratteri.',
          },
          not_in: 'Il campo :attribute non è valido.',
          numeric: 'Il campo :attribute deve essere un numero.',
          present:
            'Il campo :attribute deve essere presente (ma può essere vuoto).',
          required: 'Il campo :attribute è richiesto.',
          required_if:
            'Il campo :attribute è richiesto quando il campo :other è uguale a :value.',
          same: 'I campi :attribute e :same devono essere uguali.',
          size: {
            numeric:
              'La dimensione del campo :attribute deve essere uguale a :size.',
            string: 'Il campo :attribute deve essere di :size caratteri.',
          },
          string: 'Il campo :attribute deve essere una stringa.',
          url: 'Il formato del campo :attribute non è valido.',
          regex: 'Il formato del campo :attribute non è valido.',
          attributes: {},
        }
      },
      8938: (t) => {
        t.exports = {
          accepted: ':attributeを確認してください。',
          after: ':attributeは:afterより後の日付を入力してください。',
          after_or_equal:
            ':attributeは:after_or_equal以降の日付を入力してください。',
          alpha: ':attributeは英字のみで入力してください。',
          alpha_dash:
            ':attributeは英字とダッシュと下線のみで入力してください。',
          alpha_num: ':attributeは英数字のみで入力してください。',
          before: ':attributeは:beforeより前の日付を入力してください。',
          before_or_equal:
            ':attributeは:before_or_equal以前の日付を入力してください。',
          between: {
            numeric: ':attributeは:min〜:maxの間で指定してください',
            string: ':attributeは:min〜:max文字を入力してください',
          },
          confirmed: ':attributeは確認が一致しません。',
          email: ':attributeは正しいメールアドレスを入力してください。',
          date: ':attributeは正しい日付形式を入力してください',
          def: ':attributeは検証エラーが含まれています。',
          digits: ':attributeは:digitsの数字のみで入力してください。',
          digits_between: ':attributeは、:min桁から:max桁にしてください。',
          different: ':attributeと:differentは同じであってはなりません。',
          in: '選択された:attributeは無効です。',
          integer: ':attributeは整数で入力してください。',
          hex: ':attributeは16進数で入力してください。',
          min: {
            numeric: ':attributeは:min以上で入力してください。',
            string: ':attributeは:min文字以上で入力してください。',
          },
          max: {
            numeric: ':attributeは:max以下で入力してください。',
            string: ':attributeは:max文字以下で入力してください。',
          },
          not_in: '選択された:attributeは無効です。',
          numeric: ':attributeは数値で入力してください。',
          present: ':attributeを入力してください（空欄も可能です）。',
          required: ':attributeは必須です。',
          required_if: ':otherは:valueになったら:attributeは必須です。',
          required_unless: ':otherが:valueでなければ:attributeは必須です。',
          required_with: ':fieldが空欄でなければ:attributeは必須です。',
          required_with_all: ':fieldsが空欄でなければ:attributeは必須です。',
          required_without: ':fieldが空欄なら:attributeは必須です。',
          required_without_all: ':fieldsが空欄なら:attributeは必須です。',
          same: ':attributeと:sameは同じでなければなりません。',
          size: {
            numeric: ':attributeは:sizeを入力してください。',
            string: ':attributeは:size文字で入力してください。',
          },
          string: ':attributeは文字のみで入力してください。',
          url: ':attributeは正しいURIを入力してください。',
          regex: ':attributeの値はパターンにマッチする必要があります。',
          attributes: {},
        }
      },
      3330: (t) => {
        t.exports = {
          accepted: ':attribute უნდა იყოს მონიშნული.',
          active_url: ':attribute უნდა იყოს URL მისამართი.',
          after: ':attribute უნდა იყოს :date-ის შემდეგ.',
          after_or_equal: ':attribute უნდა იყოს :date-ის შემდეგ ან მისი ტოლი.',
          alpha: ':attribute უნდა შეიცავდეს მხოლოდ ასოებს.',
          alpha_dash:
            ':attribute უნდა შეიცავდეს მხოლოდ ასოებს, რიცხვებს და ტირეებს.',
          alpha_num: ':attribute უნდა შეიცავდეს მხოლოდ ასოებს და რიცხვებს.',
          attributes: {},
          array: ':attribute უნდა იყოს მასივი.',
          before: ':attribute უნდა იყოს :date-მდე.',
          before_or_equal: ':attribute უნდა იყოს :date-მდე ან მისი ტოლი.',
          between: {
            numeric: ':attribute უნდა იყოს :min-სა და :max-ს შორის.',
            file: ':attribute უნდა იყოს :min-სა და :max კილობაიტს შორის.',
            string: ':attribute უნდა იყოს :min-სა და :max სიმბოლოს შორის.',
            array: ':attribute-ის რაოდენობა უნდა იყოს :min-დან :max-მდე.',
          },
          boolean: ':attribute უნდა იყოს true, false, 0 ან 1.',
          confirmed: ':attribute არ ემთხვევა დადასტურებას.',
          date: ':attribute შეიცავს თარიღის არასწორ ფორმატს.',
          date_format: ':attribute არ ემთხვევა თარიღის ფორმატს: :format.',
          different: ':attribute და :other არ უნდა ემთხვეოდეს ერთმანეთს.',
          digits: ':attribute უნდა შედგებოდეს :digits ციფრისგან.',
          digits_between: ':attribute უნდა შედგებოდეს :min-დან :max ციფრამბდე.',
          dimensions: ':attribute შეიცავს სურათის არასწორ ზომებს.',
          distinct: ':attribute უნდა იყოს უნიკალური.',
          email: ':attribute უნდა იყოს სწორი ელ.ფოსტა.',
          exists: 'ასეთი :attribute არ არსებობს.',
          file: ':attribute უნდა იყოს ფაილი.',
          filled: ':attribute აუცილებელია.',
          gt: {
            numeric: ':attribute უნდა იყოს :value-ზე მეტი.',
            file: ':attribute უნდა იყოს :value კილობაიტზე მეტი.',
            string: ':attribute უნდა შეიცავდეს :value სიმბოლოზე მეტს.',
            array: ':attribute უნდა შეიცავლდეს :value ელემენტზე მეტს.',
          },
          gte: {
            numeric: ':attribute უნდა იყოს მინიმუმ :value.',
            file: ':attribute უნდა იყოს მინიმუმ :value კილობაიტი.',
            string: ':attribute უნდა შეიცავდეს მინიმუმ :value სიმბოლოს.',
            array: ':attribute უნდა შეიცავდეს მინიმუმ :value ელემენტს.',
          },
          hex: 'The :attribute field should have hexadecimal format',
          image: ':attribute უნდა იყოს სურათი.',
          in: 'მითითებული :attribute არასწორია.',
          in_array: ':attribute უნდა არსებობდეს :other-ში.',
          integer: ':attribute უნდა იყოს მთელი რიცხვი.',
          ip: ':attribute უნდა იყოს IP მისამართი.',
          ipv4: ':attribute უნდა იყოს IPv4 მისამართი.',
          ipv6: ':attribute უნდა იყოს IPv6 მისამართი.',
          json: ':attribute უნდა იყოს JSON ტიპის.',
          lt: {
            numeric: ':attribute უნდა იყოს :value-ზე ნაკლები.',
            file: ':attribute უნდა იყოს :value კილობაიტზე ნაკლები.',
            string: ':attribute უნდა შეიცავდეს :value სიმბოლოზე ნაკლებს.',
            array: ':attribute უნდა შეიცავლდეს :value ელემენტზე ნაკლებს.',
          },
          lte: {
            numeric: ':attribute უნდა იყოს მაქსიმუმ :value.',
            file: ':attribute უნდა იყოს მაქსიმუმ :value კილობაიტი.',
            string: ':attribute უნდა შეიცავდეს მაქსიმუმ :value სიმბოლოს.',
            array: ':attribute უნდა შეიცავდეს მაქსიმუმ :value ელემენტს.',
          },
          max: {
            numeric: ':attribute არ უნდა აღემატებოდეს :max-ს.',
            file: ':attribute არ უნდა აღემატებოდეს :max კილობაიტს.',
            string: ':attribute არ უნდა აღემატებოდეს :max სიმბოლოს.',
            array: ':attribute-ის რაოდენობა არ უნდა აღემატებოდეს :max-ს.',
          },
          mimes: ':attribute უნდა იყოს შემდეგი ტიპის: :values.',
          mimetypes: ':attribute უნდა იყოს შემდეგი ტიპის: :values.',
          min: {
            numeric: ':attribute უნდა იყოს მინიმუმ :min.',
            file: ':attribute უნდა იყოს მინიმუმ :min კილობაიტი.',
            string: ':attribute უნდა შეიცავდეს მინიმუმ :min სიმბოლოს.',
            array: ':attribute უნდა იყოს მინიმუმ :min.',
          },
          not_in: 'მითითებული :attribute არასწორია.',
          not_regex: ':attribute არასწორ ფორმატშია.',
          numeric: ':attribute უნდა იყოს რიცხვი.',
          present: ':attribute უნდა არსებობდეს, თუნდაც ცარიელი.',
          regex: ':attribute არ ემთხვევა ფორმატს.',
          required: ':attribute აუცილებელია.',
          required_if:
            ':attribute აუცილებელია, თუ :other-ის მნიშვნელობა ემთხვევა :value-ს.',
          required_unless:
            ':attribute აუცილებელია, თუ :values არ შეიცავს :other-ს.',
          required_with: ':attribute აუცილებელია, თუ :values მითითებულია.',
          required_with_all: ':attribute აუცილებელია, თუ :values მითითებულია.',
          required_without:
            ':attribute აუცილებელია, თუ :values არ არის მითითებული.',
          required_without_all:
            ':attribute აუცილებელია, თუ :values არ არის მითითებული.',
          same: ':attribute და :other უნდა ემთხვეოდეს ერთმანეთს.',
          size: {
            numeric: ':attribute უნდა იყოს :size-ის ტოლი.',
            file: ':attribute უნდა იყოს :size კილობაიტი.',
            string: ':attribute უნდა შედგებოდეს :size სიმბოლოსგან.',
            array: ':attribute უნდა შეიცავდეს :size ელემენტს.',
          },
          string: ':attribute უნდა იყოს ტექსტი.',
          timezone: ':attribute უნდა იყოს სასაათო სარტყელი.',
          unique: 'ასეთი :attribute უკვე არსებობს.',
          uploaded: ':attribute-ის ატვირთვა ვერ მოხერხდა.',
          url: ':attribute უნდა იყოს URL მისამართი.',
        }
      },
      646: (t) => {
        t.exports = {
          accepted: ':attribute을(를) 동의해야 합니다.',
          active_url: ':attribute은(는) 유효한 URL이 아닙니다.',
          after: ':attribute은(는) :date 이후 날짜여야 합니다.',
          after_or_equal:
            ':attribute은(는) :date 이후 날짜이거나 같은 날짜여야 합니다.',
          alpha: ':attribute은(는) 문자만 포함할 수 있습니다.',
          alpha_dash:
            ':attribute은(는) 문자, 숫자, 대쉬(-)만 포함할 수 있습니다.',
          alpha_num: ':attribute은(는) 문자와 숫자만 포함할 수 있습니다.',
          attributes: {},
          array: ':attribute은(는) 배열이어야 합니다.',
          before: ':attribute은(는) :date 이전 날짜여야 합니다.',
          before_or_equal:
            ':attribute은(는) :date 이전 날짜이거나 같은 날짜여야 합니다.',
          between: {
            numeric: ':attribute은(는) :min에서 :max 사이여야 합니다.',
            file: ':attribute은(는) :min에서 :max 킬로바이트 사이여야 합니다.',
            string: ':attribute은(는) :min에서 :max 문자 사이여야 합니다.',
            array: ':attribute은(는) :min에서 :max 개의 항목이 있어야 합니다.',
          },
          boolean: ':attribute은(는) true 또는 false 이어야 합니다.',
          confirmed: ':attribute 확인 항목이 일치하지 않습니다.',
          date: ':attribute은(는) 유효한 날짜가 아닙니다.',
          date_format: ':attribute이(가) :format 형식과 일치하지 않습니다.',
          different: ':attribute와(과) :other은(는) 서로 달라야 합니다.',
          digits: ':attribute은(는) :digits 자리 숫자여야 합니다.',
          digits_between:
            ':attribute)은(는) :min에서 :max 자리 사이여야 합니다.',
          dimensions: ':attribute은(는) 유효하지 않는 이미지 크기입니다.',
          distinct: ':attribute 필드에 중복된 값이 있습니다.',
          email: ':attribute은(는) 유효한 이메일 주소여야 합니다.',
          exists: '선택된 :attribute은(는) 유효하지 않습니다.',
          file: ':attribute은(는) 파일이어야 합니다.',
          filled: ':attribute 필드는 값이 있어야 합니다.',
          gt: {
            numeric: ':attribute의 값은 :value보다 커야 합니다.',
            file: ':attribute의 용량은 :value킬로바이트보다 커야 합니다.',
            string: ':attribute의 길이는 :value보다 길어야 합니다.',
            array: ':attribute의 항목수는 :value개 보다 많아야 합니다.',
          },
          gte: {
            numeric: ':attribute의 값은 :value보다 같거나 커야 합니다.',
            file: ':attribute의 용량은 :value킬로바이트보다 같거나 커야 합니다.',
            string: ':attribute의 길이는 :value보다 같거나 길어야 합니다.',
            array: ':attribute의 항목수는 :value개 보다 같거나 많아야 합니다.',
          },
          hex: 'The :attribute field should have hexadecimal format',
          image: ':attribute은(는) 이미지여야 합니다.',
          in: '선택된 :attribute은(는) 유효하지 않습니다.',
          in_array: ':attribute 필드는 :other에 존재하지 않습니다.',
          integer: ':attribute은(는) 정수여야 합니다.',
          ip: ':attribute은(는) 유효한 IP 주소여야 합니다.',
          ipv4: ':attribute은(는) 유효한 IPv4 주소여야 합니다.',
          ipv6: ':attribute은(는) 유효한 IPv6 주소여야 합니다.',
          json: ':attribute은(는) JSON 문자열이어야 합니다.',
          lt: {
            numeric: ':attribute의 값은 :value보다 작아야 합니다.',
            file: ':attribute의 용량은 :value킬로바이트보다 작아야 합니다.',
            string: ':attribute의 길이는 :value보다 짧아야 합니다.',
            array: ':attribute의 항목수는 :value개 보다 작아야 합니다.',
          },
          lte: {
            numeric: ':attribute의 값은 :value보다 같거나 작아야 합니다.',
            file: ':attribute의 용량은 :value킬로바이트보다 같거나 작아야 합니다.',
            string: ':attribute의 길이는 :value보다 같거나 짧아야 합니다.',
            array: ':attribute의 항목수는 :value개 보다 같거나 작아야 합니다.',
          },
          max: {
            numeric: ':attribute은(는) :max보다 클 수 없습니다.',
            file: ':attribute은(는) :max킬로바이트보다 클 수 없습니다.',
            string: ':attribute은(는) :max자보다 클 수 없습니다.',
            array: ':attribute은(는) :max개보다 많을 수 없습니다.',
          },
          mimes: ':attribute은(는) 다음의 파일 형식이어야 합니다: :values.',
          mimetypes: ':attribute은(는) 다음의 파일 형식이어야 합니다: :values.',
          min: {
            numeric: ':attribute은(는) 최소한 :min이어야 합니다.',
            file: ':attribute은(는) 최소한 :min킬로바이트이어야 합니다.',
            string: ':attribute은(는) 최소한 :min자이어야 합니다.',
            array: ':attribute은(는) 최소한 :min개의 항목이 있어야 합니다.',
          },
          not_in: '선택된 :attribute이(가) 유효하지 않습니다.',
          not_regex: ':attribute의 형식이 올바르지 않습니다.',
          numeric: ':attribute은(는) 숫자여야 합니다.',
          present: ':attribute 필드가 있어야 합니다.',
          regex: ':attribute 형식이 유효하지 않습니다.',
          required: ':attribute 필드는 필수입니다.',
          required_if:
            ':other이(가) :value 일 때 :attribute 필드는 필수입니다.',
          required_unless:
            ':other이(가) :value에 없다면 :attribute 필드는 필수입니다.',
          required_with:
            ':values이(가) 있는 경우 :attribute 필드는 필수입니다.',
          required_with_all:
            ':values이(가) 모두 있는 경우 :attribute 필드는 필수입니다.',
          required_without:
            ':values이(가) 없는 경우 :attribute 필드는 필수입니다.',
          required_without_all:
            ':values이(가) 모두 없는 경우 :attribute 필드는 필수입니다.',
          same: ':attribute와(과) :other은(는) 일치해야 합니다.',
          size: {
            numeric: ':attribute은(는) :size (이)여야 합니다.',
            file: ':attribute은(는) :size킬로바이트여야 합니다.',
            string: ':attribute은(는) :size자여야 합니다.',
            array: ':attribute은(는) :size개의 항목을 포함해야 합니다.',
          },
          string: ':attribute은(는) 문자열이어야 합니다.',
          timezone: ':attribute은(는) 올바른 시간대 이어야 합니다.',
          unique: ':attribute은(는) 이미 사용 중입니다.',
          uploaded: ':attribute을(를) 업로드하지 못했습니다.',
          url: ':attribute 형식은 유효하지 않습니다.',
        }
      },
      3772: (t) => {
        t.exports = {
          accepted: 'Laukas :attribute turi būti priimtas.',
          active_url:
            'Laukas :attribute nėra galiojantis internetinis adresas.',
          after: 'Lauko :attribute reikšmė turi būti po :date datos.',
          after_or_equal:
            'The :attribute must be a date after or equal to :date.',
          alpha: 'Laukas :attribute gali turėti tik raides.',
          alpha_dash:
            'Laukas :attribute gali turėti tik raides, skaičius ir brūkšnelius.',
          alpha_num: 'Laukas :attribute gali turėti tik raides ir skaičius.',
          attributes: {},
          array: 'Laukas :attribute turi būti masyvas.',
          before: 'Laukas :attribute turi būti data prieš :date.',
          before_or_equal:
            'The :attribute must be a date before or equal to :date.',
          between: {
            numeric: 'Lauko :attribute reikšmė turi būti tarp :min ir :max.',
            file: 'Failo dydis lauke :attribute turi būti tarp :min ir :max kilobaitų.',
            string:
              'Simbolių skaičius lauke :attribute turi būti tarp :min ir :max.',
            array:
              'Elementų skaičius lauke :attribute turi turėti nuo :min iki :max.',
          },
          boolean: "Lauko reikšmė :attribute turi būti 'taip' arba 'ne'.",
          confirmed: 'Lauko :attribute patvirtinimas nesutampa.',
          date: 'Lauko :attribute reikšmė nėra galiojanti data.',
          date_format: 'Lauko :attribute reikšmė neatitinka formato :format.',
          different: 'Laukų :attribute ir :other reikšmės turi skirtis.',
          digits: 'Laukas :attribute turi būti sudarytas iš :digits skaitmenų.',
          digits_between:
            'Laukas :attribute tuti turėti nuo :min iki :max skaitmenų.',
          dimensions:
            'Lauke :attribute įkeltas paveiksliukas neatitinka išmatavimų reikalavimo.',
          distinct: 'Laukas :attribute pasikartoja.',
          email:
            'Lauko :attribute reikšmė turi būti galiojantis el. pašto adresas.',
          file: 'The :attribute must be a file.',
          filled: 'Laukas :attribute turi būti užpildytas.',
          exists: 'Pasirinkta negaliojanti :attribute reikšmė.',
          gt: {
            numeric: 'The :attribute must be greater than :value.',
            file: 'The :attribute must be greater than :value kilobytes.',
            string: 'The :attribute must be greater than :value characters.',
            array: 'The :attribute must have more than :value items.',
          },
          gte: {
            numeric: 'The :attribute must be greater than or equal :value.',
            file: 'The :attribute must be greater than or equal :value kilobytes.',
            string:
              'The :attribute must be greater than or equal :value characters.',
            array: 'The :attribute must have :value items or more.',
          },
          hex: 'The :attribute field should have hexadecimal format',
          image: 'Lauko :attribute reikšmė turi būti paveikslėlis.',
          in: 'Pasirinkta negaliojanti :attribute reikšmė.',
          in_array: 'Laukas :attribute neegzistuoja :other lauke.',
          integer: 'Lauko :attribute reikšmė turi būti sveikasis skaičius.',
          ip: 'Lauko :attribute reikšmė turi būti galiojantis IP adresas.',
          ipv4: 'The :attribute must be a valid IPv4 address.',
          ipv6: 'The :attribute must be a valid IPv6 address.',
          json: 'Lauko :attribute reikšmė turi būti JSON tekstas.',
          lt: {
            numeric: 'The :attribute must be less than :value.',
            file: 'The :attribute must be less than :value kilobytes.',
            string: 'The :attribute must be less than :value characters.',
            array: 'The :attribute must have less than :value items.',
          },
          lte: {
            numeric: 'The :attribute must be less than or equal :value.',
            file: 'The :attribute must be less than or equal :value kilobytes.',
            string:
              'The :attribute must be less than or equal :value characters.',
            array: 'The :attribute must not have more than :value items.',
          },
          max: {
            numeric: 'Lauko :attribute reikšmė negali būti didesnė nei :max.',
            file: 'Failo dydis lauke :attribute reikšmė negali būti didesnė nei :max kilobaitų.',
            string:
              'Simbolių kiekis lauke :attribute reikšmė negali būti didesnė nei :max simbolių.',
            array:
              'Elementų kiekis lauke :attribute negali turėti daugiau nei :max elementų.',
          },
          mimes:
            'Lauko reikšmė :attribute turi būti failas vieno iš sekančių tipų: :values.',
          mimetypes:
            'Lauko reikšmė :attribute turi būti failas vieno iš sekančių tipų: :values.',
          min: {
            numeric: 'Lauko :attribute reikšmė turi būti ne mažesnė nei :min.',
            file: 'Failo dydis lauke :attribute turi būti ne mažesnis nei :min kilobaitų.',
            string:
              'Simbolių kiekis lauke :attribute turi būti ne mažiau nei :min.',
            array:
              'Elementų kiekis lauke :attribute turi būti ne mažiau nei :min.',
          },
          not_in: 'Pasirinkta negaliojanti reikšmė :attribute.',
          not_regex: 'The :attribute format is invalid.',
          numeric: 'Lauko :attribute reikšmė turi būti skaičius.',
          present: 'Laukas :attribute turi egzistuoti.',
          regex: 'Negaliojantis lauko :attribute formatas.',
          required: 'Privaloma užpildyti lauką :attribute.',
          required_if:
            'Privaloma užpildyti lauką :attribute kai :other yra :value.',
          required_unless:
            'Laukas :attribute yra privalomas, nebent :other yra tarp :values reikšmių.',
          required_with:
            'Privaloma užpildyti lauką :attribute kai pateikta :values.',
          required_with_all:
            'Privaloma užpildyti lauką :attribute kai pateikta :values.',
          required_without:
            'Privaloma užpildyti lauką :attribute kai nepateikta :values.',
          required_without_all:
            'Privaloma užpildyti lauką :attribute kai nepateikta nei viena iš reikšmių :values.',
          same: 'Laukai :attribute ir :other turi sutapti.',
          size: {
            numeric: 'Lauko :attribute reikšmė turi būti :size.',
            file: 'Failo dydis lauke :attribute turi būti :size kilobaitai.',
            string: 'Simbolių skaičius lauke :attribute turi būti :size.',
            array: 'Elementų kiekis lauke :attribute turi būti :size.',
          },
          string: 'Laukas :attribute turi būti tekstinis.',
          timezone: 'Lauko :attribute reikšmė turi būti galiojanti laiko zona.',
          unique: 'Tokia :attribute reikšmė jau pasirinkta.',
          uploaded: 'The :attribute failed to upload.',
          url: 'Negaliojantis lauko :attribute formatas.',
        }
      },
      3421: (t) => {
        t.exports = {
          accepted: ' :attribute ir jābūt pieņemtam.',
          active_url: ' :attribute ir ar nederīgu linku.',
          after: ' :attribute ir jābūt ar datumu pēc :datums.',
          after_or_equal:
            ' :attribute ir jābūt ar datumu pēc vai vienādu ar :datums.',
          alpha: ' :attribute var saturēt tikai burtus.',
          alpha_dash:
            ' :attribute var saturēt tikai burtus, nummurus un atstarpes.',
          alpha_num: ' :attribute var tikai saturēt burtus un nummurus.',
          attributes: {},
          array: ' :attribute ir jābūt sakārtotam.',
          before: ' :attribute ir jābūt ar datumu pirms :datums.',
          before_or_equal:
            ' :attribute ir jābūt ar datumu pirms vai vienādu ar :datums.',
          between: {
            numeric: ' :attribute jābūt starp :min un :max.',
            file: ' :attribute jābūt starp :min un :max kilobaiti.',
            string: ' :attribute jābūt no :min līdz :max zīmēm.',
            array: ' :attribute jābūt no :min līdz :max vienībām.',
          },
          boolean: ' :attribute laiciņam jābūt atbilstošam vai neatbilstošam.',
          confirmed: ' :attribute apstiprinājums neatbilst.',
          date: ' :attribute nav derīgs.',
          date_format: ' :attribute neatbilst formātam :format.',
          different: ' :attribute un :other ir jābūt citiem.',
          digits: ' :attribute ir jābūt :digits ciparam.',
          digits_between: ' :attribute ir jābūt :min un :max ciparam.',
          dimensions: ' :attribute ir nederīgs attēla izmērs.',
          distinct: ' :attribute laikam ir dubulta vērtība.',
          email: ' :attribute derīgam e-pastam.',
          exists: 'Izvēlētais :attribute ir nederīgs.',
          file: ' :attribute jābūt failam.',
          filled: ':attribute lauks ir nepieciešams.',
          gt: {
            numeric: 'The :attribute must be greater than :value.',
            file: 'The :attribute must be greater than :value kilobytes.',
            string: 'The :attribute must be greater than :value characters.',
            array: 'The :attribute must have more than :value items.',
          },
          gte: {
            numeric: 'The :attribute must be greater than or equal :value.',
            file: 'The :attribute must be greater than or equal :value kilobytes.',
            string:
              'The :attribute must be greater than or equal :value characters.',
            array: 'The :attribute must have :value items or more.',
          },
          hex: 'The :attribute field should have hexadecimal format',
          image: ' :attribute jābūt attēlam.',
          in: 'Izvēlētais :attribute ir nederīgs.',
          in_array: ' :attribute laiks neeksistē :cits.',
          integer: ' :attribute ir jabūt skaitim.',
          ip: ' :attribute jābūt derīgai IP adresei.',
          ipv4: 'The :attribute must be a valid IPv4 address.',
          ipv6: 'The :attribute must be a valid IPv6 address.',
          json: ' :attribute jābūt derīgai JSON virknei.',
          lt: {
            numeric: 'The :attribute must be less than :value.',
            file: 'The :attribute must be less than :value kilobytes.',
            string: 'The :attribute must be less than :value characters.',
            array: 'The :attribute must have less than :value items.',
          },
          lte: {
            numeric: 'The :attribute must be less than or equal :value.',
            file: 'The :attribute must be less than or equal :value kilobytes.',
            string:
              'The :attribute must be less than or equal :value characters.',
            array: 'The :attribute must not have more than :value items.',
          },
          max: {
            numeric: ' :attribute nedrīkst pārsniegt :max.',
            file: ' :attribute nedrīkst pārsniegt :max kilobaiti.',
            string: ' :attribute nedrīkst pārsniegt :max zīmes.',
            array: ' :attribute nedrīkst pārsniegt :max vienības.',
          },
          mimes: ' :attribute jābūt faila tipam: :values',
          mimetypes: ' :attribute jābūt faile tipam: :values.',
          min: {
            numeric: ' :attribute jābūt vismaz :min.',
            file: ' :attribute jābūt vismaz :min kilobaiti.',
            string: ' :attribute jābūt vismaz :min zīmes.',
            array: ' :attribute jāsatur vismaz :min vienības.',
          },
          not_in: ' izvēlieties :attribute ir nederīgs.',
          not_regex: 'The :attribute format is invalid.',
          numeric: ' :attribute jābūt skaitlim.',
          present: ' :attribute laikums ir nepieciešams.',
          regex: ' :attribute formāts ir nederīgs.',
          required: ' :attribute laukums ir nepieciešams.',
          required_if:
            ' :attribute laukums ir nepieciešams, ja vien :other ir :values.',
          required_unless:
            ' :attribute laukums ir nepieciešams, ja vien :other ir :values.',
          required_with:
            ' :attribute laukums ir nepieciešams, kad :values ir pieejama.',
          required_with_all:
            ' :attribute laukums ir nepieciešams, kad :values ir pieejama.',
          required_without:
            ' :attribute laukums ir nepieciešams, kad :values nav pieejama.',
          required_without_all:
            ' :attribute laukums ir nepieciešams, kad neviena no :values nav pieejama.',
          same: ' :attribute un :citiem ir jāsakrīt.',
          size: {
            numeric: ' :attribute jābūt :size.',
            file: ' :attribute jābūt :size kilobaiti.',
            string: ' :attribute jābūt :size zīmes.',
            array: ' :attribute jāsatur :size vienības.',
          },
          string: ' :attribute jābūt virknē.',
          timezone: ' :attribute jābūt derīgā zonā.',
          unique: ' :attribute jau ir aizņemts.',
          uploaded: ' :attribute netika augšuplādēts.',
          url: ' :attribute formāts ir nederīgs.',
        }
      },
      403: (t) => {
        t.exports = {
          accepted: 'Полето :attribute мора да биде прифатено.',
          active_url: 'Полето :attribute не е валиден URL.',
          after: 'Полето :attribute мора да биде датум после :date.',
          after_or_equal:
            'The :attribute must be a date after or equal to :date.',
          alpha: 'Полето :attribute може да содржи само букви.',
          alpha_dash:
            'Полето :attribute може да содржи само букви, цифри, долна црта и тире.',
          alpha_num: 'Полето :attribute може да содржи само букви и цифри.',
          attributes: {},
          array: 'Полето :attribute мора да биде низа.',
          before: 'Полето :attribute мора да биде датум пред :date.',
          before_or_equal:
            'The :attribute must be a date before or equal to :date.',
          between: {
            numeric: 'Полето :attribute мора да биде помеѓу :min и :max.',
            file: 'Полето :attribute мора да биде помеѓу :min и :max килобајти.',
            string:
              'Полето :attribute мора да биде помеѓу :min и :max карактери.',
            array:
              'Полето :attribute мора да има помеѓу :min - :max карактери.',
          },
          boolean: 'The :attribute field must be true or false',
          confirmed: 'Полето :attribute не е потврдено.',
          date: 'Полето :attribute не е валиден датум.',
          date_format: 'Полето :attribute не е во формат :format.',
          different: 'Полињата :attribute и :other треба да се различни.',
          digits: 'Полето :attribute треба да има :digits цифри.',
          digits_between:
            'Полето :attribute треба да има помеѓу :min и :max цифри.',
          dimensions: 'The :attribute has invalid image dimensions.',
          distinct: 'The :attribute field has a duplicate value.',
          email: 'Полето :attribute не е во валиден формат.',
          exists: 'Избранато поле :attribute веќе постои.',
          file: 'The :attribute must be a file.',
          filled: 'Полето :attribute е задолжително.',
          gt: {
            numeric: 'The :attribute must be greater than :value.',
            file: 'The :attribute must be greater than :value kilobytes.',
            string: 'The :attribute must be greater than :value characters.',
            array: 'The :attribute must have more than :value items.',
          },
          gte: {
            numeric: 'The :attribute must be greater than or equal :value.',
            file: 'The :attribute must be greater than or equal :value kilobytes.',
            string:
              'The :attribute must be greater than or equal :value characters.',
            array: 'The :attribute must have :value items or more.',
          },
          hex: 'The :attribute field should have hexadecimal format',
          image: 'Полето :attribute мора да биде слика.',
          in: 'Избраното поле :attribute е невалидно.',
          in_array: 'The :attribute field does not exist in :other.',
          integer: 'Полето :attribute мора да биде цел број.',
          ip: 'Полето :attribute мора да биде IP адреса.',
          ipv4: 'The :attribute must be a valid IPv4 address.',
          ipv6: 'The :attribute must be a valid IPv6 address.',
          json: 'The :attribute must be a valid JSON string.',
          lt: {
            numeric: 'The :attribute must be less than :value.',
            file: 'The :attribute must be less than :value kilobytes.',
            string: 'The :attribute must be less than :value characters.',
            array: 'The :attribute must have less than :value items.',
          },
          lte: {
            numeric: 'The :attribute must be less than or equal :value.',
            file: 'The :attribute must be less than or equal :value kilobytes.',
            string:
              'The :attribute must be less than or equal :value characters.',
            array: 'The :attribute must not have more than :value items.',
          },
          max: {
            numeric: 'Полето :attribute мора да биде помало од :max.',
            file: 'Полето :attribute мора да биде помало од :max килобајти.',
            string: 'Полето :attribute мора да има помалку од :max карактери.',
            array: 'Полето :attribute не може да има повеќе од :max карактери.',
          },
          mimes: 'Полето :attribute мора да биде фајл од типот: :values.',
          mimetypes: 'Полето :attribute мора да биде фајл од типот: :values.',
          min: {
            numeric: 'Полето :attribute мора да биде минимум :min.',
            file: 'Полето :attribute мора да биде минимум :min килобајти.',
            string: 'Полето :attribute мора да има минимум :min карактери.',
            array: 'Полето :attribute мора да има минимум :min карактери.',
          },
          not_in: 'Избраното поле :attribute е невалидно.',
          not_regex: 'The :attribute format is invalid.',
          numeric: 'Полето :attribute мора да биде број.',
          present: 'The :attribute field must be present.',
          regex: 'Полето :attribute е во невалиден формат.',
          required: 'Полето :attribute е задолжително.',
          required_if:
            'Полето :attribute е задолжително, кога :other е :value.',
          required_unless:
            'The :attribute field is required unless :other is in :values.',
          required_with:
            'Полето :attribute е задолжително, кога е внесено :values.',
          required_with_all:
            'The :attribute field is required when :values is present.',
          required_without:
            'Полето :attribute е задолжително, кога не е внесено :values.',
          required_without_all:
            'The :attribute field is required when none of :values are present.',
          same: 'Полињата :attribute и :other треба да совпаѓаат.',
          size: {
            numeric: 'Полето :attribute мора да биде :size.',
            file: 'Полето :attribute мора да биде :size килобајти.',
            string: 'Полето :attribute мора да има :size карактери.',
            array: 'Полето :attribute мора да има :size карактери.',
          },
          string: 'The :attribute must be a string.',
          timezone: 'The :attribute must be a valid zone.',
          unique: 'Полето :attribute веќе постои.',
          uploaded: 'The :attribute failed to upload.',
          url: 'Полето :attribute не е во валиден формат.',
        }
      },
      6079: (t) => {
        t.exports = {
          accepted: ':Attribute баталсан байх шаардлагатай.',
          active_url: ':Attribute талбарт зөв URL хаяг оруулна уу.',
          after: ':Attribute талбарт :date-с хойш огноо оруулна уу.',
          after_or_equal:
            ':Attribute талбарт :date эсвэл түүнээс хойш огноо оруулна уу.',
          alpha: ':Attribute талбарт латин үсэг оруулна уу.',
          alpha_dash:
            ':Attribute талбарт латин үсэг, тоо болон зураас оруулах боломжтой.',
          alpha_num:
            ':Attribute талбарт латин үсэг болон тоо оруулах боломжтой.',
          attributes: {},
          array: ':Attribute талбар массив байх шаардлагатай.',
          before: ':Attribute талбарт :date-с өмнөх огноо оруулна уу.',
          before_or_equal:
            ':attribute талбарт :date эсвэл түүнээс өмнөх огноо оруулна уу.',
          between: {
            numeric: ':Attribute талбарт :min-:max хооронд тоо оруулна уу.',
            file: ':Attribute талбарт :min-:max килобайт хэмжээтэй файл оруулна уу.',
            string: ':Attribute талбарт :min-:max урттай текст оруулна уу.',
            array: ':Attribute массивт :min-:max элемэнт байх шаардлагатай.',
          },
          boolean:
            ':Attribute талбарын утга үнэн эсвэл худал байх шаардлагатай.',
          confirmed: ':Attribute талбарын баталагажуулалт тохирохгүй байна.',
          date: ':Attribute талбарт оруулсан огноо буруу байна.',
          date_format: ':Attribute талбарт :format хэлбэртэй огноо оруулна уу.',
          different:
            ':Attribute талбарт :other -с өөр утга оруулах шаардлагатай.',
          digits:
            ':Attribute талбарт дараах цифрүүдээс оруулах боломжтой. :digits.',
          digits_between:
            ':Attribute талбарт :min-:max хоорондох цифр оруулах боломжтой.',
          dimensions: ':Attribute талбарийн зургийн хэмжээс буруу байна.',
          distinct: ':Attribute талбарт ялгаатай утга оруулах шаардлагатай.',
          email: ':Attribute талбарт зөв и-мэйл хаяг оруулах шаардлагатай.',
          exists: 'Сонгогдсон :attribute буруу байна.',
          file: ':Attribute талбарт файл оруулах шаардлагатай.',
          filled: ':Attribute талбар шаардлагатай.',
          gt: {
            numeric: 'The :attribute must be greater than :value.',
            file: 'The :attribute must be greater than :value kilobytes.',
            string: 'The :attribute must be greater than :value characters.',
            array: 'The :attribute must have more than :value items.',
          },
          gte: {
            numeric: 'The :attribute must be greater than or equal :value.',
            file: 'The :attribute must be greater than or equal :value kilobytes.',
            string:
              'The :attribute must be greater than or equal :value characters.',
            array: 'The :attribute must have :value items or more.',
          },
          hex: 'The :attribute field should have hexadecimal format',
          image: ':Attribute талбарт зураг оруулна уу.',
          in: 'Сонгогдсон :attribute буруу байна.',
          in_array: ':Attribute талбарт оруулсан утга :other -д байхгүй байна.',
          integer: ':Attribute талбарт бүхэл тоо оруулах шаардлагатай.',
          ip: ':Attribute талбарт зөв IP хаяг оруулах шаардлагатай.',
          ipv4: 'The :attribute must be a valid IPv4 address.',
          ipv6: 'The :attribute must be a valid IPv6 address.',
          json: ':Attribute талбарт зөв JSON тэмдэгт мөр оруулах шаардлагатай.',
          lt: {
            numeric: 'The :attribute must be less than :value.',
            file: 'The :attribute must be less than :value kilobytes.',
            string: 'The :attribute must be less than :value characters.',
            array: 'The :attribute must have less than :value items.',
          },
          lte: {
            numeric: 'The :attribute must be less than or equal :value.',
            file: 'The :attribute must be less than or equal :value kilobytes.',
            string:
              'The :attribute must be less than or equal :value characters.',
            array: 'The :attribute must not have more than :value items.',
          },
          max: {
            numeric:
              ':Attribute талбарт :max буюу түүнээс бага утга оруулна уу.',
            file: ':Attribute талбарт :max килобайтаас бага хэмжээтэй файл оруулна уу.',
            string: ':Attribute талбарт :max-с бага урттай текст оруулна уу.',
            array:
              ':Attribute талбарт хамгийн ихдээ :max элемэнт оруулах боломжтой.',
          },
          mimes:
            ':Attribute талбарт дараах төрлийн файл оруулах боломжтой: :values.',
          mimetypes:
            ':Attribute талбарт дараах төрлийн файл оруулах боломжтой: :values.',
          min: {
            numeric: ':Attribute талбарт :min буюу түүнээс их тоо оруулна уу.',
            file: ':Attribute талбарт :min килобайтаас их хэмжээтэй файл оруулна уу.',
            string:
              ':Attribute талбарт :min буюу түүнээс их үсэг бүхий текст оруулна уу.',
            array:
              ':Attribute талбарт хамгийн багадаа :min элемэнт оруулах боломжтой.',
          },
          not_in: 'Буруу :attribute сонгогдсон байна.',
          not_regex: 'The :attribute format is invalid.',
          numeric: ':Attribute талбарт тоон утга оруулна уу.',
          present: ':Attribute талбар байх шаардлагатай.',
          regex: ':Attribute талбарт оруулсан утга буруу байна.',
          required: ':Attribute талбар шаардлагатай.',
          required_if:
            'Хэрэв :other :value бол :attribute табларт утга оруулах шаардлагатай.',
          required_unless:
            ':other :values дотор байхгүй бол :attribute талбарт утга оруулах шаардлагатай.',
          required_with:
            ':values утгуудийн аль нэг байвал :attribute талбар шаардлагатай.',
          required_with_all:
            ':values утгууд байвал :attribute талбар шаардлагатай.',
          required_without:
            'The :attribute field is required when :values is not present.',
          required_without_all:
            'The :attribute field is required when none of :values are present.',
          same: 'The :attribute and :other must match.',
          size: {
            numeric: ':Attribute :size хэмжээтэй байх шаардлагатай.',
            file: ':Attribute :size килобайт хэмжээтэй байх шаардлагатай.',
            string: ':Attribute :size тэмдэгтийн урттай байх шаардлагатай.',
            array: ':Attribute :size элемэнттэй байх шаардлагатай.',
          },
          string: ':Attribute талбарт текст оруулна уу.',
          timezone: ':Attribute талбарт зөв цагийн бүс оруулна уу.',
          unique: 'Оруулсан :attribute аль хэдий нь бүртгэгдсэн байна.',
          uploaded: ':Attribute талбарт оруулсан файлыг хуулхад алдаа гарлаа.',
          url: ':Attribute зөв url хаяг оруулна уу.',
        }
      },
      6311: (t) => {
        t.exports = {
          accepted: ':attribute mesti diterima pakai.',
          active_url: ':attribute bukan URL yang sah.',
          after: ':attribute mesti tarikh selepas :date.',
          after_or_equal:
            ':attribute mesti tarikh selepas atau sama dengan :date.',
          alpha: ':attribute hanya boleh mengandungi huruf.',
          alpha_dash:
            ':attribute boleh mengandungi huruf, nombor, dan sengkang.',
          alpha_num: ':attribute boleh mengandungi huruf dan nombor.',
          attributes: {},
          array: ':attribute mesti jujukan.',
          before: ':attribute mesti tarikh sebelum :date.',
          before_or_equal:
            ':attribute mesti tarikh sebelum atau sama dengan :date.',
          between: {
            numeric: ':attribute mesti mengandungi antara :min dan :max.',
            file: ':attribute mesti mengandungi antara :min dan :max kilobait.',
            string: ':attribute mesti mengandungi antara :min dan :max aksara.',
            array: ':attribute mesti mengandungi antara :min dan :max perkara.',
          },
          boolean: ':attribute mesti benar atau salah.',
          confirmed: ':attribute pengesahan yang tidak sepadan.',
          date: ':attribute bukan tarikh yang sah.',
          date_format: ':attribute tidak mengikut format :format.',
          different: ':attribute dan :other mesti berlainan.',
          dimensions: ':attribute tidak sah',
          digits: ':attribute mesti :digits.',
          digits_between:
            ':attribute mesti mengandungi antara :min dan :max digits.',
          distinct: ':attribute adalah nilai yang berulang',
          email: ':attribute tidak sah.',
          exists: ':attribute tidak sah.',
          file: ':attribute mesti fail yang sah.',
          filled: ':attribute diperlukan.',
          gt: {
            numeric: ':attribute mesti melebihi :value.',
            file: ':attribute mesti melebihi :value kilobait.',
            string: ':attribute mesti melebihi :value aksara.',
            array:
              ':attribute mesti mengandungi lebih daripada :value perkara.',
          },
          gte: {
            numeric: ':attribute mesti melebihi atau bersamaan :value.',
            file: ':attribute mesti melebihi atau bersamaan :value kilobait.',
            string: ':attribute mesti melebihi atau bersamaan :value aksara.',
            array: ':attribute mesti mengandungi :value perkara atau lebih.',
          },
          hex: 'The :attribute field should have hexadecimal format',
          image: ':attribute mesti imej.',
          in: ':attribute tidak sah.',
          in_array: ':attribute tidak wujud dalam :other.',
          integer: ':attribute mesti integer.',
          ip: ':attribute mesti alamat IP yang sah.',
          ipv4: ':attribute mesti alamat IPv4 yang sah.',
          ipv6: ':attribute mesti alamat IPv6 yang sah',
          json: ':attribute mesti JSON yang sah.',
          lt: {
            numeric: ':attribute mesti kurang daripada :value.',
            file: ':attribute mesti kurang daripada :value kilobait.',
            string: ':attribute mesti kurang daripada :value aksara.',
            array:
              ':attribute mesti mengandungi kurang daripada :value perkara.',
          },
          lte: {
            numeric:
              ':attribute mesti kurang daripada atau bersamaan dengan :value.',
            file: ':attribute mesti kurang daripada atau bersamaan dengan :value kilobait.',
            string:
              ':attribute mesti kurang daripada atau bersamaan dengan :value aksara.',
            array:
              ':attribute mesti mengandungi kurang daripada atau bersamaan dengan :value perkara.',
          },
          max: {
            numeric: 'Jumlah :attribute mesti tidak melebihi :max.',
            file: 'Jumlah :attribute mesti tidak melebihi :max kilobait.',
            string: 'Jumlah :attribute mesti tidak melebihi :max aksara.',
            array: 'Jumlah :attribute mesti tidak melebihi :max perkara.',
          },
          mimes: ':attribute mesti fail type: :values.',
          mimetypes: ':attribute mesti fail type: :values.',
          min: {
            numeric: 'Jumlah :attribute mesti sekurang-kurangnya :min.',
            file: 'Jumlah :attribute mesti sekurang-kurangnya :min kilobait.',
            string: 'Jumlah :attribute mesti sekurang-kurangnya :min aksara.',
            array: 'Jumlah :attribute mesti sekurang-kurangnya :min perkara.',
          },
          not_in: ':attribute tidak sah.',
          not_regex: 'Format :attribute adalah tidak sah.',
          numeric: ':attribute mesti nombor.',
          present: ':attribute mesti wujud.',
          regex: 'Format :attribute tidak sah.',
          required: 'Ruangan :attribute diperlukan.',
          required_if:
            'Ruangan :attribute diperlukan bila :other sama dengan :value.',
          required_unless:
            'Ruangan :attribute diperlukan sekiranya :other ada dalam :values.',
          required_with: 'Ruangan :attribute diperlukan bila :values wujud.',
          required_with_all:
            'Ruangan :attribute diperlukan bila :values wujud.',
          required_without:
            'Ruangan :attribute diperlukan bila :values tidak wujud.',
          required_without_all:
            'Ruangan :attribute diperlukan bila kesemua :values wujud.',
          same: 'Ruangan :attribute dan :other mesti sepadan.',
          size: {
            numeric: 'Saiz :attribute mesti :size.',
            file: 'Saiz :attribute mesti :size kilobait.',
            string: 'Saiz :attribute mesti :size aksara.',
            array: 'Saiz :attribute mesti mengandungi :size perkara.',
          },
          string: ':attribute mesti aksara.',
          timezone: ':attribute mesti zon masa yang sah.',
          unique: ':attribute telah wujud.',
          uploaded: ':attribute gagal dimuat naik.',
          url: ':attribute format tidak sah.',
        }
      },
      2265: (t) => {
        t.exports = {
          accepted: ':attribute må være akseptert.',
          alpha: ':attribute feltet kan kun inneholde alfabetiske tegn.',
          alpha_dash:
            ':attribute feltet kan kun inneholde alfanumeriske tegn, i tillegg til bindestreker og understreker.',
          alpha_num: ':attribute feltet må være alfanumerisk.',
          between: ':attribute feltet må være mellom :min og :max.',
          confirmed: ':attribute feltet stemmer ikke overens med bekreftelsen.',
          email: ':attribute formatet er ugyldig.',
          date: ':attribute er et ugyldig datoformat.',
          def: ':attribute attributtet har feil.',
          digits: ':attribute må være på :digits siffer.',
          digits_between: ':attribute må være mellom :min og :max siffer.',
          different: ':attribute og :different må være forskjellige.',
          in: 'Den oppgitte verdien for :attribute er ugyldig.',
          integer: ':attribute må være et heltall.',
          hex: 'The :attribute should have hexadecimal format',
          min: {
            numeric: ':attribute må minst være :min.',
            string: ':attribute må være på minst :min tegn.',
          },
          max: {
            numeric: ':attribute kan ikke være større enn :max.',
            string: ':attribute kan maks ha :max tegn.',
          },
          not_in: 'Den oppgitte verdien for :attribute er ugyldig.',
          numeric: ':attribute må være et tall.',
          present: 'The :attribute field must be present (but can be empty).',
          required: ':attribute feltet er påkrevd.',
          required_if: ':attribute er påkrevd når :other er :value.',
          same: ':attribute og :same må være like.',
          size: {
            numeric: ':attribute må ha størrelsen :size.',
            string: ':attribute må ha :size tegn.',
          },
          string: ':attribute må være tekst.',
          url: ':attribute formatet er ugyldig.',
          regex: ':attribute formatet er ugyldig.',
          attributes: {},
        }
      },
      7741: (t) => {
        t.exports = {
          accepted: 'Het :attribute veld moet geaccepteerd worden.',
          after: ':attribute moet een datum na :after zijn.',
          after_or_equal:
            'De :attribute datum moet op of na :after_or_equal zijn.',
          alpha: 'Het :attribute veld mag alleen maar letters bevatten.',
          alpha_dash:
            'Het :attribute veld mag alleen maar letters, cijfers en (liggende) streepjes bevatten.',
          alpha_num:
            'Het :attribute veld mag alleen maar letters en cijfers bevatten.',
          before: ':attribute moet vòòr :before zijn.',
          before_or_equal: ':attribute moet vòòr of op :before_or_equal zijn.',
          between: 'Het :attribute veld moet tussen :min en :max liggen.',
          confirmed:
            'Het :attribute veld komt niet met de bevestiging overeen.',
          email: 'Het :attribute formaat is ongeldig.',
          date: 'Het :attribute veld moet een geldige datum zijn.',
          def: 'Het :attribute veld bevat fouten.',
          digits: 'Het :attribute veld moet :digits cijfers hebben.',
          digits_between:
            ':attribute moet bestaan uit minimaal :min en maximaal :max cijfers.',
          different:
            'Het :attribute en :different veld moeten verschillend zijn.',
          in: 'De gekozen waarde voor :attribute is ongeldig.',
          integer: 'Het :attribute veld moet een geheel getal zijn.',
          hex: 'Het :attribute veld moet hexadecimaal zijn',
          min: {
            numeric: 'Het :attribute veld moet minstens :min zijn.',
            string:
              'Het :attribute veld moet minstens :min karakters bevatten.',
          },
          max: {
            numeric: 'Het :attribute veld mag maximaal :max zijn.',
            string:
              'Het :attribute veld mag niet meer dan :max karakters bevatten.',
          },
          not_in: 'De gekozen waarde voor :attribute is ongeldig.',
          numeric: 'Het :attribute veld moet een getal zijn.',
          present:
            'Het :attribute veld moet aanwezig zijn (maar mag leeg zijn).',
          required: 'Het :attribute veld moet ingevuld zijn.',
          required_if:
            'Het :attribute veld moet ingevuld zijn, wanneer :other :value is.',
          required_unless:
            'Het :attribute veld moet ingevuld zijn, wanneer :other niet :value is.',
          required_with:
            'Het :attribute veld moet ingevuld zijn, wanneer :field niet leeg is.',
          required_with_all:
            'Het :attribute veld moet ingevuld zijn, wanneer :fields niet leeg zijn.',
          required_without:
            'Het :attribute veld moet ingevuld zijn, wanneer :field leeg is.',
          required_without_all:
            'Het :attribute veld moet ingevuld zijn, wanneer :fields leeg zijn.',
          same: 'De :attribute en :same velden moeten overeenkomen.',
          size: {
            numeric: 'Het :attribute veld moet :size zijn.',
            string: 'Het :attribute veld moet :size karakters bevatten.',
          },
          string: 'Het :attribute veld moet een woord of zin zijn.',
          url: 'Het :attribute veld heeft een ongeldig formaat.',
          regex: 'Het :attribute veld heeft een ongeldig formaat.',
          attributes: {},
        }
      },
      2756: (t) => {
        t.exports = {
          accepted: 'Pole :attribute musi być zaakceptowane.',
          alpha: 'Pole :attribute może zawierać tylko litery.',
          alpha_dash:
            'Pole :attribute moze zawierać tylko litery, myślnik i podrkeślenie.',
          alpha_num:
            'Pole :attribute moze zawierac tylko znaki alfanumeryczne.',
          between: 'Pole :attribute musi mieć długość od :min do :max.',
          confirmed: 'Pole :attribute nie spełnia warunku potwierdzenia.',
          email: 'Pole :attribute ma niepoprawny format adresu email.',
          date: 'Pole :attribute musi mieć poprawny format daty.',
          def: 'Pole :attribute zawiera błędy.',
          digits:
            'Pole :attribute może zawierać tylko cyfry ze zbioru :digits.',
          digits_between: 'Pole :attribute musi mieć od :min do :max cyfr.',
          different: 'Pola :attribute i :different muszą się różnić.',
          in: 'Pole :attribute musi należeć do zbioru :in.',
          integer: 'Pole :attribute musi być liczbą całkowitą.',
          hex: 'The :attribute should have hexadecimal format',
          min: {
            numeric: 'Pole :attribute musi być równe conajmniej :min.',
            string: 'Pole :attribute musi zawierać conajmniej :min znaków.',
          },
          max: {
            numeric: 'Pole :attribute nie moze być większe :max.',
            string: 'Pole :attribute nie moze być dłuższe niż :max znaków.',
          },
          not_in: 'Pole :attribute nie może należeć do zbioru :not_in.',
          numeric: 'Pole :attribute musi być liczbą.',
          present: 'Polu :attribute musi być obecny (ale może być pusta).',
          required: 'Pole :attribute jest wymagane.',
          required_if:
            'Pole :attribute jest wymagane jeśli pole :other jest równe :value.',
          same: 'Pola :attribute i :same muszą być takie same.',
          size: {
            numeric: 'Pole :attribute musi być równe :size.',
            string: 'Pole :attribute musi zawierać :size znaków.',
          },
          string: 'Pole :attribute musi być ciągiem znaków.',
          url: 'Pole :attribute musi być poprawnym adresem URL.',
          regex: 'Pole :attribute nie spełnia warunku.',
          attributes: {},
        }
      },
      4865: (t) => {
        t.exports = {
          accepted: 'O campo :attribute deverá ser aceite.',
          active_url: 'O campo :attribute não contém um URL válido.',
          after: 'O campo :attribute deverá conter uma data posterior a :date.',
          after_or_equal:
            'O campo :attribute deverá conter uma data posterior ou igual a :date.',
          alpha: 'O campo :attribute deverá conter apenas letras.',
          alpha_dash:
            'O campo :attribute deverá conter apenas letras, números e traços.',
          alpha_num:
            'O campo :attribute deverá conter apenas letras e números .',
          attributes: {},
          array: 'O campo :attribute deverá conter uma coleção de elementos.',
          before: 'O campo :attribute deverá conter uma data anterior a :date.',
          before_or_equal:
            'O Campo :attribute deverá conter uma data anterior ou igual a :date.',
          between: {
            numeric:
              'O campo :attribute deverá ter um valor entre :min - :max.',
            file: 'O campo :attribute deverá ter um tamanho entre :min - :max kilobytes.',
            string:
              'O campo :attribute deverá conter entre :min - :max caracteres.',
            array:
              'O campo :attribute deverá conter entre :min - :max elementos.',
          },
          boolean:
            'O campo :attribute deverá conter o valor verdadeiro ou falso.',
          confirmed: 'A confirmação para o campo :attribute não coincide.',
          date: 'O campo :attribute não contém uma data válida.',
          date_format:
            'A data indicada para o campo :attribute não respeita o formato :format.',
          different:
            'Os campos :attribute e :other deverão conter valores diferentes.',
          digits: 'O campo :attribute deverá conter :digits caracteres.',
          digits_between:
            'O campo :attribute deverá conter entre :min a :max caracteres.',
          dimensions:
            'O campo :attribute deverá conter uma dimensão de imagem válida.',
          distinct: 'O campo :attribute contém um valor duplicado.',
          email:
            'O campo :attribute não contém um endereço de correio eletrónico válido.',
          exists: 'O valor selecionado para o campo :attribute é inválido.',
          file: 'O campo :attribute deverá conter um ficheiro.',
          filled:
            'É obrigatória a indicação de um valor para o campo :attribute.',
          gt: {
            numeric: 'The :attribute must be greater than :value.',
            file: 'The :attribute must be greater than :value kilobytes.',
            string: 'The :attribute must be greater than :value characters.',
            array: 'The :attribute must have more than :value items.',
          },
          gte: {
            numeric: 'The :attribute must be greater than or equal :value.',
            file: 'The :attribute must be greater than or equal :value kilobytes.',
            string:
              'The :attribute must be greater than or equal :value characters.',
            array: 'The :attribute must have :value items or more.',
          },
          hex: 'The :attribute field should have hexadecimal format',
          image: 'O campo :attribute deverá conter uma imagem.',
          in: 'O campo :attribute não contém um valor válido.',
          in_array: 'O campo :attribute não existe em :other.',
          integer: 'O campo :attribute deverá conter um número inteiro.',
          ip: 'O campo :attribute deverá conter um IP válido.',
          ipv4: 'O campo :attribute deverá conter um IPv4 válido.',
          ipv6: 'O campo :attribute deverá conter um IPv6 válido.',
          json: 'O campo :attribute deverá conter um texto JSON válido.',
          lt: {
            numeric: 'The :attribute must be less than :value.',
            file: 'The :attribute must be less than :value kilobytes.',
            string: 'The :attribute must be less than :value characters.',
            array: 'The :attribute must have less than :value items.',
          },
          lte: {
            numeric: 'The :attribute must be less than or equal :value.',
            file: 'The :attribute must be less than or equal :value kilobytes.',
            string:
              'The :attribute must be less than or equal :value characters.',
            array: 'The :attribute must not have more than :value items.',
          },
          max: {
            numeric:
              'O campo :attribute não deverá conter um valor superior a :max.',
            file: 'O campo :attribute não deverá ter um tamanho superior a :max kilobytes.',
            string:
              'O campo :attribute não deverá conter mais de :max caracteres.',
            array:
              'O campo :attribute não deverá conter mais de :max elementos.',
          },
          mimes:
            'O campo :attribute deverá conter um ficheiro do tipo: :values.',
          mimetypes:
            'O campo :attribute deverá conter um ficheiro do tipo: :values.',
          min: {
            numeric:
              'O campo :attribute deverá ter um valor superior ou igual a :min.',
            file: 'O campo :attribute deverá ter no mínimo :min kilobytes.',
            string:
              'O campo :attribute deverá conter no mínimo :min caracteres.',
            array: 'O campo :attribute deverá conter no mínimo :min elementos.',
          },
          not_in: 'O campo :attribute contém um valor inválido.',
          not_regex: 'The :attribute format is invalid.',
          numeric: 'O campo :attribute deverá conter um valor numérico.',
          present: 'O campo :attribute deverá estar presente.',
          regex: 'O formato do valor para o campo :attribute é inválido.',
          required:
            'É obrigatória a indicação de um valor para o campo :attribute.',
          required_if:
            'É obrigatória a indicação de um valor para o campo :attribute quando o valor do campo :other é igual a :value.',
          required_unless:
            'É obrigatória a indicação de um valor para o campo :attribute a menos que :other esteja presente em :values.',
          required_with:
            'É obrigatória a indicação de um valor para o campo :attribute quando :values está presente.',
          required_with_all:
            'É obrigatória a indicação de um valor para o campo :attribute quando um dos :values está presente.',
          required_without:
            'É obrigatória a indicação de um valor para o campo :attribute quando :values não está presente.',
          required_without_all:
            'É obrigatória a indicação de um valor para o campo :attribute quando nenhum dos :values está presente.',
          same: 'Os campos :attribute e :other deverão conter valores iguais.',
          size: {
            numeric: 'O campo :attribute deverá conter o valor :size.',
            file: 'O campo :attribute deverá ter o tamanho de :size kilobytes.',
            string: 'O campo :attribute deverá conter :size caracteres.',
            array: 'O campo :attribute deverá conter :size elementos.',
          },
          string: 'O campo :attribute deverá conter texto.',
          timezone: 'O campo :attribute deverá ter um fuso horário válido.',
          unique:
            'O valor indicado para o campo :attribute já se encontra registado.',
          uploaded: 'O upload do ficheiro :attribute falhou.',
          url: 'O formato do URL indicado para o campo :attribute é inválido.',
        }
      },
      9157: (t) => {
        t.exports = {
          accepted: 'O campo :attribute deve ser aceito.',
          active_url: 'O campo :attribute deve conter uma URL válida.',
          after: 'O campo :attribute deve conter uma data posterior a :date.',
          after_or_equal:
            'O campo :attribute deve conter uma data superior ou igual a :date.',
          alpha: 'O campo :attribute deve conter apenas letras.',
          alpha_dash:
            'O campo :attribute deve conter apenas letras, números e traços.',
          alpha_num: 'O campo :attribute deve conter apenas letras e números .',
          array: 'O campo :attribute deve conter um array.',
          before: 'O campo :attribute deve conter uma data anterior a :date.',
          before_or_equal:
            'O campo :attribute deve conter uma data inferior ou igual a :date.',
          between: {
            numeric:
              'O campo :attribute deve conter um número entre :min e :max.',
            file: 'O campo :attribute deve conter um arquivo de :min a :max kilobytes.',
            string:
              'O campo :attribute deve conter entre :min a :max caracteres.',
            array: 'O campo :attribute deve conter de :min a :max itens.',
          },
          boolean:
            'O campo :attribute deve conter o valor verdadeiro ou falso.',
          confirmed: 'A confirmação para o campo :attribute não coincide.',
          date: 'O campo :attribute não contém uma data válida.',
          date_format:
            'A data informada para o campo :attribute não respeita o formato :format.',
          different:
            'Os campos :attribute e :other devem conter valores diferentes.',
          digits: 'O campo :attribute deve conter :digits dígitos.',
          digits_between:
            'O campo :attribute deve conter entre :min a :max dígitos.',
          dimensions:
            'O valor informado para o campo :attribute não é uma dimensão de imagem válida.',
          distinct: 'O campo :attribute contém um valor duplicado.',
          email: 'O campo :attribute não contém um endereço de email válido.',
          exists: 'O valor selecionado para o campo :attribute é inválido.',
          file: 'O campo :attribute deve conter um arquivo.',
          filled: 'O campo :attribute é obrigatório.',
          gt: {
            numeric: 'O campo :attribute deve ser maior que :value.',
            file: 'O arquivo :attribute deve ser maior que :value kilobytes.',
            string: 'O campo :attribute deve ser maior que :value caracteres.',
            array: 'O campo :attribute deve ter mais que :value itens.',
          },
          gte: {
            numeric: 'O campo :attribute deve ser maior ou igual a :value.',
            file: 'O arquivo :attribute deve ser maior ou igual a :value kilobytes.',
            string:
              'O campo :attribute deve ser maior ou igual a :value caracteres.',
            array: 'O campo :attribute deve ter :value itens ou mais.',
          },
          hex: 'The :attribute field should have hexadecimal format',
          image: 'O campo :attribute deve conter uma imagem.',
          in: 'O campo :attribute não contém um valor válido.',
          in_array: 'O campo :attribute não existe em :other.',
          integer: 'O campo :attribute deve conter um número inteiro.',
          ip: 'O campo :attribute deve conter um IP válido.',
          ipv4: 'O campo :attribute deve conter um IPv4 válido.',
          ipv6: 'O campo :attribute deve conter um IPv6 válido.',
          json: 'O campo :attribute deve conter uma string JSON válida.',
          lt: {
            numeric: 'O campo :attribute deve ser menor que :value.',
            file: 'O arquivo :attribute ser menor que :value kilobytes.',
            string: 'O campo :attribute deve ser menor que :value caracteres.',
            array: 'O campo :attribute deve ter menos que :value itens.',
          },
          lte: {
            numeric: 'O campo :attribute deve ser menor ou igual a :value.',
            file: 'O arquivo :attribute ser menor ou igual a :value kilobytes.',
            string:
              'O campo :attribute deve ser menor ou igual a :value caracteres.',
            array: 'O campo :attribute não deve ter mais que :value itens.',
          },
          max: {
            numeric:
              'O campo :attribute não pode conter um valor superior a :max.',
            file: 'O campo :attribute não pode conter um arquivo com mais de :max kilobytes.',
            string:
              'O campo :attribute não pode conter mais de :max caracteres.',
            array: 'O campo :attribute deve conter no máximo :max itens.',
          },
          mimes: 'O campo :attribute deve conter um arquivo do tipo: :values.',
          mimetypes:
            'O campo :attribute deve conter um arquivo do tipo: :values.',
          min: {
            numeric:
              'O campo :attribute deve conter um número superior ou igual a :min.',
            file: 'O campo :attribute deve conter um arquivo com no mínimo :min kilobytes.',
            string: 'O campo :attribute deve conter no mínimo :min caracteres.',
            array: 'O campo :attribute deve conter no mínimo :min itens.',
          },
          not_in: 'O campo :attribute contém um valor inválido.',
          not_regex: 'O formato do valor :attribute é inválido.',
          numeric: 'O campo :attribute deve conter um valor numérico.',
          present: 'O campo :attribute deve estar presente.',
          regex: 'O formato do valor informado no campo :attribute é inválido.',
          required: 'O campo :attribute é obrigatório.',
          required_if:
            'O campo :attribute é obrigatório quando o valor do campo :other é igual a :value.',
          required_unless:
            'O campo :attribute é obrigatório a menos que :other esteja presente em :values.',
          required_with:
            'O campo :attribute é obrigatório quando :values está presente.',
          required_with_all:
            'O campo :attribute é obrigatório quando um dos :values está presente.',
          required_without:
            'O campo :attribute é obrigatório quando :values não está presente.',
          required_without_all:
            'O campo :attribute é obrigatório quando nenhum dos :values está presente.',
          same: 'Os campos :attribute e :other devem conter valores iguais.',
          size: {
            numeric: 'O campo :attribute deve conter o número :size.',
            file: 'O campo :attribute deve conter um arquivo com o tamanho de :size kilobytes.',
            string: 'O campo :attribute deve conter :size caracteres.',
            array: 'O campo :attribute deve conter :size itens.',
          },
          string: 'O campo :attribute deve ser uma string.',
          timezone: 'O campo :attribute deve conter um fuso horário válido.',
          unique: 'O valor informado para o campo :attribute já está em uso.',
          uploaded: 'Falha no Upload do arquivo :attribute.',
          url: 'O formato da URL informada para o campo :attribute é inválido.',
        }
      },
      9296: (t) => {
        t.exports = {
          accepted: ':attribute trebuie acceptat.',
          after: ':attribute trebuie să fie după :after.',
          after_or_equal:
            ':attribute trebuie să fie egal sau după :after_or_equal.',
          alpha:
            'Câmpul :attribute rebuie să conțină numai caractere alfabetice.',
          alpha_dash:
            'Câmpul:attribute poate conține numai caractere alfanumerice, precum și liniuțe și subliniere.',
          alpha_num: 'Câmpul :attribute trebuie să fie alfanumeric.',
          before: ':attribute trebuie să fie înainte :before.',
          before_or_equal:
            ':attribute trebuie să fie egal sau înainte :before_or_equal.',
          between: ':attribute trebuie să fie între :min și :max.',
          confirmed: 'Confirmarea :attribute nu se potrivește.',
          email: 'Formatul :attribute nu este valid.',
          date: ':attribute nu este un format de dată valid.',
          def: 'Atributul :attribute are erori.',
          digits: ':attribute trebuie să aibă  :digits cifre.',
          digits_between:
            'Câmpul :attribute trebuie să aibă între :min și :max cifre.',
          different: ':attribute și :different trebuie sa fie diferite.',
          in: 'Atributul selectat :attribute nu este valid.',
          integer: ':attribute trebuie să fie un număr întreg.',
          hex: 'Câmpul :attribute trebuie să aibă format hexazecimal.',
          min: {
            numeric: ':attribute trebuie să fie mai mare de :min.',
            string: ':attribute trebuie să contină cel puțin :min caractere.',
          },
          max: {
            numeric: ':attribute nu trebuie să fie mai mare de :max.',
            string: ':attribute poate să contină maxim :max caractere.',
          },
          not_in: ':attribute selectat nu este valid.',
          numeric: ':attribute trebuie sa fie un număr.',
          present: ':attribute trebuie sa fie prezent(dar poate fi gol).',
          required: ' Câmpul :attribute este obligatoriu.',
          required_if:
            'Câmpul :attribute este obligatoriu cănd :other este :value.',
          required_unless:
            'Câmpul :attribute este obligatoriu cănd :other nu este :value.',
          required_with:
            'Câmpul :attribute este obligatoriu cănd :field este completat.',
          required_with_all:
            'Câmpul :attribute este obligatoriu cănd :fields sunt completate.',
          required_without:
            'Câmpul :attribute este obligatoriu cănd :field nu este completat.',
          required_without_all:
            'Câmpul :attribute este obligatoriu cănd :fields nu sunt completate.',
          same: 'Câmpurile :attribute și :same trebuie să fie egale.',
          size: {
            numeric: ':attribute trebuie să fie :size.',
            string: ':attribute trebuie să contina :size caractere.',
          },
          string:
            ':attribute trebuie să fie un contina doar caractere alfabetice.',
          url: 'Formatul :attribute nu este valid.',
          regex: 'Formatul :attribute nu este valid.',
          attributes: {},
        }
      },
      8576: (t) => {
        t.exports = {
          accepted: 'Вы должны принять :attribute.',
          alpha: 'Поле :attribute может содержать только буквы.',
          alpha_dash:
            'Поле :attribute может содержать только буквы, цифры, дефисы и символы подчёркивания.',
          alpha_num: 'Поле :attribute может содержать только буквы и цифры.',
          between: 'Поле :attribute должно быть между :min и :max.',
          confirmed: 'Поле :attribute не совпадает с подтверждением.',
          email:
            'Поле :attribute должно быть действительным электронным адресом.',
          def: 'Поле :attribute содержит ошибки.',
          digits: 'Длина цифрового поля :attribute должна быть :digits.',
          digits_between:
            'Длинна цифрового поля :attribute должна быть от :min до :max знаков.',
          different: 'Поля :attribute и :different должны различаться.',
          in: 'Выбранное значение для :attribute ошибочно.',
          integer: 'Поле :attribute должно быть целым числом.',
          hex: 'Поле :attribute должно иметь шестнадцатеричный формат',
          min: {
            numeric:
              'Значение поля :attribute должно быть больше или равно :min.',
            string:
              'Количество символов в поле :attribute должно быть не менее :min.',
          },
          max: {
            numeric:
              'Значение поля :attribute должно быть меньше или равно :max.',
            string:
              'Количество символов в поле :attribute не может превышать :max.',
          },
          not_in: 'Выбранное значение для :attribute ошибочно.',
          numeric: 'Поле :attribute должно быть числом.',
          present:
            'Поле :attribute должно присутствовать (но может быть пустым).',
          required: 'Поле :attribute обязательно для заполнения.',
          required_if:
            'Поле :attribute требуется когда значения поля :other равно :value.',
          same: 'Значение :attribute должно совпадать с :same.',
          size: {
            numeric: 'Значение поля :attribute должно быть равным :size.',
            string:
              'Количество символов в поле :attribute должно быть равно :size.',
          },
          url: 'Поле :attribute должно содержать валидный URL.',
          regex: 'Неверный формат поля :attribute.',
          attributes: {},
        }
      },
      1944: (t) => {
        t.exports = {
          accepted: ':attribute måste vara accepterat.',
          after: ':attribute måste vara efter :after.',
          after_or_equal:
            ':attribute måste vara samtidigt eller efter :after_or_equal.',
          alpha: ':attribute får bara bestå av bokstäver.',
          alpha_dash:
            ':attribute får bara bestå av alfanumeriska tecken, bindestreck och understreck.',
          alpha_num: ':attribute får bara bestå av alfanumeriska tecken',
          before: ':attribute måste vara före :before.',
          before_or_equal:
            ':attribute måste vara samtidigt eller före :before_or_equal.',
          between: ':attribute måste vara mellan :min och :max.',
          confirmed: ':attribute stämmer inte överens med bekräftelsefältet.',
          email: 'Felaktigt format för :attribute.',
          date: ':attribute är inte ett giltigt datum.',
          def: 'Attributet :attribute innehåller fel.',
          digits: ':attribute ska innehålla :digits siffror.',
          different: ':attribute och :different måste vara olika.',
          in: 'Det valda :attribute är ogiltigt.',
          integer: ':attribute måste vara ett heltal.',
          hex: ':attribute måste vara i hexadecimalt format',
          min: {
            numeric: ':attribute måste vara minst :min.',
            string: ':attribute måste vara minst :min tecken.',
          },
          max: {
            numeric: ':attribute får inte vara högre än :max.',
            string: ':attribute får inte innehålla fler än :max tecken.',
          },
          not_in: 'Det valda attributet :attribute är ogiltigt',
          numeric: ':attribute måste vara en siffra.',
          present: ':attribute måste vara tillgängligt.',
          required: ':attribute måste vara ifyllt.',
          required_if: ':attribute måste vara ifyllt när :other är :value.',
          required_unless:
            ':attribute måste vara ifyllt när :other inte är :value.',
          required_with: ':attribute måste vara ifyllt när :field är ifyllt.',
          required_with_all:
            ':attribute måste vara ifyllt när :fields är ifyllda.',
          required_without:
            ':attribute måste vara ifyllt när :field inte är ifyllt.',
          required_without_all:
            ':attribute måste vara ifyllt när ingen av :fields är ifyllda.',
          same: ':attribute och :same måste matcha.',
          size: {
            numeric: ':attribute måste vara :size.',
            string: ':attribute måste vara :size tecken lång.',
          },
          string: ':attribute måste vara en sträng.',
          url: ':attribute formatet är ogiltigt.',
          regex: ':attribute formatet är ogiltigt.',
          attributes: {},
        }
      },
      202: (t) => {
        t.exports = {
          accepted: ':attribute mora biti sprejet.',
          active_url: ':attribute ni pravilen.',
          after: ':attribute mora biti za datumom :date.',
          after_or_equal: ':attribute mora biti za ali enak :date.',
          alpha: ':attribute lahko vsebuje samo črke.',
          alpha_dash: ':attribute lahko vsebuje samo črke, številke in črtice.',
          alpha_num: ':attribute lahko vsebuje samo črke in številke.',
          attributes: {},
          array: ':attribute mora biti polje.',
          before: ':attribute mora biti pred datumom :date.',
          before_or_equal: ':attribute mora biti pred ali enak :date.',
          between: {
            numeric: ':attribute mora biti med :min in :max.',
            file: ':attribute mora biti med :min in :max kilobajti.',
            string: ':attribute mora biti med :min in :max znaki.',
            array: ':attribute mora imeti med :min in :max elementov.',
          },
          boolean: ':attribute polje mora biti 1 ali 0',
          confirmed: ':attribute potrditev se ne ujema.',
          date: ':attribute ni veljaven datum.',
          date_format: ':attribute se ne ujema z obliko :format.',
          different: ':attribute in :other mora biti drugačen.',
          digits: ':attribute mora imeti :digits cifer.',
          digits_between: ':attribute mora biti med :min in :max ciframi.',
          dimensions: ':attribute ima napačne dimenzije slike.',
          distinct: ':attribute je duplikat.',
          email: ':attribute mora biti veljaven e-poštni naslov.',
          exists: 'izbran :attribute je neveljaven.',
          file: ':attribute mora biti datoteka.',
          filled: ':attribute mora biti izpolnjen.',
          gt: {
            numeric: 'The :attribute must be greater than :value.',
            file: 'The :attribute must be greater than :value kilobytes.',
            string: 'The :attribute must be greater than :value characters.',
            array: 'The :attribute must have more than :value items.',
          },
          gte: {
            numeric: 'The :attribute must be greater than or equal :value.',
            file: 'The :attribute must be greater than or equal :value kilobytes.',
            string:
              'The :attribute must be greater than or equal :value characters.',
            array: 'The :attribute must have :value items or more.',
          },
          hex: 'The :attribute field should have hexadecimal format',
          image: ':attribute mora biti slika.',
          in: 'izbran :attribute je neveljaven.',
          in_array: ':attribute ne obstaja v :other.',
          integer: ':attribute mora biti število.',
          ip: ':attribute mora biti veljaven IP naslov.',
          ipv4: ':attribute mora biti veljaven IPv4 naslov.',
          ipv6: ':attribute mora biti veljaven IPv6 naslov.',
          json: ':attribute mora biti veljaven JSON tekst.',
          lt: {
            numeric: 'The :attribute must be less than :value.',
            file: 'The :attribute must be less than :value kilobytes.',
            string: 'The :attribute must be less than :value characters.',
            array: 'The :attribute must have less than :value items.',
          },
          lte: {
            numeric: 'The :attribute must be less than or equal :value.',
            file: 'The :attribute must be less than or equal :value kilobytes.',
            string:
              'The :attribute must be less than or equal :value characters.',
            array: 'The :attribute must not have more than :value items.',
          },
          max: {
            numeric: ':attribute ne sme biti večje od :max.',
            file: ':attribute ne sme biti večje :max kilobajtov.',
            string: ':attribute ne sme biti večje :max znakov.',
            array: ':attribute ne smejo imeti več kot :max elementov.',
          },
          mimes: ':attribute mora biti datoteka tipa: :values.',
          mimetypes: ':attribute mora biti datoteka tipa: :values.',
          min: {
            numeric: ':attribute mora biti vsaj dolžine :min.',
            file: ':attribute mora imeti vsaj :min kilobajtov.',
            string: ':attribute mora imeti vsaj :min znakov.',
            array: ':attribute mora imeti vsaj :min elementov.',
          },
          not_in: 'izbran :attribute je neveljaven.',
          not_regex: 'The :attribute format is invalid.',
          numeric: ':attribute mora biti število.',
          present: 'Polje :attribute mora biti prisotno.',
          regex: 'Format polja :attribute je neveljaven.',
          required: 'Polje :attribute je obvezno.',
          required_if: 'Polje :attribute je obvezno, če je :other enak :value.',
          required_unless:
            'Polje :attribute je obvezno, razen če je :other v :values.',
          required_with: 'Polje :attribute je obvezno, če je :values prisoten.',
          required_with_all:
            'Polje :attribute je obvezno, če so :values prisoten.',
          required_without:
            'Polje :attribute je obvezno, če :values ni prisoten.',
          required_without_all:
            'Polje :attribute je obvezno, če :values niso prisotni.',
          same: 'Polje :attribute in :other se morata ujemati.',
          size: {
            numeric: ':attribute mora biti :size.',
            file: ':attribute mora biti :size kilobajtov.',
            string: ':attribute mora biti :size znakov.',
            array: ':attribute mora vsebovati :size elementov.',
          },
          string: ':attribute mora biti tekst.',
          timezone: ':attribute mora biti časovna cona.',
          unique: ':attribute je že zaseden.',
          uploaded: 'Nalaganje :attribute ni uspelo.',
          url: ':attribute format je neveljaven.',
        }
      },
      6782: (t) => {
        t.exports = {
          accepted: ':attribute duhet të pranohet.',
          active_url: ':attribute nuk është adresë e saktë.',
          after: ':attribute duhet të jetë datë pas :date.',
          after_or_equal:
            'The :attribute must be a date after or equal to :date.',
          alpha: ':attribute mund të përmbajë vetëm shkronja.',
          alpha_dash:
            ':attribute mund të përmbajë vetëm shkronja, numra, dhe viza.',
          alpha_num: ':attribute mund të përmbajë vetëm shkronja dhe numra.',
          attributes: {},
          array: ':attribute duhet të jetë një bashkësi (array).',
          before: ':attribute duhet të jetë datë para :date.',
          before_or_equal:
            'The :attribute must be a date before or equal to :date.',
          between: {
            numeric: ':attribute duhet të jetë midis :min - :max.',
            file: ':attribute duhet të jetë midis :min - :max kilobajtëve.',
            string: ':attribute duhet të jetë midis :min - :max karaktereve.',
            array: ':attribute duhet të jetë midis :min - :max elementëve.',
          },
          boolean: 'Fusha :attribute duhet të jetë e vërtetë ose e gabuar',
          confirmed: ':attribute konfirmimi nuk përputhet.',
          date: ':attribute nuk është një datë e saktë.',
          date_format: ':attribute nuk i përshtatet formatit :format.',
          different: ':attribute dhe :other duhet të jenë të ndryshme.',
          digits: ':attribute duhet të jetë :digits shifra.',
          digits_between:
            ':attribute duhet të jetë midis :min dhe :max shifra.',
          dimensions: 'The :attribute has invalid image dimensions.',
          distinct: 'The :attribute field has a duplicate value.',
          email: ':attribute formati është i pasaktë.',
          exists: ':attribute përzgjedhur është i/e pasaktë.',
          file: 'The :attribute must be a file.',
          filled: 'Fusha :attribute është e kërkuar.',
          gt: {
            numeric: 'The :attribute must be greater than :value.',
            file: 'The :attribute must be greater than :value kilobytes.',
            string: 'The :attribute must be greater than :value characters.',
            array: 'The :attribute must have more than :value items.',
          },
          gte: {
            numeric: 'The :attribute must be greater than or equal :value.',
            file: 'The :attribute must be greater than or equal :value kilobytes.',
            string:
              'The :attribute must be greater than or equal :value characters.',
            array: 'The :attribute must have :value items or more.',
          },
          hex: 'The :attribute field should have hexadecimal format',
          image: ':attribute duhet të jetë imazh.',
          in: ':attribute përzgjedhur është i/e pasaktë.',
          in_array: 'The :attribute field does not exist in :other.',
          integer: ':attribute duhet të jetë numër i plotë.',
          ip: ':attribute duhet të jetë një IP adresë e saktë.',
          ipv4: 'The :attribute must be a valid IPv4 address.',
          ipv6: 'The :attribute must be a valid IPv6 address.',
          json: 'The :attribute must be a valid JSON string.',
          lt: {
            numeric: 'The :attribute must be less than :value.',
            file: 'The :attribute must be less than :value kilobytes.',
            string: 'The :attribute must be less than :value characters.',
            array: 'The :attribute must have less than :value items.',
          },
          lte: {
            numeric: 'The :attribute must be less than or equal :value.',
            file: 'The :attribute must be less than or equal :value kilobytes.',
            string:
              'The :attribute must be less than or equal :value characters.',
            array: 'The :attribute must not have more than :value items.',
          },
          max: {
            numeric: ':attribute nuk mund të jetë më tepër se :max.',
            file: ':attribute nuk mund të jetë më tepër se :max kilobajtë.',
            string: ':attribute nuk mund të jetë më tepër se :max karaktere.',
            array: ':attribute nuk mund të ketë më tepër se :max elemente.',
          },
          mimes: ':attribute duhet të jetë një dokument i tipit: :values.',
          mimetypes: ':attribute duhet të jetë një dokument i tipit: :values.',
          min: {
            numeric: ':attribute nuk mund të jetë më pak se :min.',
            file: ':attribute nuk mund të jetë më pak se :min kilobajtë.',
            string: ':attribute nuk mund të jetë më pak se :min karaktere.',
            array: ':attribute nuk mund të ketë më pak se :min elemente.',
          },
          not_in: ':attribute përzgjedhur është i/e pasaktë.',
          not_regex: 'The :attribute format is invalid.',
          numeric: ':attribute duhet të jetë një numër.',
          present: 'The :attribute field must be present.',
          regex: 'Formati i :attribute është i pasaktë.',
          required: 'Fusha :attribute është e kërkuar.',
          required_if:
            'Fusha :attribute është e kërkuar kur :other është :value.',
          required_unless:
            'The :attribute field is required unless :other is in :values.',
          required_with:
            'Fusha :attribute është e kërkuar kur :values ekziston.',
          required_with_all:
            'Fusha :attribute është e kërkuar kur :values ekziston.',
          required_without:
            'Fusha :attribute është e kërkuar kur :values nuk ekziston.',
          required_without_all:
            'Fusha :attribute është e kërkuar kur nuk ekziston asnjë nga :values.',
          same: ':attribute dhe :other duhet të përputhen.',
          size: {
            numeric: ':attribute duhet të jetë :size.',
            file: ':attribute duhet të jetë :size kilobajtë.',
            string: ':attribute duhet të jetë :size karaktere.',
            array: ':attribute duhet të ketë :size elemente.',
          },
          string: ':attribute duhet të jetë varg.',
          timezone: ':attribute duhet të jetë zonë e saktë.',
          unique: ':attribute është marrë tashmë.',
          uploaded: 'The :attribute failed to upload.',
          url: 'Formati i :attribute është i pasaktë.',
        }
      },
      2964: (t) => {
        t.exports = {
          accepted: 'Polje :attribute mora biti prihvaćeno.',
          active_url: 'Polje :attribute nije validan URL.',
          after: 'Polje :attribute mora biti datum posle :date.',
          after_or_equal:
            'The :attribute must be a date after or equal to :date.',
          alpha: 'Polje :attribute može sadržati samo slova.',
          alpha_dash:
            'Polje :attribute može sadržati samo slova, brojeve i povlake.',
          alpha_num: 'Polje :attribute može sadržati samo slova i brojeve.',
          attributes: {},
          array: 'Polje :attribute mora sadržati nekih niz stavki.',
          before: 'Polje :attribute mora biti datum pre :date.',
          before_or_equal:
            'The :attribute must be a date before or equal to :date.',
          between: {
            numeric: 'Polje :attribute mora biti između :min - :max.',
            file: 'Fajl :attribute mora biti između :min - :max kilobajta.',
            string: 'Polje :attribute mora biti između :min - :max karaktera.',
            array: 'Polje :attribute mora biti između :min - :max stavki.',
          },
          boolean: 'Polje :attribute mora biti tačno ili netačno',
          confirmed: 'Potvrda polja :attribute se ne poklapa.',
          date: 'Polje :attribute nije važeći datum.',
          date_format: 'Polje :attribute ne odgovora prema formatu :format.',
          different: 'Polja :attribute i :other moraju biti različita.',
          digits: 'Polje :attribute mora sadržati :digits šifri.',
          digits_between:
            'Polje :attribute mora biti izemđu :min i :max šifri.',
          dimensions: 'The :attribute has invalid image dimensions.',
          distinct: 'The :attribute field has a duplicate value.',
          email: 'Format polja :attribute nije validan.',
          exists: 'Odabrano polje :attribute nije validno.',
          file: 'The :attribute must be a file.',
          filled: 'Polje :attribute je obavezno.',
          gt: {
            numeric: 'The :attribute must be greater than :value.',
            file: 'The :attribute must be greater than :value kilobytes.',
            string: 'The :attribute must be greater than :value characters.',
            array: 'The :attribute must have more than :value items.',
          },
          gte: {
            numeric: 'The :attribute must be greater than or equal :value.',
            file: 'The :attribute must be greater than or equal :value kilobytes.',
            string:
              'The :attribute must be greater than or equal :value characters.',
            array: 'The :attribute must have :value items or more.',
          },
          hex: 'The :attribute field should have hexadecimal format',
          image: 'Polje :attribute mora biti slika.',
          in: 'Odabrano polje :attribute nije validno.',
          in_array: 'The :attribute field does not exist in :other.',
          integer: 'Polje :attribute mora biti broj.',
          ip: 'Polje :attribute mora biti validna IP adresa.',
          ipv4: 'The :attribute must be a valid IPv4 address.',
          ipv6: 'The :attribute must be a valid IPv6 address.',
          json: 'The :attribute must be a valid JSON string.',
          lt: {
            numeric: 'The :attribute must be less than :value.',
            file: 'The :attribute must be less than :value kilobytes.',
            string: 'The :attribute must be less than :value characters.',
            array: 'The :attribute must have less than :value items.',
          },
          lte: {
            numeric: 'The :attribute must be less than or equal :value.',
            file: 'The :attribute must be less than or equal :value kilobytes.',
            string:
              'The :attribute must be less than or equal :value characters.',
            array: 'The :attribute must not have more than :value items.',
          },
          max: {
            numeric: 'Polje :attribute mora biti manje od :max.',
            file: 'Polje :attribute mora biti manje od :max kilobajta.',
            string: 'Polje :attribute mora sadržati manje od :max karaktera.',
            array: 'Polje :attribute ne smije da image više od :max stavki.',
          },
          mimes: 'Polje :attribute mora biti fajl tipa: :values.',
          mimetypes: 'Polje :attribute mora biti fajl tipa: :values.',
          min: {
            numeric: 'Polje :attribute mora biti najmanje :min.',
            file: 'Fajl :attribute mora biti najmanje :min kilobajta.',
            string: 'Polje :attribute mora sadržati najmanje :min karaktera.',
            array: 'Polje :attribute mora sadrzati najmanje :min stavku.',
          },
          not_in: 'Odabrani element polja :attribute nije validan.',
          not_regex: 'The :attribute format is invalid.',
          numeric: 'Polje :attribute mora biti broj.',
          present: 'The :attribute field must be present.',
          regex: 'Format polja :attribute nije validan.',
          required: 'Polje :attribute je obavezno.',
          required_if:
            'Polje :attribute je potrebno kada polje :other sadrži :value.',
          required_unless:
            'The :attribute field is required unless :other is in :values.',
          required_with:
            'Polje :attribute je potrebno kada polje :values je prisutan.',
          required_with_all:
            'Polje :attribute je obavezno kada je :values prikazano.',
          required_without:
            'Polje :attribute je potrebno kada polje :values nije prisutan.',
          required_without_all:
            'Polje :attribute je potrebno kada nijedan od sledeći polja :values nisu prisutni.',
          same: 'Polja :attribute i :other se moraju poklapati.',
          size: {
            numeric: 'Polje :attribute mora biti :size.',
            file: 'Fajl :attribute mora biti :size kilobajta.',
            string: 'Polje :attribute mora biti :size karaktera.',
            array: 'Polje :attribute mora sadržati :size stavki.',
          },
          string: 'Polje :attribute mora sadržati slova.',
          timezone: 'Polje :attribute mora biti ispravna vremenska zona.',
          unique: 'Polje :attribute već postoji.',
          uploaded: 'The :attribute failed to upload.',
          url: 'Format polja :attribute ne važi.',
        }
      },
      6892: (t) => {
        t.exports = {
          accepted: ':attribute måste accepteras.',
          active_url: ':attribute är inte en giltig webbadress.',
          after: ':attribute måste vara ett datum efter den :date.',
          after_or_equal:
            ':attribute måste vara ett datum senare eller samma dag som :date.',
          alpha: ':attribute får endast innehålla bokstäver.',
          alpha_dash:
            ':attribute får endast innehålla bokstäver, siffror och bindestreck.',
          alpha_num: ':attribute får endast innehålla bokstäver och siffror.',
          array: ':attribute måste vara en array.',
          before: ':attribute måste vara ett datum innan den :date.',
          before_or_equal:
            ':attribute måste vara ett datum före eller samma dag som :date.',
          between: {
            numeric: ':attribute måste vara en siffra mellan :min och :max.',
            file: ':attribute måste vara mellan :min till :max kilobyte stor.',
            string: ':attribute måste innehålla :min till :max tecken.',
            array: ':attribute måste innehålla mellan :min - :max objekt.',
          },
          boolean: ':attribute måste vara sant eller falskt.',
          confirmed: ':attribute bekräftelsen matchar inte.',
          date: ':attribute är inte ett giltigt datum.',
          date_format: ':attribute matchar inte formatet :format.',
          different: ':attribute och :other får inte vara lika.',
          digits: ':attribute måste vara :digits tecken.',
          digits_between: ':attribute måste vara mellan :min och :max tecken.',
          dimensions: ':attribute har felaktiga bilddimensioner.',
          distinct:
            ':attribute innehåller fler än en repetition av samma element.',
          email: ':attribute måste innehålla en korrekt e-postadress.',
          exists: ':attribute är ogiltigt.',
          file: ':attribute måste vara en fil.',
          filled: ':attribute är obligatoriskt.',
          gt: {
            numeric: ':attribute måste vara större än :value.',
            file: ':attribute måste vara större än :value kilobyte stor.',
            string: ':attribute måste vara längre än :value tecken.',
            array: ':attribute måste innehålla fler än :value objekt.',
          },
          gte: {
            numeric: ':attribute måste vara lika med eller större än :value.',
            file: ':attribute måste vara lika med eller större än :value kilobyte stor.',
            string:
              ':attribute måste vara lika med eller längre än :value tecken.',
            array:
              ':attribute måste innehålla lika många eller fler än :value objekt.',
          },
          hex: 'The :attribute field should have hexadecimal format',
          image: ':attribute måste vara en bild.',
          in: ':attribute är ogiltigt.',
          in_array: ':attribute finns inte i :other.',
          integer: ':attribute måste vara en siffra.',
          ip: ':attribute måste vara en giltig IP-adress.',
          ipv4: ':attribute måste vara en giltig IPv4-adress.',
          ipv6: ':attribute måste vara en giltig IPv6-adress.',
          json: ':attribute måste vara en giltig JSON-sträng.',
          lt: {
            numeric: ':attribute måste vara mindre än :value.',
            file: ':attribute måste vara mindre än :value kilobyte stor.',
            string: ':attribute måste vara kortare än :value tecken.',
            array: ':attribute måste innehålla färre än :value objekt.',
          },
          lte: {
            numeric: ':attribute måste vara lika med eller mindre än :value.',
            file: ':attribute måste vara lika med eller mindre än :value kilobyte stor.',
            string:
              ':attribute måste vara lika med eller kortare än :value tecken.',
            array:
              ':attribute måste innehålla lika många eller färre än :value objekt.',
          },
          max: {
            numeric: ':attribute får inte vara större än :max.',
            file: ':attribute får max vara :max kilobyte stor.',
            string: ':attribute får max innehålla :max tecken.',
            array: ':attribute får inte innehålla mer än :max objekt.',
          },
          mimes: ':attribute måste vara en fil av typen: :values.',
          mimetypes: ':attribute måste vara en fil av typen: :values.',
          min: {
            numeric: ':attribute måste vara större än :min.',
            file: ':attribute måste vara minst :min kilobyte stor.',
            string: ':attribute måste innehålla minst :min tecken.',
            array: ':attribute måste innehålla minst :min objekt.',
          },
          not_in: ':attribute är ogiltigt.',
          not_regex: 'Formatet för :attribute är ogiltigt.',
          numeric: ':attribute måste vara en siffra.',
          present: ':attribute måste finnas med.',
          regex: ':attribute har ogiltigt format.',
          required: ':attribute är obligatoriskt.',
          required_if: ':attribute är obligatoriskt när :other är :value.',
          required_unless:
            ':attribute är obligatoriskt när inte :other finns bland :values.',
          required_with: ':attribute är obligatoriskt när :values är ifyllt.',
          required_with_all:
            ':attribute är obligatoriskt när :values är ifyllt.',
          required_without:
            ':attribute är obligatoriskt när :values ej är ifyllt.',
          required_without_all:
            ':attribute är obligatoriskt när ingen av :values är ifyllt.',
          same: ':attribute och :other måste vara lika.',
          size: {
            numeric: ':attribute måste vara :size.',
            file: ':attribute får endast vara :size kilobyte stor.',
            string: ':attribute måste innehålla :size tecken.',
            array: ':attribute måste innehålla :size objekt.',
          },
          string: ':attribute måste vara en sträng.',
          timezone: ':attribute måste vara en giltig tidszon.',
          unique: ':attribute används redan.',
          uploaded: ':attribute kunde inte laddas upp.',
          url: ':attribute har ett ogiltigt format.',
        }
      },
      5584: (t) => {
        t.exports = {
          accepted: ':attribute kabul edilmeli.',
          after: ':attribute alanı :after alanından sonra olmalıdır.',
          after_or_equal:
            ':attribute alanı :after_or_equal alanına eşit veya sonra olmalıdır.',
          alpha: ':attribute alanı sadece harflerden oluşabilir.',
          alpha_dash:
            ':attribute alanı sadece alfa-nümerik, tire ve alt çizgi karakterlerden oluşabilir.',
          alpha_num: ':attribute alanı alfa-nümerik olmalıdır.',
          before: ':attribute alanı :before alanından önce olmalıdır.',
          before_or_equal:
            ':attribute alanı :before_or_equal alanına eşit veya önce olmalıdır.',
          between: ':attribute alanı :min ile :max arasında olabilir.',
          confirmed: ':attribute uyuşmuyor.',
          email: ':attribute formatı geçersiz.',
          date: ':attribute geöerli bir tarih alanı değil.',
          def: ':attribute hatalar içeriyor.',
          digits: ':attribute sadece rakamlardan oluşabilir.',
          digits_between: ':attribute :min ile :max arasında rakam olmalıdır.',
          different: ':attribute ve :different farklı olmalı.',
          in: 'Seçilen :attribute geçerli değil.',
          integer: ':attribute tam sayı olmalı.',
          hex: ':attribute onaltılık formatta olmalı.',
          min: {
            numeric: ':attribute en az :min olmalı.',
            string: ':attribute en az :min karakter uzunluğunda olmalı.',
          },
          max: {
            numeric: ':attribute en çok :max olabilir.',
            string:
              ':attribute uzunluğu en çok :max karakter uzunluğunda olabilir.',
          },
          not_in: 'Seçilen :attribute geçerli değil.',
          numeric: ':attribute sayı olmalı.',
          present: ':attribute alanı bulunmalıdır (ancak boş olabilir).',
          required: ':attribute alanı gerekli.',
          required_if:
            ':attribute alanı :other alanı :value olduğunda gerekli.',
          required_unless:
            ':attribute alanı :other alanı :value değilse gereklidir.',
          required_with: ':attribute alanı :field boş değilse gereklidir.',
          required_with_all:
            ':attribute alanı :fields alanları boş değilse gereklidir.',
          required_without: ':attribute alanı :field alanı boşsa gereklidir.',
          required_without_all:
            ':attribute alanı :fields alanları boşsa gereklidir.',
          same: ':attribute ve :same aynı olmalı.',
          size: {
            numeric: ':attribute :size olmalı.',
            string: ':attribute :size karakter uzunluğunda olmalı.',
          },
          string: ':attribute alfa-numerik olmalı.',
          url: ':attribute formatı geçersiz.',
          regex: ':attribute formatı geçersiz.',
          attributes: {},
        }
      },
      6773: (t) => {
        t.exports = {
          accepted: ':attribute повиннен бути прийнятий.',
          alpha: 'Поле :attribute може складатись тільки з літер.',
          alpha_dash:
            'Поле :attribute може складатись тільки з літер, чисел, дефісів та символів підкреслення.',
          alpha_num: 'Поле :attribute може складатись тільки з літер та чисел.',
          between:
            'Значення поля :attribute повинно знаходитись між :min і :max.',
          confirmed: 'Поле :attribute не співпадає з підтвердженням.',
          email:
            'Значення поля :attribute повинно бути існуючою електронною адресою.',
          def: 'Поле :attribute містить помилки.',
          digits: 'Довжина числового поля :attribute повинна бути :digits.',
          digits_between:
            'Довжина цифрового поля :attribute повинна бути від :min до :max.',
          different: 'Поля :attribute і :different повинні відрізнятись.',
          in: 'Обране значення для :attribute помилкове.',
          integer: 'Значення поля :attribute повинно бути цілим числом.',
          hex: 'Значення поля :attribute повинно бути шістнадцяткового формату',
          min: {
            numeric:
              'Значення поля :attribute повинно бути більшим або рівним :min.',
            string:
              'Кількість символів в полі :attribute повинна бути не менше :min.',
          },
          max: {
            numeric:
              'Значення поля :attribute повинно бути менше або рівне :max.',
            string:
              'Кількість символів в полі :attribute не може превищувати :max.',
          },
          not_in: 'Обране значення для :attribute помилкове.',
          numeric: 'Значення поля :attribute повинно бути числом.',
          present:
            'Поле :attribute повинно бути присутнім (але може бути пустим).',
          required: "Поле :attribute обов'язкове для заповнення.",
          required_if:
            'Поле :attribute потрібне у випадку коли значення поля :other рівне :value.',
          same: 'Значеня поля :attribute повинно співпадати з :same.',
          size: {
            numeric: 'Значення поля :attribute повинно бути рівним :size.',
            string:
              'Кількість символів в полі :attribute повинна бути рівною :size.',
          },
          url: 'Поле :attribute повинне містити валідний URL.',
          regex: 'Неправильний формат значення :attribute.',
          attributes: {},
        }
      },
      9814: (t) => {
        t.exports = {
          accepted: 'Ви повинні прийняти :attribute.',
          active_url: 'Поле :attribute не є правильним URL.',
          after: 'Поле :attribute має містити дату не раніше :date.',
          after_or_equal:
            'Поле :attribute має містити дату не раніше або дорівнюватися :date.',
          alpha: 'Поле :attribute має містити лише літери.',
          alpha_dash:
            'Поле :attribute має містити лише літери, цифри та підкреслення.',
          alpha_num: 'Поле :attribute має містити лише літери та цифри.',
          attributes: {},
          array: 'Поле :attribute має бути масивом.',
          before: 'Поле :attribute має містити дату не пізніше :date.',
          before_or_equal:
            'Поле :attribute має містити дату не пізніше або дорівнюватися :date.',
          between: {
            numeric: 'Поле :attribute має бути між :min та :max.',
            file: 'Розмір файлу в полі :attribute має бути не менше :min та не більше :max кілобайт.',
            string:
              'Текст в полі :attribute має бути не менше :min та не більше :max символів.',
            array: 'Поле :attribute має містити від :min до :max елементів.',
          },
          boolean: 'Поле :attribute повинне містити логічний тип.',
          confirmed: 'Поле :attribute не збігається з підтвердженням.',
          date: 'Поле :attribute не є датою.',
          date_format: 'Поле :attribute не відповідає формату :format.',
          different: 'Поля :attribute та :other повинні бути різними.',
          digits:
            'Довжина цифрового поля :attribute повинна дорівнювати :digits.',
          digits_between:
            'Довжина цифрового поля :attribute повинна бути від :min до :max.',
          dimensions:
            'Поле :attribute містіть неприпустимі розміри зображення.',
          distinct: 'Поле :attribute містить значення, яке дублюється.',
          email: 'Поле :attribute повинне містити коректну електронну адресу.',
          file: 'Поле :attribute має містити файл.',
          filled: "Поле :attribute є обов'язковим для заповнення.",
          exists: 'Вибране для :attribute значення не коректне.',
          gt: {
            numeric: 'The :attribute must be greater than :value.',
            file: 'The :attribute must be greater than :value kilobytes.',
            string: 'The :attribute must be greater than :value characters.',
            array: 'The :attribute must have more than :value items.',
          },
          gte: {
            numeric: 'The :attribute must be greater than or equal :value.',
            file: 'The :attribute must be greater than or equal :value kilobytes.',
            string:
              'The :attribute must be greater than or equal :value characters.',
            array: 'The :attribute must have :value items or more.',
          },
          hex: 'The :attribute field should have hexadecimal format',
          image: 'Поле :attribute має містити зображення.',
          in: 'Вибране для :attribute значення не коректне.',
          in_array: 'Значення поля :attribute не міститься в :other.',
          integer: 'Поле :attribute має містити ціле число.',
          ip: 'Поле :attribute має містити IP адресу.',
          ipv4: 'Поле :attribute має містити IPv4 адресу.',
          ipv6: 'Поле :attribute має містити IPv6 адресу.',
          json: 'Дані поля :attribute мають бути в форматі JSON.',
          lt: {
            numeric: 'The :attribute must be less than :value.',
            file: 'The :attribute must be less than :value kilobytes.',
            string: 'The :attribute must be less than :value characters.',
            array: 'The :attribute must have less than :value items.',
          },
          lte: {
            numeric: 'The :attribute must be less than or equal :value.',
            file: 'The :attribute must be less than or equal :value kilobytes.',
            string:
              'The :attribute must be less than or equal :value characters.',
            array: 'The :attribute must not have more than :value items.',
          },
          max: {
            numeric: 'Поле :attribute має бути не більше :max.',
            file: 'Файл в полі :attribute має бути не більше :max кілобайт.',
            string:
              'Текст в полі :attribute повинен мати довжину не більшу за :max.',
            array: 'Поле :attribute повинне містити не більше :max елементів.',
          },
          mimes:
            'Поле :attribute повинне містити файл одного з типів: :values.',
          mimetypes:
            'Поле :attribute повинне містити файл одного з типів: :values.',
          min: {
            numeric: 'Поле :attribute повинне бути не менше :min.',
            file: 'Розмір файлу в полі :attribute має бути не меншим :min кілобайт.',
            string:
              'Текст в полі :attribute повинен містити не менше :min символів.',
            array: 'Поле :attribute повинне містити не менше :min елементів.',
          },
          not_in: 'Вибране для :attribute значення не коректне.',
          not_regex: 'The :attribute format is invalid.',
          numeric: 'Поле :attribute повинно містити число.',
          present: 'Поле :attribute повинне бути присутнє.',
          regex: 'Поле :attribute має хибний формат.',
          required: "Поле :attribute є обов'язковим для заповнення.",
          required_if:
            "Поле :attribute є обов'язковим для заповнення, коли :other є рівним :value.",
          required_unless:
            "Поле :attribute є обов'язковим для заповнення, коли :other відрізняється від :values",
          required_with:
            "Поле :attribute є обов'язковим для заповнення, коли :values вказано.",
          required_with_all:
            "Поле :attribute є обов'язковим для заповнення, коли :values вказано.",
          required_without:
            "Поле :attribute є обов'язковим для заповнення, коли :values не вказано.",
          required_without_all:
            "Поле :attribute є обов'язковим для заповнення, коли :values не вказано.",
          same: 'Поля :attribute та :other мають співпадати.',
          size: {
            numeric: 'Поле :attribute має бути довжини :size.',
            file: 'Файл в полі :attribute має бути розміром :size кілобайт.',
            string: 'Текст в полі :attribute повинен містити :size символів.',
            array: 'Поле :attribute повинне містити :size елементів.',
          },
          string: 'Поле :attribute повинне містити текст.',
          timezone: 'Поле :attribute повинне містити коректну часову зону.',
          unique: 'Таке значення поля :attribute вже існує.',
          uploaded: 'Завантаження поля :attribute не вдалося.',
          url: 'Формат поля :attribute неправильний.',
        }
      },
      7879: (t) => {
        t.exports = {
          accepted: ':attribute phải được chấp nhận.',
          alpha: 'Trường :attribute phải là ký tự',
          alpha_dash:
            ':attribute chỉ chấp nhận ký tự chữ cái, số, dấu gạch chéo và gạch dưới.',
          alpha_num: ':attribute phải là ký tự chữ cái hoặc chữ số.',
          between: ':attribute phải nằm trong khoảng :min và :max.',
          confirmed: ':attribute xác nhận không trùng khớp.',
          email: ':attribute không phải là email.',
          date: ':attribute không phải là ngày hợp lệ',
          def: 'Thuộc tính :attribute có lỗi.',
          digits: ':attribute phải là số và có chiều dài bằng :digits.',
          digits_between:
            'Độ dài của trường :attribute phải nằm trong khoảng :min and :max chữ số.',
          different:
            'Giá trị của hai trường :attribute và :different phải khác nhau.',
          in: 'Giá trị được chọn của :attribute không hợp lệ.',
          integer: ':attribute phải là số nguyên.',
          hex: 'The :attribute should have hexadecimal format',
          min: {
            numeric: ':attribute phải lớn hơn hoặc bằng :min.',
            string: ':attribute phải có ít nhất :min ký tự.',
          },
          max: {
            numeric: ':attribute phải nhỏ hơn hoặc bằng :max.',
            string: ':attribute phải có ít hơn :max ký tự.',
          },
          not_in: 'Giá trị được chọn của trường :attribute không hợp lệ.',
          numeric: ':attribute phải là số.',
          present: 'Trường :attribute phải có mặt (nhưng có thể để trống).',
          required: ':attribute bắt buộc nhập.',
          required_if: ':attribute là bắt buộc khi :other có giá trị :value.',
          same: 'Giá trị của :attribute và :same phải như nhau.',
          size: {
            numeric: ':attribute phải có chiều dài của bằng :size.',
            string: 'Số ký tự của :attribute phải là :size ký tự.',
          },
          string: ':attribute không phải là một chuỗi',
          url: ':attribute không phải là một Url hợp lệ.',
          regex: ':attribute không đúng định dạng',
          attributes: {},
        }
      },
      755: (t) => {
        t.exports = {
          accepted: ':attribute必须是可接受的.',
          alpha: ':attribute只能包含字母.',
          alpha_dash: ':attribute只能包含字母,连字符和下划线.',
          alpha_num: ':attribute只能包含字母和数字.',
          between: ':attribute的(大小,长度等)只能在:min和:max之间.',
          confirmed: ':attribute确认不一致.',
          email: ':attribute格式不正确.',
          date: ':attribute日期格式错误.',
          def: ':attribute属性错误.',
          digits: ':attribute必须是:digits位小数.',
          digits_between: ':attribute 必须是介于 :min 和 :max 位的数字。',
          different: ':attribute和:different必须不同.',
          in: '选择的:attribute无效',
          integer: ':attribute必须是一个整数.',
          hex: 'The :attribute should have hexadecimal format',
          min: {
            numeric: ':attribute不能小于:min.',
            string: ':attribute长度不能小于:min.',
          },
          max: {
            numeric: ':attribute不能大于:max.',
            string: ':attribute长度不能大于:max.',
          },
          not_in: '所选的:attribute无效.',
          numeric: ':attribute必须是一个数字.',
          present: 'The :attribute field must be present (but can be empty).',
          required: ':attribute不能为空.',
          required_if: '当:other是:value时,:attribute不能为空.',
          same: ':attribute和:same必须一致.',
          size: {
            numeric: ':attribute必须等于:size.',
            string: ':attribute的长度必须等于:size.',
          },
          string: ':attribute必须是一个字符串.',
          url: ':attribute格式不正确.',
          regex: ':attribute格式不正确.',
          attributes: {},
        }
      },
      9261: (t) => {
        t.exports = {
          accepted: ':attribute必須接受。',
          alpha: ':attribute只能包含字母。',
          alpha_dash: ':attribute只能包含字母，連字符和下划線。',
          alpha_num: ':attribute只能包含字母和數字。',
          between: ':attribute的值只能在:min和:max之間。',
          confirmed: ':attribute與確認輸入不一致。',
          email: ':attribute的格式錯誤。',
          date: ':attribute的日期格式錯誤。',
          def: ':attribute屬性錯誤。',
          digits: ':attribute必須是:digits位小數。',
          digits_between: ':attribute 必須介於 :min 至 :max 位數字。',
          different: ':attribute和:different必須不同。',
          in: '選擇的:attribute無效',
          integer: ':attribute必須是一個整數。',
          hex: ':attribute 必須是十六進位格式',
          min: {
            numeric: ':attribute不能小於:min。',
            string: ':attribute的長度不能小於:min.',
          },
          max: {
            numeric: ':attribute不能大於:max。',
            string: ':attribute的長度不能大於:max.',
          },
          not_in: '所選的:attribute無效。',
          numeric: ':attribute必須是一個數字。',
          present: ':attribute 一定要有值 (可以是空值)。',
          required: ':attribute不能空白。',
          required_if: '當:other是:value時,:attribute不能空白。',
          same: ':attribute和:same必須一致。',
          size: {
            numeric: ':attribute必須等於:size。',
            string: ':attribute的長度必須等於:size.',
          },
          string: ':attribute必須是一個字串。',
          url: ':attribute格式不正確。',
          regex: ':attribute格式不正確。',
          attributes: {},
        }
      },
      2060: (t, e, a) => {
        var i = {
          './ar': 8528,
          './ar.js': 8528,
          './az': 8173,
          './az.js': 8173,
          './be': 7931,
          './be.js': 7931,
          './bg': 3188,
          './bg.js': 3188,
          './bs': 842,
          './bs.js': 842,
          './ca': 6918,
          './ca.js': 6918,
          './cs': 4590,
          './cs.js': 4590,
          './cy': 4475,
          './cy.js': 4475,
          './da': 9210,
          './da.js': 9210,
          './de': 1245,
          './de.js': 1245,
          './el': 4630,
          './el.js': 4630,
          './en': 437,
          './en.js': 437,
          './es': 5322,
          './es.js': 5322,
          './et': 279,
          './et.js': 279,
          './eu': 5e3,
          './eu.js': 5e3,
          './fa': 2927,
          './fa.js': 2927,
          './fi': 6496,
          './fi.js': 6496,
          './fr': 8899,
          './fr.js': 8899,
          './hr': 7494,
          './hr.js': 7494,
          './hu': 8789,
          './hu.js': 8789,
          './id': 2846,
          './id.js': 2846,
          './it': 830,
          './it.js': 830,
          './ja': 8938,
          './ja.js': 8938,
          './ka': 3330,
          './ka.js': 3330,
          './ko': 646,
          './ko.js': 646,
          './lt': 3772,
          './lt.js': 3772,
          './lv': 3421,
          './lv.js': 3421,
          './mk': 403,
          './mk.js': 403,
          './mn': 6079,
          './mn.js': 6079,
          './ms': 6311,
          './ms.js': 6311,
          './nb_NO': 2265,
          './nb_NO.js': 2265,
          './nl': 7741,
          './nl.js': 7741,
          './pl': 2756,
          './pl.js': 2756,
          './pt': 4865,
          './pt.js': 4865,
          './pt_BR': 9157,
          './pt_BR.js': 9157,
          './ro': 9296,
          './ro.js': 9296,
          './ru': 8576,
          './ru.js': 8576,
          './se': 1944,
          './se.js': 1944,
          './sl': 202,
          './sl.js': 202,
          './sq': 6782,
          './sq.js': 6782,
          './sr': 2964,
          './sr.js': 2964,
          './sv': 6892,
          './sv.js': 6892,
          './tr': 5584,
          './tr.js': 5584,
          './ua': 6773,
          './ua.js': 6773,
          './uk': 9814,
          './uk.js': 9814,
          './vi': 7879,
          './vi.js': 7879,
          './zh': 755,
          './zh.js': 755,
          './zh_TW': 9261,
          './zh_TW.js': 9261,
        }
        function r(t) {
          var e = u(t)
          return a(e)
        }
        function u(t) {
          if (!a.o(i, t)) {
            var e = new Error("Cannot find module '" + t + "'")
            throw ((e.code = 'MODULE_NOT_FOUND'), e)
          }
          return i[t]
        }
        ;(r.keys = function () {
          return Object.keys(i)
        }),
          (r.resolve = u),
          (t.exports = r),
          (r.id = 2060)
      },
      3367: (t, e, a) => {
        var i = a(6319),
          r = function (t, e) {
            ;(this.lang = t),
              (this.messages = e),
              (this.customMessages = {}),
              (this.attributeNames = {})
          }
        ;(r.prototype = {
          constructor: r,
          _setCustom: function (t) {
            this.customMessages = t || {}
          },
          _setAttributeNames: function (t) {
            this.attributeNames = t
          },
          _setAttributeFormatter: function (t) {
            this.attributeFormatter = t
          },
          _getAttributeName: function (t) {
            var e = t
            return this.attributeNames.hasOwnProperty(t)
              ? this.attributeNames[t]
              : (this.messages.attributes.hasOwnProperty(t) &&
                  (e = this.messages.attributes[t]),
                this.attributeFormatter && (e = this.attributeFormatter(e)),
                e)
          },
          all: function () {
            return this.messages
          },
          render: function (t) {
            if (t.customMessage) return t.customMessage
            var e = this._getTemplate(t)
            return i.replacements[t.name]
              ? i.replacements[t.name].apply(this, [e, t])
              : this._replacePlaceholders(t, e, {})
          },
          _getTemplate: function (t) {
            for (
              var e,
                a = this.messages,
                i = a.def,
                r = this.customMessages,
                u = [t.name + '.' + t.attribute, t.name],
                n = 0;
              n < u.length;
              n++
            ) {
              if (((e = u[n]), r.hasOwnProperty(e))) {
                i = r[e]
                break
              }
              if (a.hasOwnProperty(e)) {
                i = a[e]
                break
              }
            }
            return 'object' == typeof i && (i = i[t._getValueType()]), i
          },
          _replacePlaceholders: function (t, e, a) {
            var i, r
            if (
              ((a.attribute = this._getAttributeName(t.attribute)),
              (a[t.name] = a[t.name] || t.getParameters().join(',')),
              'string' == typeof e && 'object' == typeof a)
            )
              for (r in ((i = e), a))
                i = i.replace(new RegExp(':' + r, 'g'), a[r])
            return i
          },
        }),
          (t.exports = r)
      },
      1846: (t) => {
        function e(t) {
          let e
          if ('number' == typeof t && ((e = new Date(t)), 'object' == typeof e))
            return !0
          if (((e = new Date(t)), 'object' == typeof e))
            return (
              'Invalid Date' !== e.toString() &&
              !!(function (t = '') {
                if (10 === t.length) {
                  let a = t.replace('.', '-').replace('/', '-').split('-')
                  if (3 === a.length && 4 === a[0].length) {
                    let t = parseInt(a[0]),
                      i = parseInt(a[1]),
                      r = parseInt(a[2])
                    if (2 === i)
                      if (((e = t) % 4 == 0 && e % 100 != 0) || e % 400 == 0) {
                        if (r > 29) return !1
                      } else if (r > 28) return !1
                    if ((4 === i || 6 === i || 9 === i || 11 === i) && r > 30)
                      return !1
                  }
                  return !0
                }
                var e
                return !0
              })(t)
            )
          if (!/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(t)) return !1
          var a = t.split('-'),
            i = parseInt(a[2], 10),
            r = parseInt(a[1], 10),
            u = parseInt(a[0], 10)
          if (u < 1e3 || u > 3e3 || 0 == r || r > 12) return !1
          var n = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
          return (
            (u % 400 == 0 || (u % 100 != 0 && u % 4 == 0)) && (n[1] = 29),
            i > 0 && i <= n[r - 1]
          )
        }
        var a,
          i = {
            required: function (t) {
              return null != t && String(t).replace(/\s/g, '').length > 0
            },
            required_if: function (t, e, a) {
              return (
                (e = this.getParameters()),
                this.validator._objectPath(this.validator.input, e[0]) !==
                  e[1] || this.validator.getRule('required').validate(t)
              )
            },
            required_unless: function (t, e, a) {
              return (
                (e = this.getParameters()),
                this.validator._objectPath(this.validator.input, e[0]) ===
                  e[1] || this.validator.getRule('required').validate(t)
              )
            },
            required_with: function (t, e, a) {
              return (
                !this.validator._objectPath(this.validator.input, e) ||
                this.validator.getRule('required').validate(t)
              )
            },
            required_with_all: function (t, e, a) {
              e = this.getParameters()
              for (var i = 0; i < e.length; i++)
                if (!this.validator._objectPath(this.validator.input, e[i]))
                  return !0
              return this.validator.getRule('required').validate(t)
            },
            required_without: function (t, e, a) {
              return (
                !!this.validator._objectPath(this.validator.input, e) ||
                this.validator.getRule('required').validate(t)
              )
            },
            required_without_all: function (t, e, a) {
              e = this.getParameters()
              for (var i = 0; i < e.length; i++)
                if (this.validator._objectPath(this.validator.input, e[i]))
                  return !0
              return this.validator.getRule('required').validate(t)
            },
            boolean: function (t) {
              return (
                !0 === t ||
                !1 === t ||
                0 === t ||
                1 === t ||
                '0' === t ||
                '1' === t ||
                'true' === t ||
                'false' === t
              )
            },
            size: function (t, e, a) {
              return !t || ((e = parseFloat(e)), this.getSize() === e)
            },
            string: function (t, e, a) {
              return 'string' == typeof t
            },
            sometimes: function (t) {
              return !0
            },
            min: function (t, e, a) {
              return this.getSize() >= e
            },
            max: function (t, e, a) {
              return this.getSize() <= e
            },
            between: function (t, e, a) {
              e = this.getParameters()
              var i = this.getSize(),
                r = parseFloat(e[0], 10),
                u = parseFloat(e[1], 10)
              return i >= r && i <= u
            },
            email: function (t) {
              var e =
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              return (
                e.test(t) ||
                  (e =
                    /^((?:[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]|[^\u0000-\u007F])+@(?:[a-zA-Z0-9]|[^\u0000-\u007F])(?:(?:[a-zA-Z0-9-]|[^\u0000-\u007F]){0,61}(?:[a-zA-Z0-9]|[^\u0000-\u007F]))?(?:\.(?:[a-zA-Z0-9]|[^\u0000-\u007F])(?:(?:[a-zA-Z0-9-]|[^\u0000-\u007F]){0,61}(?:[a-zA-Z0-9]|[^\u0000-\u007F]))?)+)*$/),
                e.test(t)
              )
            },
            numeric: function (t) {
              var e
              return (
                'number' == typeof (e = Number(t)) &&
                !isNaN(e) &&
                'boolean' != typeof t
              )
            },
            array: function (t) {
              return t instanceof Array
            },
            url: function (t) {
              return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_\+.~#?&/=]*)/i.test(
                t
              )
            },
            alpha: function (t) {
              return /^[a-zA-Z]+$/.test(t)
            },
            alpha_dash: function (t) {
              return /^[a-zA-Z0-9_\-]+$/.test(t)
            },
            alpha_num: function (t) {
              return /^[a-zA-Z0-9]+$/.test(t)
            },
            same: function (t, e) {
              return (
                this.validator._flattenObject(this.validator.input)[e] === t
              )
            },
            different: function (t, e) {
              return (
                this.validator._flattenObject(this.validator.input)[e] !== t
              )
            },
            in: function (t, e) {
              var a, i
              if (
                (t && (a = this.getParameters()), t && !(t instanceof Array))
              ) {
                var r = t
                for (i = 0; i < a.length; i++)
                  if (('string' == typeof a[i] && (r = String(t)), r === a[i]))
                    return !0
                return !1
              }
              if (t && t instanceof Array)
                for (i = 0; i < t.length; i++)
                  if (a.indexOf(t[i]) < 0) return !1
              return !0
            },
            not_in: function (t, e) {
              for (
                var a = this.getParameters(), i = a.length, r = !0, u = 0;
                u < i;
                u++
              ) {
                var n = t
                if (('string' == typeof a[u] && (n = String(t)), n === a[u])) {
                  r = !1
                  break
                }
              }
              return r
            },
            accepted: function (t) {
              return (
                'on' === t || 'yes' === t || 1 === t || '1' === t || !0 === t
              )
            },
            confirmed: function (t, e, a) {
              var i = a + '_confirmation'
              return this.validator.input[i] === t
            },
            integer: function (t) {
              return String(parseInt(t, 10)) === String(t)
            },
            digits: function (t, e) {
              return !(
                !this.validator.getRule('numeric').validate(t) ||
                String(t.trim()).length !== parseInt(e)
              )
            },
            digits_between: function (t) {
              var e = this.validator.getRule('numeric'),
                a = this.getParameters(),
                i = String(t).length,
                r = parseFloat(a[0], 10),
                u = parseFloat(a[1], 10)
              return !!(e.validate(t) && i >= r && i <= u)
            },
            regex: function (t, e) {
              var a = /[g|i|m]{1,3}$/,
                i = e.match(a)
              return (
                (i = i ? i[0] : ''),
                (e = e.replace(a, '').slice(1, -1)),
                !!(e = new RegExp(e, i)).test(t)
              )
            },
            date: function (t, a) {
              return e(t)
            },
            present: function (t) {
              return void 0 !== t
            },
            after: function (t, a) {
              var i = this.validator.input[a],
                r = t
              return (
                !!e(i) &&
                !!e(r) &&
                new Date(i).getTime() < new Date(r).getTime()
              )
            },
            after_or_equal: function (t, a) {
              var i = this.validator.input[a],
                r = t
              return (
                !!e(i) &&
                !!e(r) &&
                new Date(i).getTime() <= new Date(r).getTime()
              )
            },
            before: function (t, a) {
              var i = this.validator.input[a],
                r = t
              return (
                !!e(i) &&
                !!e(r) &&
                new Date(i).getTime() > new Date(r).getTime()
              )
            },
            before_or_equal: function (t, a) {
              var i = this.validator.input[a],
                r = t
              return (
                !!e(i) &&
                !!e(r) &&
                new Date(i).getTime() >= new Date(r).getTime()
              )
            },
            hex: function (t) {
              return /^[0-9a-f]+$/i.test(t)
            },
            ipv4: function (t, e, a) {
              if ('string' != typeof t) return !1
              var i = /^[0-9]+$/
              if (((octets = t.split('.')), 4 != octets.length)) return !1
              for (let t = 0; t < octets.length; t++) {
                const e = octets[t]
                if (!i.test(e)) return !1
                if (parseInt(e) >= 256) return !1
              }
              return !0
            },
            ipv6: function (t, e, a) {
              if ('string' != typeof t) return !1
              var i = /^[0-9a-f]+$/
              if (
                ((hextets = t.split(':')),
                (colons = t.match(/::/)),
                null != colons && t.match(/::/g).length > 1)
              )
                return !1
              if (
                ':' == t[0] &&
                (null == colons || (null != colons && 0 != colons.index))
              )
                return !1
              if (
                ':' == t[t.length - 1] &&
                (null == colons ||
                  (null != colons && colons.index != t.length - 2))
              )
                return !1
              if (3 > hextets.length) return !1
              var r =
                9 == hextets.length &&
                null != colons &&
                (0 == colons.index || colons.index == t.length - 2)
              if (hextets.length > 8 && !r) return !1
              if (8 != hextets.length && null == colons) return !1
              for (let t = 0; t < hextets.length; t++) {
                const e = hextets[t]
                if (0 != e.length) {
                  if (!i.test(e)) return !1
                  if (e.length > 4) return !1
                }
              }
              return !0
            },
            ip: function (t, e, a) {
              return i.ipv4(t, e, a) || i.ipv6(t, e, a)
            },
          },
          r = function () {
            throw new Error('Validator `' + this.name + '` is not defined!')
          }
        function u(t, e, a) {
          ;(this.name = t),
            (this.fn = e),
            (this.passes = null),
            (this._customMessage = void 0),
            (this.async = a)
        }
        u.prototype = {
          validate: function (t, e, a, i) {
            var r = this
            if ((this._setValidatingData(a, t, e), 'function' == typeof i)) {
              this.callback = i
              var u = function (t, e) {
                r.response(t, e)
              }
              return this.async
                ? this._apply(t, e, a, u)
                : u(this._apply(t, e, a))
            }
            return this._apply(t, e, a)
          },
          _apply: function (t, e, a, i) {
            return (this.isMissed() ? r : this.fn).apply(this, [t, e, a, i])
          },
          _setValidatingData: function (t, e, a) {
            ;(this.attribute = t), (this.inputValue = e), (this.ruleValue = a)
          },
          getParameters: function () {
            var t = []
            return (
              'string' == typeof this.ruleValue &&
                (t = this.ruleValue.split(',')),
              'number' == typeof this.ruleValue && t.push(this.ruleValue),
              this.ruleValue instanceof Array && (t = this.ruleValue),
              t
            )
          },
          getSize: function () {
            var t = this.inputValue
            return t instanceof Array
              ? t.length
              : 'number' == typeof t
              ? t
              : this.validator._hasNumericRule(this.attribute)
              ? parseFloat(t, 10)
              : t.length
          },
          _getValueType: function () {
            return 'number' == typeof this.inputValue ||
              this.validator._hasNumericRule(this.attribute)
              ? 'numeric'
              : 'string'
          },
          response: function (t, e) {
            ;(this.passes = void 0 === t || !0 === t),
              (this._customMessage = e),
              this.callback(this.passes, e)
          },
          setValidator: function (t) {
            this.validator = t
          },
          isMissed: function () {
            return 'function' != typeof this.fn
          },
          get customMessage() {
            return this.isMissed() ? a : this._customMessage
          },
        }
        var n = {
          asyncRules: [],
          implicitRules: [
            'required',
            'required_if',
            'required_unless',
            'required_with',
            'required_with_all',
            'required_without',
            'required_without_all',
            'accepted',
            'present',
          ],
          make: function (t, e) {
            var a = this.isAsync(t),
              r = new u(t, i[t], a)
            return r.setValidator(e), r
          },
          isAsync: function (t) {
            for (var e = 0, a = this.asyncRules.length; e < a; e++)
              if (this.asyncRules[e] === t) return !0
            return !1
          },
          isImplicit: function (t) {
            return this.implicitRules.indexOf(t) > -1
          },
          register: function (t, e) {
            i[t] = e
          },
          registerImplicit: function (t, e) {
            this.register(t, e), this.implicitRules.push(t)
          },
          registerAsync: function (t, e) {
            this.register(t, e), this.asyncRules.push(t)
          },
          registerAsyncImplicit: function (t, e) {
            this.registerImplicit(t, e), this.asyncRules.push(t)
          },
          registerMissedRuleValidator: function (t, e) {
            ;(r = t), (a = e)
          },
        }
        t.exports = n
      },
      9449: (t, e, a) => {
        var i = a(1846),
          r = a(8972),
          u = a(3995),
          n = a(6319),
          s = a(6601),
          l = function (t, e, a) {
            var i = l.getDefaultLang()
            ;(this.input = t || {}),
              (this.messages = r._make(i)),
              this.messages._setCustom(a),
              this.setAttributeFormatter(l.prototype.attributeFormatter),
              (this.errors = new u()),
              (this.errorCount = 0),
              (this.hasAsync = !1),
              (this.rules = this._parseRules(e))
          }
        ;(l.prototype = {
          constructor: l,
          lang: 'en',
          numericRules: ['integer', 'numeric'],
          attributeFormatter: n.formatter,
          check: function () {
            for (var t in this.rules) {
              var e = this.rules[t],
                a = this._objectPath(this.input, t)
              if (!this._hasRule(t, ['sometimes']) || this._suppliedWithData(t))
                for (
                  var i, r, u, n = 0, s = e.length;
                  n < s &&
                  ((r = e[n]),
                  (i = this.getRule(r.name)),
                  !this._isValidatable(i, a) ||
                    ((u = i.validate(a, r.value, t)) || this._addFailure(i),
                    !this._shouldStopValidating(t, u)));
                  n++
                );
            }
            return 0 === this.errorCount
          },
          checkAsync: function (t, e) {
            var a = this
            ;(t = t || function () {}), (e = e || function () {})
            var i = new s(
                function (t, e) {
                  a._addFailure(t, e)
                },
                function (a) {
                  a ? t() : e()
                }
              ),
              r = function (t, e, a, r) {
                return function () {
                  var u = i.add(r)
                  r.validate(t, e.value, a, function () {
                    i.resolve(u)
                  })
                }
              }
            for (var u in this.rules) {
              var n = this.rules[u],
                l = this._objectPath(this.input, u)
              if (!this._hasRule(u, ['sometimes']) || this._suppliedWithData(u))
                for (var b, o, m = 0, d = n.length; m < d; m++)
                  (o = n[m]),
                    (b = this.getRule(o.name)),
                    this._isValidatable(b, l) && r(l, o, u, b)()
            }
            i.enableFiring(), i.fire()
          },
          _addFailure: function (t) {
            var e = this.messages.render(t)
            this.errors.add(t.attribute, e), this.errorCount++
          },
          _flattenObject: function (t) {
            var e = {}
            return (
              t &&
                (function t(a, i) {
                  if (i || 0 !== Object.getOwnPropertyNames(a).length)
                    if (Object(a) !== a || Array.isArray(a)) e[i] = a
                    else {
                      var r = !0
                      for (var u in a) (r = !1), t(a[u], i ? i + '.' + u : u)
                      r && (e[i] = {})
                    }
                })(t),
              e
            )
          },
          _objectPath: function (t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e]
            var a = e
                .replace(/\[(\w+)\]/g, '.$1')
                .replace(/^\./, '')
                .split('.'),
              i = {}
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r])
            for (var u = 0, n = a.length; u < n; u++) {
              if (
                'object' != typeof i ||
                null === i ||
                !Object.hasOwnProperty.call(i, a[u])
              )
                return
              i = i[a[u]]
            }
            return i
          },
          _parseRules: function (t) {
            var e = {}
            for (var a in (t = this._flattenObject(t))) {
              var i = t[a]
              this._parseRulesCheck(a, i, e)
            }
            return e
          },
          _parseRulesCheck: function (t, e, a, i) {
            t.indexOf('*') > -1
              ? this._parsedRulesRecurse(t, e, a, i)
              : this._parseRulesDefault(t, e, a, i)
          },
          _parsedRulesRecurse: function (t, e, a, i) {
            var r = t.substr(0, t.indexOf('*') - 1),
              u = this._objectPath(this.input, r)
            if (u)
              for (var n = 0; n < u.length; n++) {
                var s = i ? i.slice() : []
                s.push(n), this._parseRulesCheck(t.replace('*', n), e, a, s)
              }
          },
          _parseRulesDefault: function (t, e, a, r) {
            var u = []
            e instanceof Array && (e = this._prepareRulesArray(e)),
              'string' == typeof e && (e = e.split('|'))
            for (var n, s = 0, l = e.length; s < l; s++)
              (n =
                'string' == typeof e[s]
                  ? this._extractRuleAndRuleValue(e[s])
                  : e[s]).value &&
                ((n.value = this._replaceWildCards(n.value, r)),
                this._replaceWildCardsMessages(r)),
                i.isAsync(n.name) && (this.hasAsync = !0),
                u.push(n)
            a[t] = u
          },
          _replaceWildCards: function (t, e) {
            if (!e) return t
            var a = t
            return (
              e.forEach(function (t) {
                Array.isArray(a) && (a = a[0])
                const e = a.indexOf('*')
                if (-1 === e) return a
                a = a.substr(0, e) + t + a.substr(e + 1)
              }),
              Array.isArray(t) && ((t[0] = a), (a = t)),
              a
            )
          },
          _replaceWildCardsMessages: function (t) {
            var e = this.messages.customMessages,
              a = this
            Object.keys(e).forEach(function (i) {
              if (t) {
                var r = a._replaceWildCards(i, t)
                e[r] = e[i]
              }
            }),
              this.messages._setCustom(e)
          },
          _prepareRulesArray: function (t) {
            for (var e = [], a = 0, i = t.length; a < i; a++)
              if ('object' == typeof t[a])
                for (var r in t[a]) e.push({ name: r, value: t[a][r] })
              else e.push(t[a])
            return e
          },
          _suppliedWithData: function (t) {
            return this.input.hasOwnProperty(t)
          },
          _extractRuleAndRuleValue: function (t) {
            var e,
              a = {}
            return (
              (a.name = t),
              t.indexOf(':') >= 0 &&
                ((e = t.split(':')),
                (a.name = e[0]),
                (a.value = e.slice(1).join(':'))),
              a
            )
          },
          _hasRule: function (t, e) {
            for (var a = this.rules[t] || [], i = 0, r = a.length; i < r; i++)
              if (e.indexOf(a[i].name) > -1) return !0
            return !1
          },
          _hasNumericRule: function (t) {
            return this._hasRule(t, this.numericRules)
          },
          _isValidatable: function (t, e) {
            return (
              !!Array.isArray(e) ||
              !!i.isImplicit(t.name) ||
              this.getRule('required').validate(e)
            )
          },
          _shouldStopValidating: function (t, e) {
            var a = this.stopOnAttributes
            return (
              void 0 !== a &&
              !1 !== a &&
              !0 !== e &&
              (!(a instanceof Array) || a.indexOf(t) > -1)
            )
          },
          setAttributeNames: function (t) {
            this.messages._setAttributeNames(t)
          },
          setAttributeFormatter: function (t) {
            this.messages._setAttributeFormatter(t)
          },
          getRule: function (t) {
            return i.make(t, this)
          },
          stopOnError: function (t) {
            this.stopOnAttributes = t
          },
          passes: function (t) {
            return this._checkAsync('passes', t)
              ? this.checkAsync(t)
              : this.check()
          },
          fails: function (t) {
            return this._checkAsync('fails', t)
              ? this.checkAsync(function () {}, t)
              : !this.check()
          },
          _checkAsync: function (t, e) {
            var a = 'function' == typeof e
            if (this.hasAsync && !a)
              throw t + ' expects a callback when async rules are being tested.'
            return this.hasAsync || a
          },
        }),
          (l.setMessages = function (t, e) {
            return r._set(t, e), this
          }),
          (l.getMessages = function (t) {
            return r._get(t)
          }),
          (l.useLang = function (t) {
            this.prototype.lang = t
          }),
          (l.getDefaultLang = function () {
            return this.prototype.lang
          }),
          (l.setAttributeFormatter = function (t) {
            this.prototype.attributeFormatter = t
          }),
          (l.stopOnError = function (t) {
            this.prototype.stopOnAttributes = t
          }),
          (l.register = function (t, e, a, u) {
            var n = l.getDefaultLang()
            i.register(t, e), r._setRuleMessage(n, t, a)
          }),
          (l.registerImplicit = function (t, e, a, u) {
            var n = l.getDefaultLang()
            i.registerImplicit(t, e), r._setRuleMessage(n, t, a)
          }),
          (l.registerAsync = function (t, e, a, u) {
            var n = l.getDefaultLang()
            i.registerAsync(t, e), r._setRuleMessage(n, t, a)
          }),
          (l.registerAsyncImplicit = function (t, e, a) {
            var u = l.getDefaultLang()
            i.registerAsyncImplicit(t, e), r._setRuleMessage(u, t, a)
          }),
          (l.registerMissedRuleValidator = function (t, e) {
            i.registerMissedRuleValidator(t, e)
          }),
          (t.exports = l)
      },
    },
    e = {}
  function a(i) {
    var r = e[i]
    if (void 0 !== r) return r.exports
    var u = (e[i] = { exports: {} })
    return t[i].call(u.exports, u, u.exports, a), u.exports
  }
  ;(a.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      'use strict'
      const t = a(8808),
        e = a(7285),
        i = a(2653)
      ;(window.QvInput = i.QvInput),
        (window.QvForm = e.QvForm),
        (window.Quickv = t.Quickv),
        (window.Qv = t.Quickv)
    })()
})()

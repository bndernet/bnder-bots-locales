import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_ar_ae {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `الموعد النهائي للمهمة **${id}** ${taskTitle} حان الوقت ${deadline} في مجال العمل [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `لقد تم تعيينك في مهمة **${id}** ${taskText} في مجال العمل [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            assigned_embed_title(id: string): string {
                return `المهام ${id} مخصصة`;
            },
            assigned_embed_footer: "يمكن تعطيل هذه الإخطارات باستخدام \"/preferences direct_messages\" القيادة",
            assigned_embed_button_in_progress: "علامة على التقدم المحرز",
            assigned_embed_button_done: "مارك كما فعل",
            deadline_was_in_past(id: string, guildName: string, guildId: string, taskTitle: string): string {
                return `الموعد النهائي للمهمة **${id}** ${taskTitle} متأخر في مكان العمل [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `المهمة **${id}** ${taskTitle} تم تعيينك لتتكرر و يجب أن تفعل مرة أخرى في مكان العمل [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            repeat_notification_embed_title(id: string): string {
                return `المهام ${id} متكررة`;
            },
            deadline_alert: "الموعد النهائي",
            deadline_duration_due_now: "الآن",
            deadline_duration_until(duration: string): string {
                return `in ${duration}`;
            },
            deadline_duration_days(days: number): string {
                return `${days}d`;
            },
            deadline_duration_hours(hours: number): string {
                return `${hours}h`;
            },
            deadline_duration_minutes(minutes: number): string {
                return `${minutes}m`;
            },
            commented_embed_title(id: string): string {
                return `التعليق المضاف إلى المهمة ${id}`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `أضيف تعليق إلى مهمة في مجال العمل [${guildName}](<https://discord.com/channels/${guildId}>) by ${author}: ${commentText}`;
            },
            comment_response_button: "رد على التعليق",
            stop_followup_reminder_button: "وقف التذكير بالمتابعة",
            extend_deadline_by_one_day_button: "تمديد الموعد النهائي بحلول يوم واحد",
            extend_deadline_by_two_days_button: "تمديد الموعد النهائي لمدة يومين",
            extend_deadline_by_one_week_button: "تمديد الموعد النهائي بحلول أسبوع واحد",
            subscriber_added_notification(guildName: string, guildId: string, id: string, taskText: string, addedBy: string): string {
                return `لقد أضيفتم كمشتركين في المهمة **${id}** ${taskText} في مجال العمل [${guildName}](<https://discord.com/channels/${guildId}>) by <@${addedBy}>وستتلقى إخطارات عندما يتغير شيء في هذه المهمة. إذا أردت التوقف عن تلقي الإخطارات يمكنك أن تضغط الزر أسفل`;
            },
            subscriber_added_notification_unsubscribe_button: "Unsubscribe",
            subscriber_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `المهمة **${id}** ${taskTitle} أنت مشترك في مجال العمل [${guildName}](<https://discord.com/channels/${guildId}>) تغير:`
            },
            subscriber_notification_footer: "الإخطارات غير القابلة للتصرف بهذه المهمة باستخدام \"/task unsubscribe\" القيادة",
            subscriber_embed_title(id: string): string {
                return `المهام ${id} تحديث`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `المعلم **${milestoneName}** يحل موعده في أقل من 6 ساعات في مكان العمل [${guildName}](<https://discord.com/channels/${guildId}>) ولديها مهام يتعين إنجازها.`;
            },
            status_todo: "Todo",
            status_in_progress: "التقدم المحرز",
            status_done: "تم"
        },
        webhookLogging: {
            id_field: "Id",
            deadline_field: "الموعد النهائي",
            assignees_field: "المحالة",
            status_field: "الحالة",
            todos_field: "Todos",
            delete_at_field: "تحذف",
            project_field: "المشروع",
            topic_field: "الموضوع",
            text_field: "النص",
            permission_field: "الإذن",
            role_field: "الدور",
            user_field: "مستخدم",
            preset_field: "Preset",
            priority_field: "الأولوية",
            type_field: "النوع",
            reporter_field: "المراسل",
            label_field: "Label",
            manager_field: "المدير",
            repeat_interval_field: "إعادة الانتشار في الأيام",
            repeat_end_date_field: "تاريخ آخر",
            milestone_field: "Milestone",
            due_date_field: "التاريخ المحدد",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "Todo";
                    case 1:
                        return "التقدم المحرز";
                    case 2:
                        return "تم";
                    default:
                        return "غير معروف";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `الموعد النهائي للمهمة ${id}`;
                },
                description(id: string, deadline: string): string {
                    return `الموعد النهائي للمهمة **${id}** حان الوقت ${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `المهام ${id} حذفت.`;
                },
                description(id: string): string {
                    return `المهام ${id} حذفت.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `المهام ${id} متكررة.`;
                },
                description(id: string): string {
                    return `المهام ${id} وكررت الولاية ووقعت عليها`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `المهام ${id} خلقت`;
                },
                description(task_text: string, id: string): string {
                    return `المهام ${id} أُنشئ بالنص: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `المهام ${id} تحديث.`;
                },
                description(id: string): string {
                    return `المهام ${id} وجرى تحديث البيانات التالية وتغييرها.`;
                }
            },
            ticket_created: {
                title(id: string): string {
                    return `التذاكر ${id} أنشئت`;
                }
            },
            ticket_updated: {
                title(id: string): string {
                    return `التذاكر ${id} تحديث`;
                }
            },
            ticket_deleted: {
                title(id: string): string {
                    return `التذاكر ${id} حذفت`;
                }
            },
            project_created: {
                title: "Project created",
                description(projectName: string): string {
                    return `المشروع ${projectName} أنشئت`;
                }
            },
            project_deleted: {
                title: "المشروع محذف",
                description(projectName: string): string {
                    return `المشروع ${projectName} حذفت`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `المهام ${id} تغير الوضع`;
                }
            },
            permission_granted: {
                title: "منح الإذن",
            },
            permission_revoked: {
                title: "إلغاء الإذن",
            },
            preset_applied: {
                title: "المرحلة السابقة",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `الموعد النهائي للمهمة ${id} متأخر`;
                }
            },
            project_updated: {
                title: "المشروع المستكمل",
                description(name: string): string {
                    return `المشروع ${name} تم تحديثه`;
                }
            },
            test_message: {
                title: "هذه رسالة اختبار",
                description: "إذا رأيت هذه الرسالة، الويب يعمل بشكل صحيح وقطع الأشجار مُمكّن."
            },
            comment_added: {
                title(id: string): string {
                    return `التعليق المضاف إلى المهمة ${id}`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `التعليق المحذف من المهمة ${id}`;
                }
            },
            topic_created: {
                title: "الموضوع المنشأ",
                description(name: string): string {
                    return `الموضوع ${name} أنشئت`;
                }
            },
            topic_updated: {
                title: "آخر المستجدات",
                description(name: string): string {
                    return `الموضوع ${name} تم تحديثه`;
                }
            },
            topic_deleted: {
                title: "مسح",
                description(name: string): string {
                    return `الموضوع ${name} حذفت`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `الوثيقة ${id} أنشئت`;
                },
                description(name: string): string {
                    return `الوثيقة ${name} أنشئت`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `الوثيقة ${id} تحديث`;
                },
                description(name: string): string {
                    return `الوثيقة ${name} تم تحديثه`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `الوثيقة ${id} حذفت`;
                },
                description(name: string): string {
                    return `الوثيقة ${name} حذفت`;
                }
            },
            label_created: {
                title: "Label created",
                description(name: string): string {
                    return `Label ${name} أنشئت`;
                }
            },
            label_updated: {
                title: "تحديث لابل",
                description(name: string): string {
                    return `Label ${name} تم تحديثه`;
                }
            },
            label_deleted: {
                title: "لابل حذفت",
                description(name: string): string {
                    return `Label ${name} حذفت`;
                }
            },
            attachments_field: "الملاحق",
            milestone_created: {
                title: "ميليستون خلق",
            },
            milestone_updated: {
                title: "تحديث",
            },
            milestone_deleted: {
                title: "حذفت ميليستون",
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string,): string {
                return `الحدث القادم${id}) **${name}** بدأت ${durationTillEventMinutes} دقيقة ${startTime} in [${guildName}](<https://discord.com/channels/${guildId}>).`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `لقد دعيت للحدث ${eventId} by <@${inviterId}>: **${eventName}** بداية ${start} و ينتهي ${end}جميع التواريخ محسوبة ${timezone}الاستخدام"/settings timezone\" لتغيير الزمن لأماكن العمل بأكملها، أو"/preferences timezone\" لتغيير ملابسك`;
                },
                accept_button: "قبول",
                deny_button: "ديني"
            },
            edit_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `<@${inviterId}> تحديث الحدث ${eventId}: **${eventName}** بداية ${start} و ينتهي ${end}جميع التواريخ محسوبة ${timezone}الاستخدام"/settings timezone\" لتغيير الزمن لأماكن العمل بأكملها، أو"/preferences timezone\" لتغيير ملابسك`
                }
            },
            booking_reminder: {
                content(workspaceName: string, durationTillEventMinutes: number, location: string, start: string, end: string, timezone: string): string {
                    return `حجزك ${workspaceName} يبدأ في ${durationTillEventMinutes} دقائق${start} - ${end}, ${timezone}).${location}`;
                },
                title: "تذكير مستجد بالحجز",
                manage_bookings_button: "حجز المهام",
            }
        },
        pro_granted_notification(guildId: string, guildName: string): string {
            return `تم تعيينك في مكان عمل [${guildName}](<https://discord.com/channels/${guildId}>)لديك الآن إمكانية الوصول إلى المميزات المدرجة في مقعدك المبتدئ أو برو`;
        },
        pro_seat_request_notification(guildId: string, guildName: string, requesterUsername: string): string {
            return `المستخدم **${requesterUsername}** طلب مقعدا مدفوع الأجر في مكان العمل [${guildName}](<https://discord.com/channels/${guildId}>)- يمكن للإعلانات المتعلقة بأماكن العمل أن تخصص أي مقعد غير موقّع في البداية أو مقعد برو باستخدام الزر الوارد أدناه. إذا كان العمل يحتاج إلى مزيد من المقاعد، زيارة [الأماكن المخصصة لأماكن العمل]https://bnder.net/app/settings/${guildId}/default?tab=1لشراء المقاعد`;
        },
        request_pro_seat_button_label: "مقعد مدفوعة الأجر",
        payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string {
            return `# 🚨 Action Needed: Payment Failed for Paid Seat Subscription
لم نتمكن من تجهيز الدفع لمقاعد أو أكثر من البداية أو برو [${guildName}](<https://discord.com/channels/${guildId}>)تجنباً لفقدان القدرة على الوصول إلى الغلاف المدفوع الأجر، يرجى [تحديث معلومات الدفع الخاصة بك ودفع فواتيرك الآن]${customerPortalLink}>.

وستتوقف المقاعد المدفوعة الأجر المتضررة عن المساهمة قريبا إذا لم يتخذ أي إجراء.

تحتاج مساعدة؟ [الدعم المستمر] (https://bnder.net/discord- نحن هنا من أجلك.`;
        },
        files: {
            file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string {
                return `الملف **${fileName}** تم تقاسمها معك في مكان العمل [${guildName}](<https://discord.com/channels/${guildId}>) by <@${userId}>`;
            },
            folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string {
                return `الملف **${folderName}** تم تقاسمها معك في مكان العمل [${guildName}](<https://discord.com/channels/${guildId}>) by <@${userId}>`;
            }
        },
        self_data_download_ready: "بياناتك جاهزة للتنزيل يمكنك تحميله في [ تطبيقنا]https://bnder.net/app/>. وصلة التنزيل متاحة لمدة أسبوعين.",
        tutorial_tasks: {
            tutorial_label_name: "التعليم",
            create_first_task_title: "إنشاء مهمتك الأولى",
            create_first_task_description: "ابدأ بخلق مهمة أعطه اسم ووصف اختياري",
            change_task_status_title: "حالة مهمة التغيير",
            change_task_status_description: "غيّر وضع مهمة لـ\"التقدم\" أو \"الوحدة\" بسحبها إلى العمود المعني.",
            invite_team_members_title: "دعوة أعضاء فريقك",
            invite_team_members_description: "دعوة أعضاء فريقك للانضمام إلى حيز العمل الخاص بك. سيرون الدعوة في أماكن استخدامهم",
            explore_workspace_title: "استكشاف مكان العمل",
            explore_workspace_description: "نستكشف مكان العمل ونتعرف على المميزات يمكنك أن تخلق المهام وتدير الأعضاء وأكثر ويمكنكم أيضاً أن تنظروا في الإطارات لتعديل شكل التاريخ واللغة والزمن الزمني."
        },
        mails: {
            footer: {
                company_limited_liability: "شركة المسؤولية المحدودةUG)",
                company_address: "Im Flath 12 - 38542 Leiferde - Germany",
                company_register_court: "محكمة هيلدشيم المحلية (ألمانيا) - HRB 209373",
                company_ceo: "CEO: Jan Brinkmann",
                company_contact: "Mail: contact@bnder.net - Phone: +49 511 80764975",
                legal_automated_email: "هذا بريد إلكتروني آلي يرجى عدم الرد على هذا البريد الإلكتروني.",
                legal_privacy_policy_prefix: "يرجى قراءة سياسة خصوصيتنا",
                legal_imprint: "Imprint",
                legal_terms_of_use: "مدة الاستخدام",
                legal_privacy_policy: "سياسة الخصوصية",
            },
            verify_email: {
                headline: "تحقق من عنوان البريد الإلكتروني الخاص بك",
                text: "يرجى تأكيد عنوان البريد الإلكتروني الخاص بك بالنقر الرابط أدناه.",
                primaryActionText: "Verify Email",
            },
            password_changed: {
                headline: "تغيرت كلمة السر",
                text: "لقد تغيرت كلمة السر بنجاح إذا لم تبدأي هذا التغيير، يرجى الاتصال على الفور بالدعم على العنوان التالي:",
            },
            reset_password: {
                headline: "أعد كلمة سرك",
                text: "لإعادة تحديد كلمة المرور، يرجى النقر الزر أسفل. إذا لم تطلب إعادة صياغة كلمة السر، يرجى تجاهل هذا البريد الإلكتروني.",
                primaryActionText: "Reset Password",
            },
            workspace_invitation: {
                headline: "دعوة أماكن العمل",
                text(workspaceName: string): string {
                    return `لقد دعيت للانضمام إلى مكان العمل ${workspaceName}- أنقر الزر الوارد أدناه لقبول الدعوة والانضمام إلى مكان العمل.`;
                },
                invitedBy(inviterLabel: string): string {
                    return `المدعو: ${inviterLabel}`;
                },
                primaryActionText: "الفضاء المشترك",
            },
            task_assigned: {
                subject: "لقد تم تكليفك بمهمة جديدة",
                greeting(guildName: string): string {
                    return `لقد تم تكليفك بمهمة في مجال العمل ${guildName}.`;
                },
                no_deadline: "No deadline set for this task.",
                open_in_app: "مفتوح في App",
            },
            primaryPasteActionLinkText: "أَو يَعْبرُ الرابطَ أسفل إلى منظفِكَ:",
            task_subscriber: {
                added_subject: "لقد أضيفتم كمشتركين في مهمة",
                subscriber_added(guildName: string): string {
                    return `لقد أضيفتم كمشتركين في مهمة في مجال العمل ${guildName}وستتلقى إخطارات عندما يتغير شيء في هذه المهمة.`;
                },
                subject: "الإخطار باستكمال المهام",
                activity(guildName: string): string {
                    return `مهمة مشتركة بينكم في مجال العمل ${guildName} لقد تغيرت`;
                }
            },
            self_data_download_ready: {
                headline: "بياناتك جاهزة للتنزيل",
                text: "لقد أعددنا بياناتك للتنزيل يمكنك الوصول إليه في التطبيق وصلة التنزيل متاحة لمدة أسبوعين.",
            },
            payment_failed: {
                headline: "مطلوبة: دفع مخصوما منه الاشتراك في الإجازات المدفوعة",
                text(guildName: string): string {
                    return `لم نتمكن من تجهيز الدفع لمقاعد أو أكثر من البداية أو برو ${guildName}تجنباً لفقدان القدرة على الوصول إلى الغلاف المدفوع الأجر، يرجى تحديث معلومات الدفع الخاصة بك ودفع فواتيرك الآن. وستتوقف المقاعد المدفوعة الأجر المتضررة عن المساهمة قريبا إذا لم يتخذ أي إجراء. تحتاج مساعدة؟ دعم الاتصال - نحن هنا من أجلك.`;
                },
                primaryActionText: "معلومات مستكملة عن المدفوعات"
            },
            // Ticket notification mail and Discord localization keys.
            ticket_notifications: {
                subject_prefix_new: "تذكرة جديدة:",
                subject_prefix_update: "Ticket Update:",
                subject_prefix_sla_warning: "التذاكر SLA تحذير:",
                subject_prefix_status(statusLabel: string): string {
                    return `التذاكر ${statusLabel}:`;
                },
                body_created: "تم إنشاء تذكرة جديدة",
                body_public_message(ticketTitle: string, messagePreview: string): string {
                    return `تم نشر رسالة عامة جديدة.\n\nالتذكرة: ${ticketTitle}\n\nمعاينة الرسالة: ${messagePreview}`;
                },
                body_status_closed(statusLabel: string, ticketTitle: string): string {
                    return `تغير وضع التذكرة إلى "${statusLabel}? ${ticketTitle}`;
                },
                body_auto_closed(ticketTitle: string): string {
                    return `التذكرة أغلقت تلقائياً لأنه لم يرد أي رد من المراسلين في إطار النافذة الزمنية المحددة ${ticketTitle}`;
                },
                body_sla_warning(ticketTitle: string, slaName: string, currentAge: string, targetAge: string): string {
                    return `هذه التذكرة وصلت SLA عتبة تحذير ${ticketTitle}فصيل عبد الواحد: ${slaName}في سن مبكرة ${currentAge}"الحلقة الثالثة" ${targetAge}`;
                },
                reporter_delivery_failed_note(failedRecipient: string): string {
                    return `إرسال البريد الإلكتروني إلى المراسل ${failedRecipient} فشلت قد لا يكون الصحفي قد تلقى آخر تحديث للتذكرة.`;
                },
                reporter_delivery_failed_status(status: string): string {
                    return `الحالة: ${status}`;
                },
                reporter_delivery_failed_diagnostic(diagnostic: string): string {
                    return `التشخيص: ${diagnostic}`;
                },
                reporter_delivery_failed_original_subject(originalSubject: string): string {
                    return `الموضوع الأصلي: ${originalSubject}`;
                },
                subject_prefix_sla_breach(stepLabel: string): string {
                    return `التذاكر SLA بريش: ${stepLabel}`;
                },
                headline_sla_breach(ticketTitle: string): string {
                    return `SLA بريش: ${ticketTitle}`;
                },
                body_sla_breach(slaName: string, stepLabel: string, currentAge: string, targetAge: string): string {
                    return `SLA "${slaName}"مخالفة" ${stepLabel}في السن ${currentAge}"الحلقة الثالثة" ${targetAge}.`;
                },
                sla_step_first_response: "الرد الأول",
                sla_step_next_response: "الرد التالي",
                sla_step_resolution: "القرار",
                action_open_ticket: "تذكرة مفتوحة",
                action_reply_to_ticket: "الرد على التذاكر",
                action_unsubscribe: "غير مطابق من هذه التذكرة",
                footer_brand_context(displayName: string): string {
                    return `Sent for ${displayName} عبر (بندر)`;
                },
                footer_brand_context_link_prefix(displayName: string): string {
                    return `Sent for ${displayName} عبر `;
                },
                footer_brand_context_link_suffix(): string {
                    return ".";
                },
                unknown_inbox_subject: "عنوان غير معروف",
                unknown_inbox_headline: "عنوان غير معروف",
                unknown_inbox_text_with_recipient(recipientAddress: string): string {
                    return `تلقينا بريدك الإلكتروني ${recipientAddress}لكن هذا العنوان لا يُعدّ خصيصاً للحصول على تذكرة لم يتم إنشاء تذكرة، يرجى الاتصال بفريق الدعم الخاص بك وطلب عنوان البريد الإلكتروني الصحيح الخاص بالمشروع.`;
                },
                unknown_inbox_text_without_recipient: "لقد إستلمنا بريدك الإلكتروني لكن هذا العنوان لا يتم تشكيله من أجل التذاكر لم يتم إنشاء تذكرة\n\nيرجى الاتصال بفريق دعمكم وطلب عنوان البريد الإلكتروني الصحيح الخاص بالمشروع.",
                feature_locked_subject: "سمة البريد الإلكتروني التذاكر تتطلب برو",
                feature_locked_headline: "سمة البريد الإلكتروني التذاكر تتطلب برو",
                feature_locked_text: "تلقينا ردك على البريد الإلكتروني، لكن الرد على التذاكر متاح على أماكن العمل فقط. ردك لم يضاف للتذكرة\n\nيرجى الاتصال بفريق الدعم الخاص بك وطلب منهم رفع مستوى مكان العمل إلى Pro.",
                project_member_subject(projectId: string, ticketTitle: string): string {
                    return `تذكرة جديدة في المشروع ${projectId}: ${ticketTitle}`;
                },
                project_member_headline: "تم إنشاء تذكرة جديدة",
                project_member_text(projectId: string, ticketTitle: string): string {
                    return `تم إنشاء تذكرة جديدة في المشروع ${projectId}تذكرة: ${ticketTitle}`;
                },
                project_member_discord_dm(projectId: string, ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `تم إنشاء تذكرة جديدة في المشروع **${projectId}**.
التذكرة: [${ticketTitle}](<${ticketUrl}>)
المعرف: \`${ticketId}\``;
                },
                body_reply_received_confirmation(ticketTitle: string): string {
                    return `تمت إضافة ردك بنجاح إلى محادثة التذكرة.

التذكرة: ${ticketTitle}`;
                },
                subject_assigned(ticketTitle: string): string {
                    return `تم تعيينك إلى التذكرة: ${ticketTitle}`;
                },
                headline_assigned(ticketTitle: string): string {
                    return `تم تعيينك إلى "${ticketTitle}"`;
                },
                body_assigned(ticketTitle: string): string {
                    return `تم تعيينك إلى التذكرة "${ticketTitle}".`;
                },
                subject_reassigned(ticketTitle: string): string {
                    return `أعيد تعيين التذكرة إليك: ${ticketTitle}`;
                },
                headline_reassigned(ticketTitle: string): string {
                    return `أعيد تعيين التذكرة إليك: ${ticketTitle}`;
                },
                body_reassigned(ticketTitle: string): string {
                    return `أنت الآن مسؤول عن التذكرة "${ticketTitle}".`;
                },
                discord_dm_assigned(ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `**تم تعيينك إلى "${ticketTitle}"**
تم تعيينك إلى التذكرة "${ticketTitle}".

[فتح التذكرة](<${ticketUrl}>)
المعرف: \`${ticketId}\``;
                },
                discord_dm_reassigned(ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `**أعيد تعيين التذكرة إليك: ${ticketTitle}**
أنت الآن مسؤول عن التذكرة "${ticketTitle}".

[فتح التذكرة](<${ticketUrl}>)
المعرف: \`${ticketId}\``;
                },
                subject_assignee_reporter_update(ticketTitle: string): string {
                    return `تحديث المراسل في التذكرة المعينة: ${ticketTitle}`;
                },
                headline_assignee_reporter_update(ticketTitle: string): string {
                    return `تحديث المراسل في "${ticketTitle}"`;
                },
                discord_dm_assignee_reporter_update(ticketTitle: string, notificationText: string, ticketUrl: string, ticketId: string): string {
                    return `تحديث المراسل في التذكرة المعينة "${ticketTitle}".
${notificationText}

[فتح التذكرة](<${ticketUrl}>)
المعرف: \`${ticketId}\``;
                },
                subject_mentioned(ticketTitle: string): string {
                    return `إشارة في التذكرة: ${ticketTitle}`;
                },
                headline_mentioned(ticketTitle: string): string {
                    return `تمت الإشارة إليك في "${ticketTitle}"`;
                },
                body_mentioned(messagePreview: string): string {
                    return `معاينة الرسالة: ${messagePreview}`;
                },
                discord_dm_mentioned(ticketTitle: string, messagePreview: string, ticketUrl: string, ticketId: string): string {
                    return `تمت الإشارة إليك في التذكرة "${ticketTitle}".
المعاينة: ${messagePreview}

[فتح التذكرة](<${ticketUrl}>)
المعرف: \`${ticketId}\``;
                },
            },

            open_app: "مفتوح",
        }
    }
}

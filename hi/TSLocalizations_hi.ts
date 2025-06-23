import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_hi {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `कार्य **${id}** ${taskTitle} की समय सीमा सर्वर [${guildName}](https://discord.com/channels/${guildId}) में ${deadline} को समाप्त होने वाली है`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `आपको सर्वर [${guildName}](https://discord.com/channels/${guildId}) में कार्य **${id}** ${taskText} सौंपा गया है`;
            },
            assigned_embed_title(id: string): string {
                return `कार्य ${id} सौंपा गया`;
            },
            assigned_embed_footer: "इन सूचनाओं को \"/preferences direct_messages\" कमांड का उपयोग करके अक्षम नहीं किया जा सकता है।",
            assigned_embed_button_in_progress: "प्रगति पर है के रूप में चिह्नित करें",
            assigned_embed_button_done: "पूर्ण हुआ चिह्नित करें",
            deadline_was_in_past(id: string, guildName: string, guildId: string): string {
                return `कार्य ${id} की समय सीमा सर्वर [${guildName}](https://discord.com/channels/${guildId}) में अतिदेय है`;
            },
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `आपको जो कार्य **${id}** ${taskTitle} सौंपा गया है, उसे दोहराया गया है और सर्वर [${guildName}](https://discord.com/channels/${guildId}) में फिर से करने की आवश्यकता है`;
            },
            repeat_notification_embed_title(id: string): string {
                return `कार्य ${id} दोहराया गया`;
            },
            deadline_alert: "कार्य की समय सीमा",
            commented_embed_title(id: string): string {
                return `कार्य ${id} में टिप्पणी जोड़ी गई`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `एक टिप्पणी एक कार्य में सर्वर [${guildName}](https://discord.com/channels/${guildId}) में ${author} द्वारा जोड़ी गई थी: ${commentText}`;
            },
            comment_response_button: "टिप्पणी का जवाब दें",
            stop_followup_reminder_button: "फॉलो-अप अनुस्मारक रोकें",
            extend_deadline_by_one_day_button: "समय सीमा 1 दिन बढ़ाएँ",
            extend_deadline_by_two_days_button: "समय सीमा 2 दिन बढ़ाएँ",
            extend_deadline_by_one_week_button: "समय सीमा 1 सप्ताह बढ़ाएँ",
            watcher_added_notification(guildName: string, guildId: string, id: string, taskText: string, addedBy: string): string {
                return `आपको <@${addedBy}> द्वारा सर्वर [${guildName}](https://discord.com/channels/${guildId}) में टास्क **${id}** ${taskText} में वॉचर के रूप में जोड़ा गया है। जब इस टास्क में कुछ बदलाव होगा तो आपको नोटिफिकेशन प्राप्त होंगे। यदि आप नोटिफिकेशन प्राप्त करना बंद करना चाहते हैं, तो आप नीचे दिए गए बटन पर क्लिक कर सकते हैं।`;
            },
            watcher_added_notification_unsubscribe_button: "सदस्यता रद्द",
            watcher_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `सर्वर [${guildName}](https://discord.com/channels/${guildId}) में आप जो कार्य **${id}** ${taskTitle} देख रहे हैं, वह बदल गया है:`;
            },
            watcher_notification_footer: "\"/task unwatch\" कमांड का उपयोग करके इस कार्य के लिए अधिसूचनाएँ अक्षम करें",
            watcher_embed_title(id: string): string {
                return `कार्य ${id} अपडेट किया गया`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `माइलस्टोन **${milestoneName}** सर्वर [${guildName}](https://discord.com/channels/${guildId}) पर 6 घंटे से भी कम समय में पूरा होने वाला है और इसमें ऐसे कार्य हैं जिन्हें पूरा करने की आवश्यकता है।`;
            },
            status_todo: "करने के लिए",
            status_in_progress: "प्रगति पर है",
            status_done: "हो गया"
        },
        webhookLogging: {
            id_field: "पहचान",
            deadline_field: "समय सीमा",
            assignees_field: "असाइनी",
            status_field: "स्थिति",
            todos_field: "क्या करें",
            delete_at_field: "पर हटाएँ",
            project_field: "परियोजना",
            topic_field: "विषय",
            text_field: "मूलपाठ",
            role_field: "भूमिका",
            permission_field: "अनुमति",
            user_field: "उपयोगकर्ता",
            preset_field: "प्रीसेट",
            priority_field: "प्राथमिकता",
            label_field: "लेबल",
            personal_field: "निजी",
            manager_field: "प्रबंधक",
            repeat_interval_field: "दिनों में अंतराल दोहराएँ",
            repeat_end_date_field: "समाप्ति तिथि दोहराएँ",
            milestone_field: "मील का पत्थर",
            due_date_field: "अंतिम तिथि",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "करने के लिए";
                    case 1:
                        return "प्रगति पर है";
                    case 2:
                        return "हो गया";
                    default:
                        return "अज्ञात";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `कार्य के लिए अंतिम तिथि ${id}`;
                },
                description(id: string, deadline: string): string {
                    return `कार्य की अंतिम तिथि **${id}** ${deadline} को देय है`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `कार्य ${id} हटा दिया गया.`;
                },
                description(id: string): string {
                    return `कार्य ${id} हटा दिया गया.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `कार्य ${id} दोहराया गया.`;
                },
                description(id: string): string {
                    return `कार्य ${id} दोहराया गया और राज्य को कार्य करने के लिए निर्धारित किया गया।`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `कार्य ${id} बनाया गया.`;
                },
                description(task_text: string, id: string): string {
                    return `कार्य ${id} पाठ के साथ बनाया गया था: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `कार्य ${id} अपडेट किया गया.`;
                },
                description(id: string): string {
                    return `कार्य ${id} अद्यतन किया गया था और निम्नलिखित डेटा बदल दिया गया था।`;
                }
            },
            project_created: {
                title: "प्रोजेक्ट बनाया गया",
                description(projectName: string): string {
                    return `प्रोजेक्ट ${projectName} बनाया गया था`;
                }
            },
            project_deleted: {
                title: "प्रोजेक्ट हटा दिया गया",
                description(projectName: string): string {
                    return `प्रोजेक्ट ${projectName} हटा दिया गया था`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `कार्य ${id} स्थिति बदल गई`;
                }
            },
            permission_granted: {
                title: "की अनुमति दी",
            },
            permission_revoked: {
                title: "अनुमति रद्द कर दी गई",
            },
            preset_applied: {
                title: "प्रीसेट लागू किया गया",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `कार्य ${id} की समय सीमा समाप्त हो चुकी है`;
                }
            },
            project_updated: {
                title: "प्रोजेक्ट अद्यतन किया गया",
                description(name: string): string {
                    return `प्रोजेक्ट ${name} अद्यतन किया गया था`;
                }
            },
            test_message: {
                title: "यह एक परीक्षण संदेश है",
                description: "यदि आप यह संदेश देखते हैं, तो वेबहुक सही ढंग से काम कर रहा है और लॉगिंग सक्षम है।"
            },
            comment_added: {
                title(id: string): string {
                    return `कार्य ${id} पर टिप्पणी जोड़ी गई`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `कार्य ${id} से टिप्पणी हटाई गई`;
                }
            },
            topic_created: {
                title: "विषय बनाया गया",
                description(topicName: string): string {
                    return `विषय ${topicName} बनाया गया था`;
                }
            },
            topic_updated: {
                title: "विषय अद्यतन किया गया",
                description(topicName: string): string {
                    return `विषय ${topicName} अद्यतन किया गया था`;
                }
            },
            topic_deleted: {
                title: "विषय हटाया गया",
                description(topicName: string): string {
                    return `विषय ${topicName} हटाया गया था`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `दस्तावेज ${id} बनाया गया`;
                },
                description(name: string): string {
                    return `दस्तावेज ${name} बनाया गया था`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `दस्तावेज ${id} अद्यतन किया गया`;
                },
                description(name: string): string {
                    return `दस्तावेज ${name} अद्यतन किया गया था`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `दस्तावेज ${id} हटाया गया`;
                },
                description(name: string): string {
                    return `दस्तावेज ${name} हटाया गया था`;
                }
            },
            label_created: {
                title: "लेबल बनाया गया",
                description(name: string): string {
                    return `लेबल ${name} बनाया गया था`;
                }
            },
            label_updated: {
                title: "लेबल अद्यतन किया गया",
                description(name: string): string {
                    return `लेबल ${name} अद्यतन किया गया था`;
                }
            },
            label_deleted: {
                title: "लेबल हटाया गया",
                description(name: string): string {
                    return `लेबल ${name} हटाया गया था`;
                }
            },
            attachments_field: "अटैचमेंट्स",
            milestone_created: {
                title: "मील का पत्थर बनाया गया",
            },
            milestone_updated: {
                title: "मील का पत्थर अद्यतन किया गया",
            },
            milestone_deleted: {
                title: "मील का पत्थर हटाया गया",
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string): string {
                return `आगामी इवेंट (${id}) **${name}** ${durationTillEventMinutes} मिनट में ${startTime} पर [${guildName}](https://discord.com/channels/${guildId}) में शुरू हो रहा है।`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `आपको <@${inviterId}> द्वारा इवेंट ${eventId} में आमंत्रित किया गया है: **${eventName}** जो ${start} से शुरू होकर ${end} पर समाप्त होगा.\n-# सभी तिथियों की गणना ${timezone} में की जाती है। पूरे सर्वर के लिए समय क्षेत्र बदलने के लिए \"/settings timezone\" का उपयोग करें, या अपना खुद का समय क्षेत्र बदलने के लिए \"/preferences timezone\" का उपयोग करें।`;
                },
                accept_button: "स्वीकार करना",
                deny_button: "अस्वीकार करना"
            },
            edit_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `<@${inviterId}> ने ईवेंट ${eventId} को अपडेट किया: **${eventName}** जो ${start} से शुरू होकर ${end} पर समाप्त होता है.\n-# सभी तिथियों की गणना ${timezone} में की जाती है। पूरे सर्वर के लिए समय क्षेत्र बदलने के लिए \"/settings timezone\" का उपयोग करें, या अपना स्वयं का समय क्षेत्र बदलने के लिए \"/preferences timezone\" का उपयोग करें।`;
                }
            }
        },
        pro_granted_notification(guildId: string, guildName: string): string {
            return `बधाई हो! आपको सर्वर [${guildName}](<https://discord.com/channels/${guildId}>) में प्रो सीट पर रखा गया है। इसका मतलब है कि अब आपके पास [प्रो फीचर्स](<https://bnder.net/pricing>) तक पहुँच है। आनंद लें!`;
        },
        payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string {
            return `# 🚨 कार्रवाई की आवश्यकता: प्रो सदस्यता के लिए भुगतान विफल\nहम [${guildName}](<https://discord.com/channels/${guildId}>) पर एक या अधिक प्रो सीटों के लिए भुगतान संसाधित नहीं कर सके। प्रो सुविधाओं तक पहुँच खोने से बचने के लिए, कृपया [अपनी भुगतान जानकारी अपडेट करें और अपना चालान अभी भुगतान करें](<${customerPortalLink}>).\n\nयदि कोई कार्रवाई नहीं की जाती है, तो आपकी प्रो सुविधाएँ जल्द ही अक्षम कर दी जाएँगी.\n\nमदद चाहिए? [सहायता से संपर्क करें](https://bnder.net/discord) — हम आपकी मदद के लिए यहाँ हैं।`;
        },
        files: {
            file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string {
                return `फ़ाइल **${fileName}** को सर्वर [${guildName}](https://discord.com/channels/${guildId}) में उपयोगकर्ता <@${userId}> द्वारा साझा किया गया है।`;
            },
            folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string {
                return `फ़ोल्डर **${folderName}** को सर्वर [${guildName}](https://discord.com/channels/${guildId}) में उपयगकर्ता <@${userId}> द्वारा साझा किया गया है।`;
            }
        },
        self_data_download_ready: "आपका डेटा डाउनलोड के लिए तैयार है। आप इसे [हमारे ऐप](<https://bnder.net/app/>) में डाउनलोड कर सकते हैं। डाउनलोड लिंक दो सप्ताह के लिए उपलब्ध है।"
    }
}
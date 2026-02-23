import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_hi {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `कार्य **${id}** ${taskTitle} की समय सीमा सर्वर [${guildName}](<https://discord.com/channels/${guildId}>) में ${deadline} को समाप्त होने वाली है`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `आपको सर्वर [${guildName}](<https://discord.com/channels/${guildId}>) में कार्य **${id}** ${taskText} सौंपा गया है`;
            },
            assigned_embed_title(id: string): string {
                return `कार्य ${id} सौंपा गया`;
            },
            assigned_embed_footer: "इन सूचनाओं को \"/preferences direct_messages\" कमांड का उपयोग करके अक्षम नहीं किया जा सकता है।",
            assigned_embed_button_in_progress: "प्रगति पर है के रूप में चिह्नित करें",
            assigned_embed_button_done: "पूर्ण हुआ चिह्नित करें",
            deadline_was_in_past(id: string, guildName: string, guildId: string): string {
                return `कार्य ${id} की समय सीमा सर्वर [${guildName}](<https://discord.com/channels/${guildId}>) में अतिदेय है`;
            },
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `आपको जो कार्य **${id}** ${taskTitle} सौंपा गया है, उसे दोहराया गया है और सर्वर [${guildName}](<https://discord.com/channels/${guildId}>) में फिर से करने की आवश्यकता है`;
            },
            repeat_notification_embed_title(id: string): string {
                return `कार्य ${id} दोहराया गया`;
            },
            deadline_alert: "कार्य की समय सीमा",
            commented_embed_title(id: string): string {
                return `कार्य ${id} में टिप्पणी जोड़ी गई`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `एक टिप्पणी एक कार्य में सर्वर [${guildName}](<https://discord.com/channels/${guildId}>) में ${author} द्वारा जोड़ी गई थी: ${commentText}`;
            },
            comment_response_button: "टिप्पणी का जवाब दें",
            stop_followup_reminder_button: "फॉलो-अप अनुस्मारक रोकें",
            extend_deadline_by_one_day_button: "समय सीमा 1 दिन बढ़ाएँ",
            extend_deadline_by_two_days_button: "समय सीमा 2 दिन बढ़ाएँ",
            extend_deadline_by_one_week_button: "समय सीमा 1 सप्ताह बढ़ाएँ",
            subscriber_added_notification(guildName: string, guildId: string, id: string, taskText: string, addedBy: string): string {
                return `आपको कार्य **${id}** ${taskText} के सब्सक्राइबर के रूप में सर्वर [${guildName}](<https://discord.com/channels/${guildId}>) पर <@${addedBy}> द्वारा जोड़ा गया है। आपको इस कार्य में किसी भी परिवर्तन पर सूचनाएँ मिलेंगी। यदि आप सूचनाएँ बंद करना चाहते हैं, तो नीचे दिए गए बटन पर क्लिक करें।`;
            },
            subscriber_added_notification_unsubscribe_button: "अनसब्सक्राइब",
            subscriber_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `कार्य **${id}** ${taskTitle} जिसमें आप सर्वर [${guildName}](<https://discord.com/channels/${guildId}>) पर सब्सक्राइब हैं, बदल गया है:`
            },
            subscriber_notification_footer: "इस कार्य की सूचनाएँ \"/task unsubscribe\" कमांड का उपयोग करके बंद करें",
            subscriber_embed_title(id: string): string {
                return `कार्य ${id} अपडेट किया गया`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `माइलस्टोन **${milestoneName}** सर्वर [${guildName}](<https://discord.com/channels/${guildId}>) पर 6 घंटे से भी कम समय में पूरा होने वाला है और इसमें ऐसे कार्य हैं जिन्हें पूरा करने की आवश्यकता है।`;
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
                return `आगामी इवेंट (${id}) **${name}** ${durationTillEventMinutes} मिनट में ${startTime} पर [${guildName}](<https://discord.com/channels/${guildId}>) में शुरू हो रहा है।`;
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
            },
            booking_reminder: {
                content(workspaceName: string, durationTillEventMinutes: number, location: string, start: string, end: string, timezone: string): string {
                    return `${workspaceName} के लिए आपकी बुकिंग लगभग ${durationTillEventMinutes} मिनट में शुरू होगी (${start} - ${end}, ${timezone}).${location}`;
                },
                title: "आगामी बुकिंग रिमाइंडर",
                manage_bookings_button: "बुकिंग प्रबंधित करें",
            }
        },
        pro_granted_notification(guildId: string, guildName: string): string {
            return `बधाई हो! आपको सर्वर [${guildName}](<https://discord.com/channels/${guildId}>) में प्रो सीट पर रखा गया है। इसका मतलब है कि अब आपके पास [प्रो फीचर्स](<https://bnder.net/pricing>) तक पहुँच है। आनंद लें!`;
        },
        pro_seat_request_notification(guildId: string, guildName: string, requesterUsername: string): string {
            return `उपयोगकर्ता **${requesterUsername}** ने workspace [${guildName}](<https://discord.com/channels/${guildId}>) में एक Pro सीट का अनुरोध किया है। यदि आपके पास कोई उपलब्ध Pro सीट है, तो आप नीचे दिए गए बटन का उपयोग करके उसे प्रदान कर सकते हैं। यदि आपको और Pro सीटों की आवश्यकता है, तो अपनी सदस्यता अपग्रेड करने के लिए [अपने workspace की सेटिंग्स](<https://bnder.net/app/settings/${guildId}/default?tab=1>) पर जाएँ।`;
        },
        request_pro_seat_button_label: "Pro सीट प्रदान करें",
        payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string {
            return `# 🚨 कार्रवाई की आवश्यकता: प्रो सदस्यता के लिए भुगतान विफल\nहम [${guildName}](<https://discord.com/channels/${guildId}>) पर एक या अधिक प्रो सीटों के लिए भुगतान संसाधित नहीं कर सके। प्रो सुविधाओं तक पहुँच खोने से बचने के लिए, कृपया [अपनी भुगतान जानकारी अपडेट करें और अपना चालान अभी भुगतान करें](<${customerPortalLink}>).\n\nयदि कोई कार्रवाई नहीं की जाती है, तो आपकी प्रो सुविधाएँ जल्द ही अक्षम कर दी जाएँगी.\n\nमदद चाहिए? [सहायता से संपर्क करें](https://bnder.net/discord) — हम आपकी मदद के लिए यहाँ हैं।`;
        },
        files: {
            file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string {
                return `फ़ाइल **${fileName}** को सर्वर [${guildName}](<https://discord.com/channels/${guildId}>) में उपयोगकर्ता <@${userId}> द्वारा साझा किया गया है।`;
            },
            folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string {
                return `फ़ोल्डर **${folderName}** को सर्वर [${guildName}](<https://discord.com/channels/${guildId}>) में उपयगकर्ता <@${userId}> द्वारा साझा किया गया है।`;
            }
        },
        self_data_download_ready: "आपका डेटा डाउनलोड के लिए तैयार है। आप इसे [हमारे ऐप](<https://bnder.net/app/>) में डाउनलोड कर सकते हैं। डाउनलोड लिंक दो सप्ताह के लिए उपलब्ध है।",
        tutorial_tasks: {
            tutorial_label_name: "ट्यूटोरियल",
            create_first_task_title: "अपना पहला कार्य बनाएँ",
            create_first_task_description: "एक कार्य बनाकर शुरुआत करें। इसे एक नाम दें और आवश्यकतानुसार विवरण भी जोड़ें।",
            change_task_status_title: "कार्य की स्थिति बदलें",
            change_task_status_description: "किसी कार्य की स्थिति 'प्रगति में' या 'पूर्ण' में बदलने के लिए उसे संबंधित कॉलम में खींचें।",
            invite_team_members_title: "अपनी टीम के सदस्यों को आमंत्रित करें",
            invite_team_members_description: "अपनी टीम के सदस्यों को अपने कार्यक्षेत्र में शामिल होने के लिए आमंत्रित करें। वे अपनी उपयोगकर्ता सेटिंग्स में यह निमंत्रण देखेंगे।",
            explore_workspace_title: "कार्यक्षेत्र का अन्वेषण करें",
            explore_workspace_description: "कार्यक्षेत्र का अन्वेषण करें और सुविधाओं से परिचित हों। आप कार्य बना सकते हैं, सदस्यों का प्रबंधन कर सकते हैं, और भी बहुत कुछ। आप दिनांक प्रारूप, भाषा, और समय क्षेत्र समायोजित करने के लिए सेटिंग्स भी देख सकते हैं।"
        },
        mails: {
            footer: {
                company_limited_liability: "सीमित देयता",
                company_address: "Im Flath 12 - 38542 Leiferde - जर्मनी",
                company_register_court: "हिल्डेसहाइम जिला न्यायालय - HRB 209373",
                company_ceo: "प्रबंध निदेशक: जान ब्रिंकमान",
                company_contact: "ईमेल: contact@bnder.net - फोन: +49 511 45032009",
                legal_automated_email: "यह ईमेल स्वचालित रूप से भेजा गया है। कृपया इसका उत्तर न दें।",
                legal_privacy_policy_prefix: "हमारी गोपनीयता नीति उपलब्ध है:",
                legal_imprint: "इंप्रेसम",
                legal_terms_of_use: "उपयोग की शर्तें",
                legal_privacy_policy: "गोपनीयता नीति",
            },
            verify_email: {
                headline: "कृपया अपना ईमेल पता पुष्टि करें",
                text: "कृपया नीचे दिए गए लिंक पर क्लिक करके अपना ईमेल पता पुष्टि करें।",
                primaryActionText: "ईमेल पता पुष्टि करें",
            },
            password_changed: {
                headline: "पासवर्ड बदला गया",
                text: "आपका पासवर्ड सफलतापूर्वक बदल दिया गया है। यदि आपने यह परिवर्तन नहीं किया है, तो कृपया तुरंत contact@bnder.net पर सहायता टीम से संपर्क करें।",
            },
            reset_password: {
                headline: "पासवर्ड रीसेट करें",
                text: "अपना पासवर्ड रीसेट करने के लिए कृपया नीचे दिए गए बटन पर क्लिक करें। यदि आपने पासवर्ड रीसेट का अनुरोध नहीं किया है, तो इस ईमेल को अनदेखा करें।",
                primaryActionText: "पासवर्ड रीसेट करें",
            },
            workspace_invitation: {
                headline: "वर्कस्पेस निमंत्रण",
                text(workspaceName: string): string {
                    return `आपको वर्कस्पेस ${workspaceName} में आमंत्रित किया गया है। निमंत्रण स्वीकार करने और वर्कस्पेस से जुड़ने के लिए नीचे दिए गए बटन पर क्लिक करें।`;
                },
                primaryActionText: "वर्कस्पेस से जुड़ें",
            },
            task_assigned: {
                subject: "आपको एक नया कार्य सौंपा गया है",
                greeting(guildName: string): string {
                    return `आपको कार्यक्षेत्र ${guildName} में एक कार्य सौंपा गया है।`;
                },
                no_deadline: "इस कार्य के लिए कोई समय सीमा निर्धारित नहीं की गई है।",
                open_in_app: "कार्य को ऐप में खोलें",
            },
            primaryPasteActionLinkText: "या नीचे दिए गए लिंक को अपने ब्राउज़र में पेस्ट करें:",
            task_subscriber: {
                added_subject: "आपको किसी कार्य के सब्सक्राइबर के रूप में जोड़ा गया है",
                subscriber_added(guildName: string): string {
                    return `आपको कार्यक्षेत्र ${guildName} में एक कार्य के सब्सक्राइबर के रूप में जोड़ा गया है। जब भी इस कार्य में कोई बदलाव होगा, आपको सूचनाएँ मिलेंगी।`;
                },
                subject: "कार्य अपडेट सूचना",
                activity(guildName: string): string {
                    return `आपके द्वारा सब्सक्राइब किया गया कार्य कार्यक्षेत्र ${guildName} में बदल गया है।`;
                }
            },
            self_data_download_ready: {
                headline: "आपका डेटा डाउनलोड के लिए तैयार है",
                text: "हमने आपका डेटा डाउनलोड के लिए तैयार कर लिया है। आप इसे ऐप में एक्सेस कर सकते हैं। डाउनलोड लिंक दो हफ्तों तक उपलब्ध रहेगा।",
            },
            payment_failed: {
                headline: "🚨 कार्रवाई आवश्यक: प्रो सब्सक्रिप्शन के लिए भुगतान विफल",
                text(guildName: string): string {
                    return `हम ${guildName} पर एक या एक से ज़्यादा प्रो सीटों का भुगतान संसाधित नहीं कर सके। प्रो सुविधाओं तक पहुँच खोने से बचने के लिए, कृपया अपनी भुगतान जानकारी अपडेट करें और अभी अपना इनवॉइस भुगतान करें। अगर कोई कार्रवाई नहीं की गई, तो आपकी प्रो सुविधाएँ जल्द ही बंद कर दी जाएँगी। मदद चाहिए? सहायता टीम से संपर्क करें — हम आपकी मदद के लिए मौजूद हैं।`;
                },
                primaryActionText: "भुगतान जानकारी अपडेट करें"
            },
            // Ticket notification mail and Discord localization keys.
            ticket_notifications: {
                subject_prefix_new: "नया टिकट:",
                subject_prefix_update: "टिकट अपडेट:",
                subject_prefix_sla_warning: "टिकट SLA चेतावनी:",
                subject_prefix_status(statusLabel: string): string {
                    return `टिकट ${statusLabel}:`;
                },
                body_created: "एक नया टिकट बनाया गया है।",
                body_public_message(ticketTitle: string, messagePreview: string): string {
                    return `एक नया सार्वजनिक संदेश पोस्ट किया गया है।\n\nटिकट: ${ticketTitle}\n\nसंदेश पूर्वावलोकन: ${messagePreview}`;
                },
                body_status_closed(statusLabel: string, ticketTitle: string): string {
                    return `टिकट की स्थिति \"${statusLabel}\" में बदल गई है।\n\nटिकट: ${ticketTitle}`;
                },
                body_auto_closed(ticketTitle: string): string {
                    return `कॉन्फ़िगर की गई समय-सीमा में रिपोर्टर से कोई उत्तर न मिलने के कारण टिकट अपने-आप बंद कर दिया गया।\n\nटिकट: ${ticketTitle}`;
                },
                body_sla_warning(ticketTitle: string, slaName: string, currentAge: string, targetAge: string): string {
                    return `यह टिकट अपनी SLA चेतावनी सीमा तक पहुँच गया है।\n\nटिकट: ${ticketTitle}\nSLA: ${slaName}\nवर्तमान आयु: ${currentAge}\nलक्ष्य: ${targetAge}`;
                },
                action_open_ticket: "टिकट खोलें",
                action_reply_to_ticket: "टिकट का उत्तर दें",
                action_unsubscribe: "इस टिकट से सदस्यता हटाएँ",
                unknown_inbox_subject: "अज्ञात टिकट इनबॉक्स पता",
                unknown_inbox_headline: "अज्ञात टिकट इनबॉक्स पता",
                unknown_inbox_text_with_recipient(recipientAddress: string): string {
                    return `हमें आपका ईमेल ${recipientAddress} पर प्राप्त हुआ, लेकिन यह इनबॉक्स पता टिकट प्राप्त करने के लिए कॉन्फ़िगर नहीं है। कोई टिकट नहीं बनाया गया।\n\nकृपया अपनी सपोर्ट टीम से संपर्क करें और सही प्रोजेक्ट-विशिष्ट टिकट ईमेल पता माँगें।`;
                },
                unknown_inbox_text_without_recipient: "हमें आपका ईमेल प्राप्त हुआ, लेकिन यह इनबॉक्स पता टिकट प्राप्त करने के लिए कॉन्फ़िगर नहीं है। कोई टिकट नहीं बनाया गया।\n\nकृपया अपनी सपोर्ट टीम से संपर्क करें और सही प्रोजेक्ट-विशिष्ट टिकट ईमेल पता माँगें।",
                feature_locked_subject: "टिकट ईमेल सुविधा के लिए Pro आवश्यक है",
                feature_locked_headline: "टिकट ईमेल सुविधा के लिए Pro आवश्यक है",
                feature_locked_text: "हमें आपका ईमेल उत्तर प्राप्त हुआ, लेकिन टिकट के लिए ईमेल द्वारा उत्तर देना केवल Pro वर्कस्पेस में उपलब्ध है। आपका उत्तर टिकट में नहीं जोड़ा गया।\n\nकृपया अपनी सपोर्ट टीम से संपर्क करें और उनसे वर्कस्पेस को Pro में अपग्रेड करने के लिए कहें।",
                project_member_subject(projectId: string, ticketTitle: string): string {
                    return `प्रोजेक्ट ${projectId} में नया टिकट: ${ticketTitle}`;
                },
                project_member_headline: "एक नया टिकट बनाया गया है",
                project_member_text(projectId: string, ticketTitle: string): string {
                    return `प्रोजेक्ट ${projectId} में एक नया टिकट बनाया गया है।\n\nटिकट: ${ticketTitle}`;
                },
                project_member_discord_dm(projectId: string, ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `प्रोजेक्ट **${projectId}** में एक नया टिकट बनाया गया है।\nटिकट: [${ticketTitle}](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
                body_reply_received_confirmation(ticketTitle: string): string {
                    return `आपका उत्तर टिकट वार्तालाप में सफलतापूर्वक जोड़ दिया गया।\n\nटिकट: ${ticketTitle}`;
                },
            },

            open_app: "ऐप खोलें",
        }
    }
}
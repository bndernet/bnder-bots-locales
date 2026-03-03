import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_tr {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `Görev **${id}** ${taskTitle} için son tarih çalışma alanı [${guildName}](<https://discord.com/channels/${guildId}>)'da ${deadline} tarihinde sona erecektir.`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `çalışma alanıda **${id}** ${taskText} görevine atandınız [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            assigned_embed_title(id: string): string {
                return `Görev ${id} atandı`;
            },
            assigned_embed_footer: "Bu bildirimler çalışma alanı yöneticisi tarafından \"/preferences direct_messages\" komutu kullanılarak devre dışı bırakılabilir.",
            assigned_embed_button_in_progress: "Devam ediyor",
            assigned_embed_button_done: "Yapıldı",
            deadline_was_in_past(id: string, guildName: string, guildId: string): string {
                return `Görev **${id}** için son teslim tarihi çalışma alanıda [${guildName}](<https://discord.com/channels/${guildId}>) geçmiş`;
            },
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `Görev **${id}** ${taskTitle} atandığınız çalışma alanı tekrarlandı ve [${guildName}](<https://discord.com/channels/${guildId}>) çalışma alanısunda tekrar yapılması gerekiyor.`;
            },
            repeat_notification_embed_title(id: string): string {
                return `Görev ${id} tekrarlandı`;
            },
            deadline_alert: "Görevin son teslim tarihi",
            commented_embed_title(id: string): string {
                return `Göreve yorum eklendi: ${id}`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `çalışma alanıda [${guildName}](<https://discord.com/channels/${guildId}>) bir göreve ${author} tarafından yorum eklendi: ${commentText}`;
            },
            comment_response_button: "Yoruma yanıt ver",
            stop_followup_reminder_button: "Takip hatırlatmasını durdur",
            extend_deadline_by_one_day_button: "Son teslim tarihini 1 gün uzatın",
            extend_deadline_by_two_days_button: "Son teslim tarihini 2 gün uzatın",
            extend_deadline_by_one_week_button: "Son teslim tarihini 1 hafta uzatın",
            subscriber_added_notification(guildName: string, guildId: string, id: string, taskText: string, addedBy: string): string {
                return `çalışma alanı [${guildName}](<https://discord.com/channels/${guildId}>) üzerinde <@${addedBy}> tarafından **${id}** ${taskText} görevine abone olarak eklendiniz. Bu görevde bir değişiklik olduğunda bildirim alacaksınız. Bildirim almak istemiyorsanız aşağıdaki butona tıklayabilirsiniz.`;
            },
            subscriber_added_notification_unsubscribe_button: "Abonelikten çık",
            subscriber_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `çalışma alanı [${guildName}](<https://discord.com/channels/${guildId}>) üzerinde abone olduğunuz **${id}** ${taskTitle} görevi değişti:`
            },
            subscriber_notification_footer: "Bu görev bildirimlerini \"/task unsubscribe\" komutuyla devre dışı bırakabilirsiniz",
            subscriber_embed_title(id: string): string {
                return `Görev ${id} güncellendi`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `**${milestoneName}** kilometre taşı, 6 saatten az bir süre içinde [${guildName}](<https://discord.com/channels/${guildId}>) çalışma alanısunda yayınlanacak ve tamamlanması gereken görevler içeriyor.`;
            },
            status_todo: "Yapılacak",
            status_in_progress: "Devam ediyor",
            status_done: "Yapıldı"
        },
        webhookLogging: {
            id_field: "Id",
            deadline_field: "Son teslim tarihi",
            assignees_field: "Atananlar",
            status_field: "Durum",
            todos_field: "Yapılacaklar",
            delete_at_field: "Silinme tarihi",
            text_field: "Metin",
            project_field: "Proje",
            topic_field: "Konu",
            role_field: "Rol",
            permission_field: "İzin",
            user_field: "Kullanıcı",
            preset_field: "Ön ayar",
            priority_field: "Öncelik",
            label_field: "Etiket",
            manager_field: "Yönetici",
            repeat_interval_field: "Gün cinsinden tekrar aralığı",
            repeat_end_date_field: "Tekrar bitiş tarihi",
            milestone_field: "Kilometre taşı",
            due_date_field: "Son teslim tarihi",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "Todo";
                    case 1:
                        return "Devam ediyor";
                    case 2:
                        return "Yapıldı";
                    default:
                        return "Bilinmiyor";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `Görev ${id} için son teslim tarihi`;
                },
                description(id: string, deadline: string): string {
                    return `Görev **${id}** için son teslim tarihi ${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `Görev ${id} silindi.`;
                },
                description(id: string): string {
                    return `Görev ${id} çöpten silindi.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `Görev ${id} tekrarlandı.`;
                },
                description(id: string): string {
                    return `Görev ${id} tekrarlandı ve durum todo olarak ayarlandı.`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `Görev ${id} oluşturuldu.`;
                },
                description(task_text: string, id: string): string {
                    return `Görev ${id} metinle oluşturuldu: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `Görev ${id} güncellendi.`;
                },
                description(id: string): string {
                    return `Görev ${id} güncellendi ve aşağıdaki veriler değiştirildi.`;
                }
            },
            project_created: {
                title: "Proje oluşturuldu",
                description(projectName: string): string {
                    return `Proje ${projectName} oluşturuldu`;
                }
            },
            project_deleted: {
                title: "Proje silindi",
                description(projectName: string): string {
                    return `Proje ${projectName} silindi`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `Görev ${id} durumu değişti`;
                }
            },
            permission_granted: {
                title: "İzin verildi",
            },
            permission_revoked: {
                title: "İzin geri alındı",
            },
            preset_applied: {
                title: "Ön ayar uygulandı",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `Görev ${id} için son teslim tarihi geçmişti`;
                }
            },
            project_updated: {
                title: "Proje güncellendi",
                description(name: string): string {
                    return `Proje ${name} güncellendi`;
                }
            },
            test_message: {
                title: "Bu bir test mesajıdır",
                description: "Bu mesajı görüyorsanız, web kancası doğru çalışıyor ve günlüğe kayıt etme etkin."
            },
            comment_added: {
                title(id: string): string {
                    return `Yorum eklendi: ${id}`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `Yorum silindi: ${id}`;
                }
            },
            topic_created: {
                title: "Konu oluşturuldu",
                description(name: string): string {
                    return `Konu ${name} oluşturuldu`;
                }
            },
            topic_updated: {
                title: "Konu güncellendi",
                description(name: string): string {
                    return `Konu ${name} güncellendi`;
                }
            },
            topic_deleted: {
                title: "Konu silindi",
                description(name: string): string {
                    return `Konu ${name} silindi`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `Belge oluşturuldu: ${id}`;
                },
                description(name: string): string {
                    return `Belge ${name} oluşturuldu`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `Belge güncellendi: ${id}`;
                },
                description(name: string): string {
                    return `Belge ${name} güncellendi`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `Belge silindi: ${id}`;
                },
                description(name: string): string {
                    return `Belge ${name} silindi`;
                }
            },
            label_created: {
                title: "Etiket oluşturuldu",
                description(name: string): string {
                    return `Etiket ${name} oluşturuldu`;
                }
            },
            label_updated: {
                title: "Etiket güncellendi",
                description(name: string): string {
                    return `Etiket ${name} güncellendi`;
                }
            },
            label_deleted: {
                title: "Etiket silindi",
                description(name: string): string {
                    return `Etiket ${name} silindi`;
                }
            },
            attachments_field: "Ekler",
            milestone_created: {
                title: "Kilometre taşı oluşturuldu",
            },
            milestone_updated: {
                title: "Kilometre taşı güncellendi",
            },
            milestone_deleted: {
                title: "Kilometre taşı silindi",
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string): string {
                return `Yaklaşan etkinlik (${id}) **${name}** ${durationTillEventMinutes} dakika içinde, ${startTime} saatinde [${guildName}](<https://discord.com/channels/${guildId}>) başlayacak.`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `${eventId} adlı etkinliğe <@${inviterId}> tarafından davet edildiniz: **${eventName}**, ${start}'da başlayıp ${end}'de bitiyor.\n-# Tüm tarihler ${timezone}'da hesaplanır. Tüm çalışma alanınun saat dilimini değiştirmek için \"/settings timezone\" veya kendi saat diliminizi değiştirmek için \"/preferences timezone\" kullanın.`;
                },
                accept_button: "Kabul et",
                deny_button: "Reddet"
            },
            edit_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `<@${inviterId}> ${eventId} etkinliğini güncelledi: **${eventName}** ${start}'da başlayıp ${end}'de bitiyor.\n-# Tüm tarihler ${timezone}'da hesaplanır. Tüm çalışma alanı için saat dilimini değiştirmek için \"/settings timezone\" veya kendi saat diliminizi değiştirmek için \"/preferences timezone\" kullanın.`;
                }
            },
            booking_reminder: {
                content(workspaceName: string, durationTillEventMinutes: number, location: string, start: string, end: string, timezone: string): string {
                    return `${workspaceName} için rezervasyonunuz yaklaşık ${durationTillEventMinutes} dakika içinde başlayacak (${start} - ${end}, ${timezone}).${location}`;
                },
                title: "Yaklaşan rezervasyon hatırlatıcısı",
                manage_bookings_button: "Rezervasyonu yönet",
            }
        },
        pro_granted_notification(guildId: string, guildName: string): string {
            return `Tebrikler! [${guildName}](<https://discord.com/channels/${guildId}>) çalışma alanısunda profesyonel bir koltuğa yerleştirildiniz. Bu, artık [pro özelliklere](<https://bnder.net/pricing>) erişebileceğiniz anlamına geliyor. İyi eğlenceler!`;
        },
        pro_seat_request_notification(guildId: string, guildName: string, requesterUsername: string): string {
            return `**${requesterUsername}** kullanıcısı, [${guildName}](<https://discord.com/channels/${guildId}>) çalışma alanında bir Pro koltuk talep etti. Eğer kullanılabilir bir Pro koltuğunuz varsa, aşağıdaki düğmeyi kullanarak verebilirsiniz. Daha fazla Pro koltuğa ihtiyacınız varsa, aboneliğinizi yükseltmek için [çalışma alanı ayarlarınıza](<https://bnder.net/app/settings/${guildId}/default?tab=1>) gidin.`;
        },
        request_pro_seat_button_label: "Pro koltuk ver",
        payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string {
            return `# 🚨 İşlem Gerekli: Pro Aboneliği için Ödeme Başarısız Oldu\n[${guildName}](<https://discord.com/channels/${guildId}>) üzerinde bir veya daha fazla Pro koltuğu için ödemeyi işleme koyamadık. Pro özelliklerine erişiminizi kaybetmemek için lütfen [ödeme bilgilerinizi güncelleyin ve faturanızı hemen ödeyin](<${customerPortalLink}>).\n\nHerhangi bir işlem yapılmazsa Pro özellikleriniz yakında devre dışı bırakılacak.\n\nYardıma mı ihtiyacınız var? [Destek ekibiyle iletişime geçin](https://bnder.net/discord) — sizin için buradayız.`;
        },
        files: {
            file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string {
                return `**${fileName}** dosyası [${guildName}](<https://discord.com/channels/${guildId}>) çalışma alanısunda paylaşıldı.`;
            },
            folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string {
                return `**${folderName}** klasörü [${guildName}](<https://discord.com/channels/${guildId}>) çalışma alanısunda paylaşıldı.`;
            }
        },
        self_data_download_ready: "Verileriniz indirilmeye hazır. Bunu [uygulamamızdan](<https://bnder.net/app/>) indirebilirsiniz. İndirme bağlantısı iki hafta boyunca kullanılabilir.",
        tutorial_tasks: {
            tutorial_label_name: "Eğitim",
            create_first_task_title: "İlk görevinizi oluşturun",
            create_first_task_description: "Bir görev oluşturarak başlayın. Ona bir isim verin ve isteğe bağlı olarak bir açıklama ekleyin.",
            change_task_status_title: "Görev durumunu değiştirin",
            change_task_status_description: "Bir görevin durumunu 'Devam Ediyor' veya 'Tamamlandı' olarak değiştirmek için görevi ilgili sütuna sürükleyin.",
            invite_team_members_title: "Takım üyelerinizi davet edin",
            invite_team_members_description: "Takım üyelerinizi çalışma alanınıza katılmaları için davet edin. Daveti kullanıcı ayarlarında görecekler.",
            explore_workspace_title: "Çalışma alanını keşfedin",
            explore_workspace_description: "Çalışma alanını keşfedin ve özelliklere alışın. Görevler oluşturabilir, üyeleri yönetebilir ve daha fazlasını yapabilirsiniz. Ayrıca tarih formatı, dil ve zaman dilimini ayarlamak için ayarlara da göz atabilirsiniz."
        },
        mails: {
            footer: {
                company_limited_liability: "sınırlı sorumluluk",
                company_address: "Im Flath 12 - 38542 Leiferde - Almanya",
                company_register_court: "Amtsgericht Hildesheim - HRB 209373",
                company_ceo: "Yönetici: Jan Brinkmann",
                company_contact: "E-Posta: contact@bnder.net - Telefon: +49 511 45032009",
                legal_automated_email: "Bu e-posta otomatik olarak gönderilmiştir. Lütfen yanıt vermeyin.",
                legal_privacy_policy_prefix: "Gizlilik politikamızı aşağıda bulabilirsiniz",
                legal_imprint: "Yasal Bilgiler",
                legal_terms_of_use: "Kullanım Koşulları",
                legal_privacy_policy: "Gizlilik Politikası",
            },
            verify_email: {
                headline: "Lütfen e-posta adresinizi onaylayın",
                text: "Lütfen aşağıdaki bağlantıya tıklayarak e-posta adresinizi onaylayın.",
                primaryActionText: "E-posta adresini onayla",
            },
            password_changed: {
                headline: "Şifre değiştirildi",
                text: "Şifreniz başarıyla değiştirildi. Eğer bu değişikliği siz yapmadıysanız, lütfen hemen contact@bnder.net adresinden destek ile iletişime geçin.",
            },
            reset_password: {
                headline: "Şifre sıfırlama",
                text: "Şifrenizi sıfırlamak için lütfen aşağıdaki butona tıklayın. Şifre sıfırlama talebinde bulunmadıysanız, bu e-postayı dikkate almayın.",
                primaryActionText: "Şifreyi sıfırla",
            },
            workspace_invitation: {
                headline: "Workspace Daveti",
                text(workspaceName: string): string {
                    return `${workspaceName} workspace'ine davet edildiniz. Daveti kabul etmek ve workspace'e katılmak için aşağıdaki butona tıklayın.`;
                },
                primaryActionText: "Workspace'e katıl",
            },
            task_assigned: {
                subject: "Size yeni bir görev atandı",
                greeting(guildName: string): string {
                    return `${guildName} çalışma alanında bir göreve atandınız.`;
                },
                no_deadline: "Bu görev için belirlenmiş bir son tarih yok.",
                open_in_app: "Uygulamada aç",
            },
            primaryPasteActionLinkText: "Ya da aşağıdaki bağlantıyı tarayıcınıza yapıştırın:",
            task_subscriber: {
                added_subject: "Bir görevin abonesi olarak eklendiniz",
                subscriber_added(guildName: string): string {
                    return `Workspace ${guildName} içinde bir görevin abonesi olarak eklendiniz. Bu görevde bir değişiklik olduğunda bildirim alacaksınız.`;
                },
                subject: "Görev güncelleme bildirimi",
                activity(guildName: string): string {
                    return `Workspace ${guildName} içinde abone olduğunuz bir görev değiştirildi.`;
                }
            },
            self_data_download_ready: {
                headline: "Verileriniz indirilmeye hazır",
                text: "Verileriniz indirilmeye hazırlandı. Uygulamada erişebilirsiniz. İndirme bağlantısı iki hafta boyunca geçerlidir.",
            },
            payment_failed: {
                headline: "🚨 İşlem gerekli: Pro abonelik ödemesi başarısız oldu",
                text(guildName: string): string {
                    return `Bir veya daha fazla Pro koltuğu için ${guildName} üzerinde ödeme işlenemedi. Pro özelliklerine erişimi kaybetmemek için lütfen ödeme bilgilerinizi güncelleyin ve faturayı hemen ödeyin. Hiçbir işlem yapılmazsa Pro özellikleriniz yakında devre dışı bırakılacak. Yardıma mı ihtiyacınız var? Destek ile iletişime geçin — buradayız.`;
                },
                primaryActionText: "Ödeme bilgilerini güncelle"
            },
            // Ticket notification mail and Discord localization keys.
            ticket_notifications: {
                subject_prefix_new: "Yeni Talep:",
                subject_prefix_update: "Talep Güncellemesi:",
                subject_prefix_sla_warning: "Talep SLA Uyarısı:",
                subject_prefix_status(statusLabel: string): string {
                    return `Talep ${statusLabel}:`;
                },
                body_created: "Yeni bir talep oluşturuldu.",
                body_public_message(ticketTitle: string, messagePreview: string): string {
                    return `Yeni bir herkese açık mesaj gönderildi.\n\nTalep: ${ticketTitle}\n\nMesaj önizlemesi: ${messagePreview}`;
                },
                body_status_closed(statusLabel: string, ticketTitle: string): string {
                    return `Talep durumu \"${statusLabel}\" olarak değiştirildi.\n\nTalep: ${ticketTitle}`;
                },
                body_auto_closed(ticketTitle: string): string {
                    return `Yapılandırılmış zaman aralığında bildirenden yanıt alınmadığı için talep otomatik olarak kapatıldı.\n\nTalep: ${ticketTitle}`;
                },
                body_sla_warning(ticketTitle: string, slaName: string, currentAge: string, targetAge: string): string {
                    return `Bu talep SLA uyarı eşiğine ulaştı.\n\nTalep: ${ticketTitle}\nSLA: ${slaName}\nMevcut süre: ${currentAge}\nHedef: ${targetAge}`;
                },
                action_open_ticket: "Talebi Aç",
                action_reply_to_ticket: "Talebe Yanıt Ver",
                action_unsubscribe: "Bu talepten aboneliği kaldır",
                unknown_inbox_subject: "Bilinmeyen talep gelen kutusu adresi",
                unknown_inbox_headline: "Bilinmeyen talep gelen kutusu adresi",
                unknown_inbox_text_with_recipient(recipientAddress: string): string {
                    return `E-postanızı ${recipientAddress} adresine aldık, ancak bu gelen kutusu adresi talep alımı için yapılandırılmamış. Hiçbir talep oluşturulmadı.\n\nLütfen destek ekibinizle iletişime geçin ve doğru projeye özel talep e-posta adresini isteyin.`;
                },
                unknown_inbox_text_without_recipient: "E-postanızı aldık, ancak bu gelen kutusu adresi talep alımı için yapılandırılmamış. Hiçbir talep oluşturulmadı.\n\nLütfen destek ekibinizle iletişime geçin ve doğru projeye özel talep e-posta adresini isteyin.",
                feature_locked_subject: "Talep e-posta özelliği Pro gerektirir",
                feature_locked_headline: "Talep e-posta özelliği Pro gerektirir",
                feature_locked_text: "E-posta yanıtınızı aldık, ancak taleplere e-posta ile yanıt verme yalnızca Pro çalışma alanlarında kullanılabilir. Yanıtınız talebe eklenmedi.\n\nLütfen destek ekibinizle iletişime geçin ve çalışma alanını Pro'ya yükseltmelerini isteyin.",
                project_member_subject(projectId: string, ticketTitle: string): string {
                    return `${projectId} projesinde yeni talep: ${ticketTitle}`;
                },
                project_member_headline: "Yeni bir talep oluşturuldu",
                project_member_text(projectId: string, ticketTitle: string): string {
                    return `${projectId} projesinde yeni bir talep oluşturuldu.\n\nTalep: ${ticketTitle}`;
                },
                project_member_discord_dm(projectId: string, ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `**${projectId}** projesinde yeni bir talep oluşturuldu.\nTalep: [${ticketTitle}](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
                body_reply_received_confirmation(ticketTitle: string): string {
                    return `Yanıtınız talep konuşmasına başarıyla eklendi.\n\nTalep: ${ticketTitle}`;
                },
                subject_assigned(ticketTitle: string): string {
                    return `Size talep atandı: ${ticketTitle}`;
                },
                headline_assigned(ticketTitle: string): string {
                    return `"${ticketTitle}" size atandı`;
                },
                body_assigned(ticketTitle: string): string {
                    return `"${ticketTitle}" talebi size atandı.`;
                },
                subject_reassigned(ticketTitle: string): string {
                    return `Talep size yeniden atandı: ${ticketTitle}`;
                },
                headline_reassigned(ticketTitle: string): string {
                    return `Talep size yeniden atandı: ${ticketTitle}`;
                },
                body_reassigned(ticketTitle: string): string {
                    return `Artık "${ticketTitle}" talebinden siz sorumlusunuz.`;
                },
                discord_dm_assigned(ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `**"${ticketTitle}" size atandı**\n"${ticketTitle}" talebi size atandı.\n\n[Talebi aç](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
                discord_dm_reassigned(ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `**Talep size yeniden atandı: ${ticketTitle}**\nArtık "${ticketTitle}" talebinden siz sorumlusunuz.\n\n[Talebi aç](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
                subject_assignee_reporter_update(ticketTitle: string): string {
                    return `Atanmış talepte bildirici güncellemesi: ${ticketTitle}`;
                },
                headline_assignee_reporter_update(ticketTitle: string): string {
                    return `"${ticketTitle}" için bildirici güncellemesi`;
                },
                discord_dm_assignee_reporter_update(ticketTitle: string, notificationText: string, ticketUrl: string, ticketId: string): string {
                    return `Atanmış "${ticketTitle}" talebinde bildirici güncellemesi.\n${notificationText}\n\n[Talebi aç](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
                subject_mentioned(ticketTitle: string): string {
                    return `Talepte bahsedildiniz: ${ticketTitle}`;
                },
                headline_mentioned(ticketTitle: string): string {
                    return `"${ticketTitle}" içinde sizden bahsedildi`;
                },
                body_mentioned(messagePreview: string): string {
                    return `Mesaj önizlemesi: ${messagePreview}`;
                },
                discord_dm_mentioned(ticketTitle: string, messagePreview: string, ticketUrl: string, ticketId: string): string {
                    return `"${ticketTitle}" talebinde sizden bahsedildi.\nÖnizleme: ${messagePreview}\n\n[Talebi aç](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
            },

            open_app: "Uygulamayı Aç",
        }
    }
}